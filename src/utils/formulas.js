const countLoanAmount = (cost, initialCost) => {
    return (cost - initialCost);
}

const countMonthlyPayment = (loanAmount, interestRate, period) => {
    let result = ( loanAmount * ( (interestRate / 1200) + ( (interestRate / 1200) / (((1 + (interestRate / 1200)) ** (period*12)) - 1) ) ) );
    return isNaN(result) ? 0 : result;
}

const countRequiredIncome = (monthlyPayment) => {
    return ( 5 * (monthlyPayment / 3) );
}

const countOverpayment = (monthlyPayment, period,  loanAmount) => {
    return ( monthlyPayment * period * 12 - loanAmount );
}

/* exported countInitialCost */
const countInitialCost = (cost, percent) => {
    return (cost * percent / 100);
}

export { countLoanAmount, countMonthlyPayment, countRequiredIncome, countOverpayment, countInitialCost };
