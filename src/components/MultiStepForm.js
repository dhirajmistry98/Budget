import React, { useState } from 'react';
import UserInfo from './UserInfo';
import IncomeExpenses from './IncomeExpenses';
import BudgetSummary from './BudgetSummary';
import ReviewSave from './ReviewSave';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return <UserInfo nextStep={nextStep} />;
    case 2:
      return <IncomeExpenses nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <BudgetSummary nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <ReviewSave prevStep={prevStep} />;
    default:
      return <UserInfo nextStep={nextStep} />;
  }
};

export default MultiStepForm;
