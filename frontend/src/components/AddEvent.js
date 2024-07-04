import React, { useState } from 'react';
import axios from 'axios';

function AddEvent() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    date: '',
    category: '',
    level: '',
    age_group: '',
    price: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/events', form)
      .then(response => console.log(response.data))
      .catch(error => console.error('Error adding event:', error));
  };

  return (
    <div>
      <h1>Add Event</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Event Name" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
        <input type="datetime-local" name="date" onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" onChange={handleChange} />
        <input type="text" name="level" placeholder="Level" onChange={handleChange} />
        <input type="text" name="age_group" placeholder="Age Group" onChange={handleChange} />
        <input type="text" name="price" placeholder="Price" onChange={handleChange} />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default AddEvent;
