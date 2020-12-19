import { countLoanAmount, countMonthlyPayment, countRequiredIncome, countOverpayment, countInitialCost } from "./formulas";

describe('credit formulas', () => {
    test('count loan amount', () => {
        expect(countLoanAmount(100, 50)).toEqual(50);
    });
    test('count monthly payment', () => {
        expect(Math.round(countMonthlyPayment(100000, 5, 12))).toEqual(925);
    });
    test('count required income', () => {
        expect(countRequiredIncome(900)).toEqual(1500);
    });
    test('count overpayment', () => {
        expect(countOverpayment(1000, 1, 10000)).toEqual(2000);
    })

    test('count intial cost', () => {
        expect(countInitialCost(1000, 10)).toEqual(100);
    })
})