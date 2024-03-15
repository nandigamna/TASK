import React,{useState} from 'react'

import { useNavigate } from 'react-router-dom';

import './form.css';


const Home = () => {

    const Navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: ''
      });

  const [errors, setErrors] = useState({});



  // function ele(){
  //   Navigate("/Todo")
  // }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm(formData);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Form submission logic here
      console.log('Form submitted successfully!');
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  const validateForm = (formData) => {
    let errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = '*First name is required';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = '*Last name is required';
    }

    if (!formData.email.trim()) {
      errors.email = '*Email is required';
    // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //   errors.email = '*Email is invalid';
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = '*Phone number is required';
    // } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
    //   errors.phoneNumber = '*Phone number is invalid';
    }

    if (!formData.password.trim()) {
      errors.password = '*Password is required';
    } else if (formData.password.length < 6) {
      errors.password = '*Password must be at least 6 characters long';
    }
    
    
    if(formData.firstName&&formData.lastName&&formData.email&&formData.phoneNumber&&formData.password !==''){
        Navigate('/Todo')
    }


    return errors;
  };

  return (
    
    <div className='card'>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit} className='card-body'>
        <div className='title'>
          <label className='tag'>First Name:</label>
          <input className='box' type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='First name' />
          {errors.firstName && <span className='msg'>{errors.firstName}</span>}
        </div>
        <div className='title'>
          <label className='tag'>Last Name:</label>
          <input className='box' type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Last Name'/>
          {errors.lastName && <span className='msg'>{errors.lastName}</span>}
        </div>
        <div className='title'>
          <label className='tag'>Email:</label>
          <input className='box' type="text" name="email" value={formData.email} onChange={handleChange} placeholder='Email'/>
          {errors.email && <span className='msg'>{errors.email}</span>}
        </div>
        <div className='title'>
          <label className='tag'>Phone Number:</label>
          <input className='box' type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder='Phn Number'/>
          {errors.phoneNumber && <span className='msg'>{errors.phoneNumber}</span>}
        </div>
        <div className='title'>
          <label className='tag'>Password:</label>
          <input className='box' type="password" name="password" value={formData.password} onChange={handleChange} placeholder='password'/>
          {errors.password && <span className='msg'>{errors.password}</span>}
        </div>
        <button className='bttn' type="submit">Login</button>
      </form>
    
      
    </div>
  )
}

export default Home