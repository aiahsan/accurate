import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().required('Required').email(),
  name: Yup.string().required('Required'),
  company: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});

export default ({ setshowmessage, setmessage, setshowanimation }) => {
  const postData = async (datapost) => {
    setshowanimation(true);
    const { data, status } = await repository.contact(datapost).then((x) => x);
    if (status == 200) {
      setmessage(data.message);
      setshowmessage(true);
      setshowanimation(false);
    } else {
      setmessage(
        data && data.message ? data.message : 'Opps something went wrong'
      );
      setshowmessage(true);
      setshowanimation(false);
    }
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
                <div className='col-lg-6 mt-4'>
                  <input
                    type='text'
                    placeholder='Name'
                    className=''
                    {...getFieldProps('Name')}
                  />
                  {touched.name && errors.name && (
                    <div className='erorr'>{errors.name}</div>
                  )}
                </div>
                <div className='col-lg-6 mt-4'>
                  <input
                    type='text'
                    placeholder='Email'
                    className=''
                    {...getFieldProps('email')}
                  />{' '}
                  {touched.email && errors.email && (
                    <div className='erorr'>{errors.email}</div>
                  )}
                </div>
                <div className='col-lg-6 mt-4'>
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
                <div className='col-lg-6 mt-4'>
                  <input
                    type='text'
                    placeholder='Phone*'
                    className=''
                    {...getFieldProps('phone')}
                  />
                  {touched.phone && errors.phone && (
                    <div className='erorr'>{errors.phone}</div>
                  )}
                </div>
                <div className='col-12 mt-4'>
                  <textarea
                    name
                    id
                    cols={30}
                    rows={7}
                    placeholder='Your message'
                    className='site-input w-100 p-3'
                    defaultValue={''}
                    {...getFieldProps('message')}
                  />
                  {touched.message && errors.message && (
                    <div className='erorr'>{errors.message}</div>
                  )}
                </div>
                <div className='col-12 mt-4 text-center'>
                  <button className='btn' type='submit'>
                    Submit
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
