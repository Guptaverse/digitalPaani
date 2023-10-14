import React, { useEffect, useState } from 'react';
import Registered from './Registered';
import "./FormComponent.css"
function FormComponent() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNo: '',
    bio: '',
    time: ''
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [data, setData] = useState(JSON.parse(localStorage.getItem('Data')) || []);

  useEffect(() => {
    /* USING REGEX TO VALIDATE THE INPUT STRINGS FOR NAME,EMAIL,CONTACT NO. */
    const isNameValid = /^[A-Z][a-z]*\s[A-Z][a-z]*$|^[A-Z][a-z]*$/i.test(formData.fullName);
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email);
    const isContactValid = /^\d{10}$/.test(formData.contactNo);

    const newErrors = {};

    if (!isNameValid) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!isEmailValid) {
      newErrors.email = 'Invalid Email Address';
    }

    if (!isContactValid) {
      newErrors.contactNo = 'Invalid Contact Number (10 digits required)';
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [formData]);

  useEffect(() => {
    localStorage.setItem('Data', JSON.stringify(data));
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      formData.time = new Date().toString().substr(4, 11);
      setData([...data, formData]);
      alert('Form data saved to local storage.');
    } else {
      let fullName_flag = errors.fullName ? true : false;
      let email_flag = errors.email ? true : false;
      let contact_flag = errors.contactNo ? true : false;

      alert(`Please fix these fields correctly before submitting: \n ${fullName_flag ? "Name" : ""}${email_flag ? "Email" : ""}${contact_flag ? "Contact No" : ""}`);
    }
  }

  return (
    <div>
      <h2><span style={{color:"#183650"}}>Digital</span><span style={{color:"#94d6d7"}}>Paani</span> Event Registeration</h2>
      <form onSubmit={handleSubmit} >
        <div className='form-entry'>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <div className='status'>
            {errors.fullName?<span>&#10060;</span>:<p>&#10003;</p>}
          </div>
        </div>
        <div className='form-entry'>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}

          />
          <div className='status'>
            {errors.email?<span>&#10060;</span>:<p>&#10003;</p>}
          </div>
        </div>
        <div className='form-entry'>
          <label>Contact No:</label>
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
          />
          <div className='status'>
            {errors.contactNo?<span>&#10060;</span>:<span>&#10003;</span>}
          </div>
        </div>
        <div className='form-entry'>
          <label>Bio:</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
            <div className='status-textarea'>
            {errors.contactNo?<span>&#10060;</span>:<p>&#10003;</p>}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      <Registered data = {data}/>
    </div>
  );
}

export default FormComponent;
