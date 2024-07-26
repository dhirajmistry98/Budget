// src/components/Step1.js
import React, { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';

const Step1 = () => {
  const { formData, updateFormData } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div>
      <h2>Step 1: User Information</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <select name="currency" value={formData.currency} onChange={handleChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        {/* Add more currencies as needed */}
      </select>
    </div>
  );
};

export default Step1;
