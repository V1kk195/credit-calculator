import React from 'react';
import './App.css';
import { countLoanAmount, countMonthlyPayment, countRequiredIncome, countOverpayment } from "../utils/formulas";

function App() {
    const [cost, setCost] = React.useState(localStorage.getItem('cost') || '');
    const [initialCost, setInitialCost] = React.useState(localStorage.getItem('initialCost') || '');
    const [period, setPeriod] = React.useState(localStorage.getItem('period') || '');
    const [interestRate, setInterestRate] = React.useState(localStorage.getItem('interestRate') || '');

    const loanAmount = countLoanAmount(cost, initialCost);
    const monthlyPayment = countMonthlyPayment(loanAmount, interestRate, period);
    const requiredIncome = countRequiredIncome(monthlyPayment);
    const overPayment = countOverpayment(monthlyPayment, period, loanAmount);

    const handleCostChange = (e) => {
        setCost(e.target.value);
    }

    const handleInitialCostChange = (e) => {
        setInitialCost(e.target.value);
    }

    const handlePeriodChange = (e) => {
        setPeriod(e.target.value);
    }

    const handleInterestRateChange = (e) => {
        setInterestRate(e.target.value);
    }

    const handleSubmit = () => {
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

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit} >
                <div className="form__block">
                    <span className="form__text">Стоимость недвижимости</span>
                    <input value={cost} onChange={handleCostChange} className="form__input" type="number" placeholder="10000000"/>
                </div>
                <div className="form__block">
                    <span className="form__text">Первоначальный взнос</span>
                    <input value={initialCost} onChange={handleInitialCostChange} className="form__input" type="number" placeholder="3000000"/>
                    <div className="form__percents">
                        <button className="percent-button">10%</button>
                        <button className="percent-button">15%</button>
                        <button className="percent-button">20%</button>
                        <button className="percent-button">25%</button>
                        <button className="percent-button">30%</button>
                    </div>
                </div>
                <div className="form__block">
                    <span className="form__text">Срок кредита</span>
                    <input value={period} onChange={handlePeriodChange} className="form__input" type="number" placeholder="10"/>
                </div>
                <div className="form__block">
                    <span className="form__text">Кредитная ставка</span>
                    <input value={interestRate} onChange={handleInterestRateChange} className="form__input" type="number" placeholder="10"/>
                </div>
                <div className="form__buttons">
                    <button type="submit" className="form__submit button">Save</button>
                    <button type="button" className="form__clear button" onClick={handleClear}>Clear</button>
                </div>
            </form>

            <div className="results">
                <div>
                    <span>Ежемесячный платёж</span>
                    <p className="results__payment">{Math.round(monthlyPayment)} &#8381;</p>
                </div>
                <div>
                    <span>Необходимый доход</span>
                    <p className="results__income">{Math.round(requiredIncome)} &#8381;</p>
                </div>
                <div>
                    <span>Переплата</span>
                    <p className="results__overpayment">{Math.round(overPayment)} &#8381;</p>
                </div>
                <div>
                    <span>Тело кредита</span>
                    <p className="results__loan-amount">{Math.round(loanAmount)} &#8381;</p>
                </div>
            </div>
        </div>
    );
}

export default App;
