import React, { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';
import './UserInfo.css'; // Import your CSS file for styling

const UserInfo = ({ nextStep }) => {
  const { userInfo, setUserInfo } = useContext(BudgetContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="user-info-container">
      <h2 className="user-info-heading">User Information</h2>
      <form className="user-info-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="preferredCurrency" className="form-label">Preferred Currency</label>
          <select
            id="preferredCurrency"
            name="preferredCurrency"
            value={userInfo.preferredCurrency}
            onChange={handleChange}
            className="form-select"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            <option value="GBP">GBP</option>
            {/* Add more currencies as needed */}
          </select>
        </div>
        <button type="button" onClick={nextStep} className="btn-primary">Next</button>
      </form>
    </div>
  );
};

export default UserInfo;