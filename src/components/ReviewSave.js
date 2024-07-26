import React, { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';
import './ReviewSave.css'; // Import your CSS file for styling

const ReviewSave = ({ prevStep }) => {
  const { userInfo, incomeExpenses } = useContext(BudgetContext);

  const saveData = () => {
    localStorage.setItem('budgetData', JSON.stringify({ userInfo, incomeExpenses }));
    alert('Data saved successfully!');
  };

  return (
    <div className="review-save-container">
      <h2 className="section-title">Review and Save</h2>
      <div className="review-card">
        <h3 className="card-title">User Information</h3>
        <div className="info-item"><strong>Name:</strong> {userInfo.name}</div>
        <div className="info-item"><strong>Email:</strong> {userInfo.email}</div>
        <div className="info-item"><strong>Preferred Currency:</strong> {userInfo.preferredCurrency}</div>

        <h3 className="card-title">Income and Expenses</h3>
        <div className="info-item"><strong>Monthly Income:</strong> {incomeExpenses.monthlyIncome}</div>
        <ul className="expense-list">
          {incomeExpenses.expenses.map((expense, index) => (
            <li key={index} className="expense-item">
              <span className="expense-name">{expense.name}:</span>
              <span className="expense-amount">{expense.amount}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="button-group">
        <button type="button" onClick={prevStep} className="btn-secondary">Previous</button>
        <button type="button" onClick={saveData} className="btn-primary">Save</button>
      </div>
    </div>
  );
};

export default ReviewSave;
