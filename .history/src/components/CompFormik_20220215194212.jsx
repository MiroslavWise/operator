import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import Modal from 'react-modal'

import './styleForm.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#yourAppElement');

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

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

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
      setIsOpen(true)
      return (
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
         <button onClick={closeModal}>close</button>
         </Modal>
      )

    },
     
  });



  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <img src={src} width={width} alt='MTS'/>
      </div>
      <label htmlFor="firstName" className='inName'>??????</label>
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

      
      <label htmlFor="lastName" className='inName'>??????????????</label>
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

  
      <label htmlFor="email">?????????????????????? ??????????</label> 
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

     
      <label htmlFor="tel">?????????? ????????????????</label>
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

      <label htmlFor="number">?????????? (??????????)</label>
       <div className='in-in'>
      <input
        placeholder='?????????????? ?????????? ???? 1 ???? 1000 ????????????'
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

      <button type="submit">????????????????</button>

      <Link to="/"><button>???? ??????????????</button></Link>
      
    </form>
  );
};

export default CompFormik;


