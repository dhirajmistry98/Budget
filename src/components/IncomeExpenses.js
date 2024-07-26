import React, { useContext, useState } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';
import './IncomeExpenses.css'; // Import your CSS file for styling

const IncomeExpenses = ({ nextStep, prevStep }) => {
  const { incomeExpenses, setIncomeExpenses } = useContext(BudgetContext);
  const [expenses, setExpenses] = useState(incomeExpenses.expenses);

  const handleIncomeChange = (e) => {
    setIncomeExpenses({ ...incomeExpenses, monthlyIncome: Number(e.target.value) });
  };

  const handleExpenseChange = (index, e) => {
    const updatedExpenses = expenses.map((expense, i) =>
      i === index ? { ...expense, [e.target.name]: e.target.value } : expense
    );
    setExpenses(updatedExpenses);
    setIncomeExpenses({ ...incomeExpenses, expenses: updatedExpenses });
  };

  const addExpense = () => {
    setExpenses([...expenses, { name: '', amount: 0 }]);
  };

  const removeExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    setIncomeExpenses({ ...incomeExpenses, expenses: updatedExpenses });
  };

  return (
    <div className="income-expenses-container">
      <h2 className="section-title">Income and Expenses</h2>
      <form className="form-group">
        <label htmlFor="monthlyIncome" className="form-label">Monthly Income</label>
        <input
          type="number"
          id="monthlyIncome"
          className="form-input"
          value={incomeExpenses.monthlyIncome}
          onChange={handleIncomeChange}
          placeholder="Enter your monthly income"
        />
        <div className="expenses-list">
          {expenses.map((expense, index) => (
            <div key={index} className="expense-item">
              <input
                type="text"
                name="name"
                className="form-input expense-name"
                value={expense.name}
                onChange={(e) => handleExpenseChange(index, e)}
                placeholder="Expense Name"
              />
              <input
                type="number"
                name="amount"
                className="form-input expense-amount"
                value={expense.amount}
                onChange={(e) => handleExpenseChange(index, e)}
                placeholder="Expense Amount"
              />
              <button type="button" onClick={() => removeExpense(index)} className="btn-danger">Remove</button>
            </div>
          ))}
          <button type="button" onClick={addExpense} className="btn-primary">Add Expense</button>
        </div>
        <div className="button-group">
          <button type="button" onClick={prevStep} className="btn-secondary">Previous</button>
          <button type="button" onClick={nextStep} className="btn-primary">Next</button>
        </div>
      </form>
    </div>
  );
};

export default IncomeExpenses;
