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

  return errors;
};

const SignupForm = () => {
 
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      tel: ''
    },
    validate,
    onSubmit: values => {
      console.log(formik.handleSubmit);
    },
     
  });

 
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName" className='inName'>Имя</label>
      <input
        autoFocus
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      <label htmlFor="lastName" className='inName'>Фамилия</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

      <label htmlFor="email">Электронный адрес</label>
      <input
        placeholder='Email Address'
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="tel">Номер телефона</label>
      <input
        placeholder='+7 9XX XXX XX XX'
        id="tel"
        name="tel"
        type="tel"
        onChange={formik.handleChange}
        value={formik.values.tel}
      />
      {formik.errors.tel ? <div>{formik.errors.tel}</div> : null}
      <button type="submit">Оплатить</button>
    </form>
  );
};

export default SignupForm;


