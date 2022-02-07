import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
import ReCAPTCHA from 'react-google-recaptcha';
import Loading from '../components/loading';

const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;

const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().required('Required').email(),
  name: Yup.string().required('Required'),
  company: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});

const ContactForm = ({ setshowmessage, setmessage, setshowAnimation, showAnimation }) => {
  const [recaptchaResponse, setRecaptchaResponse] = useState(null);

  const onRecaptchaChange = (value) => setRecaptchaResponse(value);
  const onExpiredRecaptcha = () => setRecaptchaResponse(null);

  const getErrorMessage = (message) => {
    if (!message) {
      return 'Oops something went wrong';
    }
    if (typeof message === 'object') {
      return message[Object.keys(message)[0]]?.message.replace(/\"/g, ''); // get message of first element in object
    }
    return message;
  };

  const postData = async (datapost, resetForm) => {
    setshowAnimation(true);

    const response = await repository.sendMail({ recaptchaResponse, ...datapost });
    if (response.status == 204) {
      setmessage('Request submitted');
      resetForm();
    } else {
      setmessage(getErrorMessage(response.data?.message));
    }
    setshowmessage(true);
    setshowAnimation(false);
    expiredCallback();
  };
  return (
    <>
      {' '}
      <Formik
        initialValues={{
          name: '',
          company: '',
          phone: '',
          email: '',
          message: '',
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (values, { resetForm }) => {
          await postData(values, resetForm);
        }}
      >
        {({ errors, touched, getFieldProps, handleSubmit }) => {
          // cstErrors = errors;

          return (
            <Form>
              <p className="psd">
                Request a 30 minute demo below and let us show you how Accurate™ can benefit your organization
              </p>
              <div className="row">
                <div className="col-lg-6 ">
                  <input placeholder="Name*" {...getFieldProps('name')} />
                  {errors.name && <div className="erorr">{errors.name}</div>}
                </div>
                <div className="col-lg-6  ">
                  <input type="email" placeholder="Email*" {...getFieldProps('email')} />{' '}
                  {errors.email && <div className="erorr">{errors.email}</div>}
                </div>
                <div className="col-lg-6 ">
                  <input placeholder="Company*" {...getFieldProps('company')} />
                  {errors.company && <div className="erorr">{errors.company}</div>}
                </div>
                <div className="col-lg-6 ">
                  <input placeholder="Phone" {...getFieldProps('phone')} />
                </div>
                <div className="col-12  ">
                  <textarea
                    name
                    cols={30}
                    rows={7}
                    placeholder="Your message*"
                    className="site-input w-100 p-3"
                    {...getFieldProps('message')}
                  />
                  {errors.message && (
                    <div className="erorr" style={{ marginBottom: 16, marginTop: -7 }}>
                      {errors.message}
                    </div>
                  )}
                </div>
                <div className="btn-cst-hs3 col-12  text-center d-flex justify-content-between align-items-center">
                  <ReCAPTCHA sitekey={sitekey} onChange={onRecaptchaChange} onExpired={onExpiredRecaptcha} />
                  <button disabled={!recaptchaResponse} type="submit" className="btn btn-cst">
                    {showAnimation == true ? <Loading /> : ' Submit'}
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ContactForm;
