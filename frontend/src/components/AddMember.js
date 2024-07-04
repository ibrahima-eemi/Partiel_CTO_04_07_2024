import React, { useState } from 'react';
import axios from 'axios';

function AddMember() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    category: '',
    level: '',
    age_group: '',
    guardian_name: '',
    guardian_contact: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/members', form)
      .then(response => console.log(response.data))
      .catch(error => console.error('Error adding member:', error));
  };

  return (
    <div>
      <h1>Add Member</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="first_name" placeholder="First Name" onChange={handleChange} />
        <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" onChange={handleChange} />
        <input type="text" name="level" placeholder="Level" onChange={handleChange} />
        <input type="text" name="age_group" placeholder="Age Group" onChange={handleChange} />
        <input type="text" name="guardian_name" placeholder="Guardian Name" onChange={handleChange} />
        <input type="text" name="guardian_contact" placeholder="Guardian Contact" onChange={handleChange} />
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
}

export default AddMember;
