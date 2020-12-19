import React from 'react';
import './App.css';

import { countLoanAmount, countMonthlyPayment, countRequiredIncome, countOverpayment, countInitialCost } from "../utils/formulas";
import Form from "./form/Form";
import Results from "./results/Results";

function App() {
    const [cost, setCost] = React.useState(localStorage.getItem('cost') || '');
    const [initialCost, setInitialCost] = React.useState(localStorage.getItem('initialCost') || '');
    const [period, setPeriod] = React.useState(localStorage.getItem('period') || '');
    const [interestRate, setInterestRate] = React.useState(localStorage.getItem('interestRate') || '');

    const loanAmount = countLoanAmount(cost, initialCost);
    const monthlyPayment = countMonthlyPayment(loanAmount, interestRate, period);
    const requiredIncome = countRequiredIncome(monthlyPayment);
    const overPayment = countOverpayment(monthlyPayment, period, loanAmount);


    const handleCostChange = (values) => {
        const {value} = values;
        setCost(value);
    }

    const handleInitialCostChange = (values) => {
        const {value} = values;
        setInitialCost(value);
    }

    const handlePeriodChange = (values) => {
        const {value} = values;
        setPeriod(value);
    }

    const handleInterestRateChange = (values) => {
        const {value} = values;
        setInterestRate(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('cost', cost);
        localStorage.setItem('initialCost', initialCost);
        localStorage.setItem('period', period);
        localStorage.setItem('interestRate', interestRate);
    }

    const handleClear = () => {
        localStorage.clear();
        setCost('');
        setInitialCost('');
        setPeriod('');
        setInterestRate('');
    }

    const handlePercentClick = (e) => {
        e.preventDefault();
        setInitialCost(countInitialCost(cost, e.target.value));
    }

    return (
        <div className="container">

            <Form onCostChange={handleCostChange} onInitCostChange={handleInitialCostChange} onPeriodChange={handlePeriodChange}
                onInterestChange={handleInterestRateChange} onSubmit={handleSubmit} onClear={handleClear}
                onPercentChange={handlePercentClick} cost={cost} initialCost={initialCost} period={period}
                interestRate={interestRate} />

            <Results loanAmount={loanAmount} monthlyPayment={monthlyPayment} requiredIncome={requiredIncome}
                     overPayment={overPayment} />

        </div>
    );
}

export default App;
