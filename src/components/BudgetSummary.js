import React, { useContext, useState, useEffect } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';
import { getCurrencyConversion } from '../utils/currencyConversion';

const BudgetSummary = ({ nextStep, prevStep }) => {
  const { userInfo, incomeExpenses } = useContext(BudgetContext);
  const [conversionRate, setConversionRate] = useState(1);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    const fetchConversionRate = async () => {
      const rate = await getCurrencyConversion(userInfo.preferredCurrency);
      setConversionRate(rate);
    };

    fetchConversionRate();
  }, [userInfo.preferredCurrency]);

  useEffect(() => {
    const total = incomeExpenses.expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
    setTotalExpenses(total);
  }, [incomeExpenses.expenses]);

  const remainingBudget = (incomeExpenses.monthlyIncome - totalExpenses) * conversionRate;
 
    return (
      <div className="budget-summary-container">
        <h2>Budget Summary</h2>
        <p>Total Income: {(incomeExpenses.monthlyIncome * conversionRate).toFixed(2)} {userInfo.preferredCurrency}</p>
        <p>Total Expenses: {(totalExpenses * conversionRate).toFixed(2)} {userInfo.preferredCurrency}</p>
        <p>Remaining Budget: {remainingBudget.toFixed(2)} {userInfo.preferredCurrency}</p>
        <div className="button-container">
          <button type="button" className="button button-previous" onClick={prevStep}>Previous</button>
          <button type="button" className="button button-next" onClick={nextStep} >Next</button>
        </div>
      </div>
    );
  };
export default BudgetSummary;
