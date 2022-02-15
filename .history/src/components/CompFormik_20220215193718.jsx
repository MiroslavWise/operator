import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styleForm.css'


const validate = values => {
  const errors = {};
  if (!values.firstName.trim() || values.firstName.trim().length > 15) {
    errors.firstName = 'Required';
  }

  if (!values.lastName.trim() || values.lastName.trim().length > 20) {
    errors.lastName = 'Required';
  }

  if (!values.email.trim() || !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.trim()))) {
    errors.email = 'Required';
  }

  if (!values.tel || !/^\+79\d{9}$/.test(values.tel)) {
    errors.tel = 'Required';
  }

  if (!values.number || values.number > 1000 || values.number < 1) {
    errors.number = '12';
  } 

  return errors;
};

const False = () => <div className='uni'>&#10060;</div>
const True = () => <div className='uni'>&#9989;</div>

const CompFormik = ({src, width}) => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      number:''
    },
    validate,
    onSubmit: values => {
     console.log('q')
    },
     
  });



  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <img src={src} width={width} alt='MTS'/>
      </div>
      <label htmlFor="firstName" className='inName'>Имя</label>
      <div className='in-in'>
      <input
        autoFocus
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName || formik.values.firstName.length === 0 
      ?
      <False /> 
      :
      <True/>}
      </div>

      
      <label htmlFor="lastName" className='inName'>Фамилия</label>
      <div className='in-in'>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName || formik.values.lastName.length === 0 
      ?
      <False /> 
      :
      <True/>}
      </div>

  
      <label htmlFor="email">Электронный адрес</label> 
         <div className='in-in'>
      <input
        placeholder='Email Address'
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email || formik.values.email.length === 0 
      ?
      <False />
      :
      <True/>}
      </div>

     
      <label htmlFor="tel">Номер телефона</label>
       <div className='in-in'>
      <input
        placeholder='+7 9XX XXX XX XX'
        id="tel"
        name="tel"
        type="tel"
        maxLength='12'
        onChange={formik.handleChange}
        value={formik.values.tel}
      />
      {formik.errors.tel || formik.values.tel.length === 0 
      ?
      <False /> 
      : 
      <True/>}
      </div>

      <label htmlFor="number">Сумма (рубли)</label>
       <div className='in-in'>
      <input
        placeholder='Введите сумму от 1 до 1000 рублей'
        id="number"
        name="number"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.number}
      />
      {formik.errors.number || formik.values.number.length === 0 
      ?
      <False /> 
      : 
      <True/>}
      </div>

      <button type="submit">Оплатить</button>

      <Link to="/"><button>На главную</button></Link>
      
    </form>
  );
};

export default CompFormik;


