const countLoanAmount = (cost, initialCost) => {
    return (cost - initialCost);
}

const countMonthlyPayment = (loanAmount, interestRate, period) => {
    let result = Math.round( loanAmount * ( (interestRate / 1200) + ( (interestRate / 1200) / (((1 + (interestRate / 1200)) ** (period*12)) - 1) ) ) );
    return isNaN(result) ? 0 : result;
}

export { countLoanAmount, countMonthlyPayment };
