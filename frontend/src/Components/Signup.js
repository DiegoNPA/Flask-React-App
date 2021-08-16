import React from 'react'
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

const Signup = () => {
  const validate = Yup.object({
    userName: Yup.string()
      .required('This field can not be empty'),
    email: Yup.string()
      .email('Email is invalid')
      .required('This field can not be empty'),
    password: Yup.string()
      .required('This field can not be empty'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')    
      .required('This field can not be empty'),
  })
  return (
    <Formik
      initialValues={{
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema = {validate}
      onSubmit = {values => {
        console.log(values);
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4.font-weight-bold-display-4">Create an account</h1>
          <Form>
            <TextField label="User Name" name="userName" type="text"/>
            <TextField label="Email" name="email" type="email"/>
            <TextField label="Password" name="password" type="password"/>
            <TextField label="confirmPassword" name="confirmPassword" type="password"/>
            <button className="btn btn-dark mt-3" type="submit">Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default Signup
