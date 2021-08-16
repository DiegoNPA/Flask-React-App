import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';
import axios from 'axios';


export const Signup = () => {
  
  const [emailAnswer, setEmailAnswer] = useState('');
  const [passwordAnswer, setPasswordAnswer] = useState('');
  
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

  const fetchAnswer = async (values) => {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
    const email = values.email;
    const password = values.password;
    const userName = values.userName;
    const { data } = await axios.post(
      `http://127.0.0.1:8080/api/verify_email`, { email, password, userName }, { headers: headers }
    );
    const { emailAnswer, passwordAnswer } = data;
    setEmailAnswer({emailAnswer})
    setPasswordAnswer({passwordAnswer})
  }

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
        fetchAnswer(values);
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
