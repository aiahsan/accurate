import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
import { useRecaptcha } from "react-hook-recaptcha";
import Loading from "../components/loading";

const sitekey = "6LfuMoQcAAAAAHcPE5qllK7XfT00PTEByMnUZSVQ";  // change to your sitekey
const containerId = "test-recaptcha";  // this id can be customized

const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().required('Required').email(),
  name: Yup.string().required('Required'),
  company: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});

export default ({ setshowmessage, setmessage, setshowAnimation ,showAnimation}) => {
  const [captchaResponse, setCaptchaResponse] = React.useState(null);
  const successCallback = (response) => {
    setCaptchaResponse(response);
  };
  const expiredCallback = () => setCaptchaResponse(null);
  if (process.browser) {
    useRecaptcha({
      containerId,
      successCallback,
      expiredCallback,
      sitekey,
      size: "normal",
    });
  }
  
  const postData = async (datapost) => {
    setshowAnimation(true);
  
     const { data, status } = await repository.contact(datapost).then((x) => x);
    if (status == 200) {
      setmessage(data.message);
      setshowmessage(true);
      setshowAnimation(false);
    } else {
      setmessage(
        data && data.message ? data.message : 'Opps something went wrong'
      );
      setshowmessage(true);
      setshowAnimation(false);
    }
    expiredCallback( )
    
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
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (values, { setSubmitting }) => {
         
          await postData(values);
        }}
      >
        {({ errors, touched, getFieldProps, handleSubmit }) => {
          // cstErrors = errors;

          return (
            <Form>
              <p className='psd'>
                Request a 30 minute demo below and let us show you how Accurate™
                can benefit your organization
              </p>
              <div className='row'>
                <div className='col-lg-6 '>
                  <input
                    type='text'
                    placeholder='Name*'
                    className=''
                    {...getFieldProps('name')}
                  />
                  {touched.name && errors.name && (
                    <div className='erorr'>{errors.name}</div>
                  )}
                </div>
                <div className='col-lg-6  '>
                  <input
                    type='text'
                    placeholder='Email*'
                    className=''
                    {...getFieldProps('email')}
                  />{' '}
                  {touched.email && errors.email && (
                    <div className='erorr'>{errors.email}</div>
                  )}
                </div>
                <div className='col-lg-6 '>
                  <input
                    type='text'
                    placeholder='Company*'
                    className=''
                    {...getFieldProps('company')}
                  />
                  {touched.company && errors.company && (
                    <div className='erorr'>{errors.company}</div>
                  )}
                </div>
                <div className='col-lg-6 '>
                  <input
                    type='text'
                    placeholder='Phone'
                    className=''
                    {...getFieldProps('phone')}
                  />
                  
                </div>
                <div className='col-12  '>
                  <textarea
                    name
                    id
                    cols={30}
                    rows={7}
                    placeholder='Your message*'
                    className='site-input w-100 p-3'
                    defaultValue={''}
                    {...getFieldProps('message')}
                  />
                  {touched.message && errors.message && (
                    <div className='erorr' style={{marginBottom:16}}>{errors.message}</div>
                  )}
                </div>
                <div className='btn-cst-hs3 col-12  text-center d-flex justify-content-between align-items-center'>
                <div id={containerId} className="g-recaptcha" />

                  <button disabled={!captchaResponse} type="submit" className='btn btn-cst' >
                  {showAnimation == true ? <Loading /> : " Submit"} 
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
