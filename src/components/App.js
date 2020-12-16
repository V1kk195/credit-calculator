import React from 'react';
import NumberFormat from 'react-number-format';
import './App.css';
import { countLoanAmount, countMonthlyPayment, countRequiredIncome, countOverpayment, countInitialCost } from "../utils/formulas";

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
            <form className="form" onSubmit={handleSubmit} >
                <div className="form__block">
                    <span className="form__text">Стоимость недвижимости</span>
                    <NumberFormat value={cost} displayType={'input'} thousandSeparator={' '} isNumericString={true} onValueChange={handleCostChange} className="form__input" placeholder="10 000 000" />
                </div>
                <div className="form__block">
                    <span className="form__text">Первоначальный взнос</span>
                    <NumberFormat value={initialCost} displayType={'input'} thousandSeparator={' '} isNumericString={true} onValueChange={handleInitialCostChange} className="form__input" placeholder="2 000 000" />
                    <div className="form__percents">
                        <button className="percent-button" value="10" onClick={handlePercentClick}>10%</button>
                        <button className="percent-button" value="15" onClick={handlePercentClick}>15%</button>
                        <button className="percent-button" value="20" onClick={handlePercentClick}>20%</button>
                        <button className="percent-button" value="25" onClick={handlePercentClick}>25%</button>
                        <button className="percent-button" value="30" onClick={handlePercentClick}>30%</button>
                    </div>
                </div>
                <div className="form__block">
                    <span className="form__text">Срок кредита</span>
                    <NumberFormat value={period} displayType={'input'} thousandSeparator={' '} isNumericString={true} onValueChange={handlePeriodChange} className="form__input" placeholder="10" />
                </div>
                <div className="form__block">
                    <span className="form__text">Кредитная ставка</span>
                    <NumberFormat value={interestRate} displayType={'input'} thousandSeparator={' '} isNumericString={true} onValueChange={handleInterestRateChange} className="form__input" placeholder="10" />
                </div>
                <div className="form__buttons">
                    <button type="submit" className="form__submit button">Save</button>
                    <button type="button" className="form__clear button" onClick={handleClear}>Clear</button>
                </div>
            </form>

            <div className="results">
                <div>
                    <span>Ежемесячный платёж</span>
                    <p className="results__payment">{
                        <NumberFormat value={monthlyPayment} decimalScale={0} displayType={'text'} thousandSeparator={' '} isNumericString={true} />
                    } &#8381;</p>
                </div>
                <div>
                    <span>Необходимый доход</span>
                    <p className="results__income">{
                        <NumberFormat value={requiredIncome} decimalScale={0} displayType={'text'} thousandSeparator={' '} isNumericString={true} />
                    } &#8381;</p>
                </div>
                <div>
                    <span>Переплата</span>
                    <p className="results__overpayment">{
                        <NumberFormat value={overPayment} decimalScale={0} displayType={'text'} thousandSeparator={' '} isNumericString={true} />
                    } &#8381;</p>
                </div>
                <div>
                    <span>Тело кредита</span>
                    <p className="results__loan-amount">{
                        <NumberFormat value={loanAmount} decimalScale={0} displayType={'text'} thousandSeparator={' '} isNumericString={true} />
                    } &#8381;</p>
                </div>
            </div>
        </div>
    );
}

export default App;
