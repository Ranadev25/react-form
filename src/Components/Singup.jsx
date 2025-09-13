import { useFormik } from 'formik'
import React from 'react'
import * as yup  from 'yup';

import './Singup.css'

const Singup = () => {


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    validationSchema: yup.object({
      name: yup.string().min(3, "name must have atleast 3 characters").required(),
      email: yup.string().email().required(),
      password: yup.string().min(6, "name must have atleast 6 characters").required()
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  });

  const nameError = formik.errors.name && (
    <span className='showError' >{formik.touched.name && formik.errors.name}</span>
  );
          
  const emailError = formik.errors.email && (
    <span className='showError'>{formik.touched.email && formik.errors.email}</span>
  );
  
  const passwordError = formik.errors.password && (
    <span className='showError'>{formik.touched.password && formik.errors.password}</span>
  );

  const randerForm = <form className='form' onSubmit={formik.handleSubmit}>
        <div className='form-filde'>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
      />
      <br/>
      {nameError}
        </div>
        
        <div className='form-filde'>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
      />
      <br />
      {emailError}
        </div>
        
        <div className='form-filde'>
          <label htmlFor="password">Password: </label>
          <input
            className='password-input'
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
      />
      <br />
      {passwordError}
        </div>
        
        <button className='submitbtn' type="submit">submit</button>
      </form>

  return (
    <div className='fromPage'>
      <h1 className='title'>SingUp Form</h1>
      {randerForm}
    </div>
  )
}

export default Singup