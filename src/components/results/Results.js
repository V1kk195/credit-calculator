import React from 'react';
import NumberFormat from "react-number-format";
import './Results.css';

function Results(props) {
    return (
        <div className="results">
            <div>
                <span>Ежемесячный платёж</span>
                <p className="results__number results__payment">{
                    <NumberFormat value={props.monthlyPayment} decimalScale={0} displayType={'text'} thousandSeparator={' '} isNumericString={true} />
                } &#8381;</p>
            </div>
            <div>
                <span>Необходимый доход</span>
                <p className="results__number results__income">{
                    <NumberFormat value={props.requiredIncome} decimalScale={0} displayType={'text'} thousandSeparator={' '} isNumericString={true} />
                } &#8381;</p>
            </div>
            <div>
                <span>Переплата</span>
                <p className="results__number results__overpayment">{
                    <NumberFormat value={props.overPayment} decimalScale={0} displayType={'text'} thousandSeparator={' '} isNumericString={true} />
                } &#8381;</p>
            </div>
            <div>
                <span>Тело кредита</span>
                <p className="results__number results__loan-amount">{
                    <NumberFormat value={props.loanAmount} decimalScale={0} displayType={'text'} thousandSeparator={' '} isNumericString={true} />
                } &#8381;</p>
            </div>
        </div>
    );
}

export default Results;