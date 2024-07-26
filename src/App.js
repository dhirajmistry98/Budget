import React from 'react';
import { BudgetProvider } from './contexts/BudgetContext';
import MultiStepForm from './components/MultiStepForm';

function App() {
  return (
    <BudgetProvider>
      <div className="App">
        <MultiStepForm />
      </div>
    </BudgetProvider>
  );
}

export default App;
