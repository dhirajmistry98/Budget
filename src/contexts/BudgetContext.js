import React, { createContext, useState, useEffect } from 'react';

const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(() => {
    const saved = localStorage.getItem('userInfo');
    return saved ? JSON.parse(saved) : {
      name: '',
      email: '',
      preferredCurrency: 'USD'
    };
  });

  const [incomeExpenses, setIncomeExpenses] = useState(() => {
    const saved = localStorage.getItem('incomeExpenses');
    return saved ? JSON.parse(saved) : {
      monthlyIncome: 0,
      expenses: []
    };
  });

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('incomeExpenses', JSON.stringify(incomeExpenses));
  }, [userInfo, incomeExpenses]);

  return (
    <BudgetContext.Provider value={{ userInfo, setUserInfo, incomeExpenses, setIncomeExpenses }}>
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetContext, BudgetProvider };
