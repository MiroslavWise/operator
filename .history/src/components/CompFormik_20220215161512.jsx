import { useFormik } from 'formik';

import './styleForm.css'


const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.tel) {
    errors.tel = 'Required';
  } else if (!/^\+79\d{9}$/.test(values.tel)) {
    errors.tel = 'Invalid phone number';
  }

  if (!values.number) {
    errors.number = '';
  } else if (values.number > 1000 && values.number < 1) {
    errors.number = '';
  }

  return errors;
};

const CompFormik = () => {
 
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
      console.log(formik.values.email);
    },
     
  });

 
  return (
    <form onSubmit={formik.handleSubmit}>
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
      <div className='uni'>&#10060;</div> 
      :
      <div className='uni'>&#9989;</div>}
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
      <div className='uni'>&#10060;</div> 
      :
      <div className='uni'>&#9989;</div>}
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
      <div className='uni'>&#10060;</div>
      :
      <div className='uni'>&#9989;</div>}
      </div>

     
      <label htmlFor="tel">Номер телефона</label>
       <div className='in-in'>
      <input
        placeholder='+7 9XX XXX XX XX'
        id="tel"
        name="tel"
        type="tel"
        onChange={formik.handleChange}
        value={formik.values.tel}
      />
      {formik.errors.tel || formik.values.tel.length === 0 
      ?
      <div className='uni'>&#10060;</div> 
      : 
      <div className='uni'>&#9989;</div>}
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
      <div className='uni'>&#10060;</div> 
      : 
      <div className='uni'>&#9989;</div>}
      </div>
      <button type="submit">Оплатить</button>
    </form>
  );
};

export default CompFormik;


