import React from 'react';
import NumberFormat from "react-number-format";
import './Form.css';

function Form(props) {

    return (
        <form className="form" onSubmit={props.onSubmit} >
            <div className="form__block">
                <label htmlFor="cost" className="form__text">Стоимость недвижимости</label>
                <NumberFormat value={props.cost} displayType={'input'} thousandSeparator={' '} isNumericString={true}
                              onValueChange={props.onCostChange} className="form__input" placeholder="10 000 000"
                              id="cost" />
                <span className="form__symbol">&#8381;</span>
            </div>
            <div className="form__block">
                <label htmlFor="initialCost" className="form__text">Первоначальный взнос</label>
                <NumberFormat value={props.initialCost} displayType={'input'} thousandSeparator={' '} isNumericString={true}
                              onValueChange={props.onInitCostChange} className="form__input" placeholder="2 000 000"
                              id="initialCost" onKeyUp={props.handleInitCostKeyUp} />
                <span className="form__symbol">&#8381;</span>
                <div className="form__percents">
                    { props.percentsArr.map(item => {
                        return <button key={item} type="button"
                                       className={`percent-button ${props.percentClickedState == item && 'percent-button_active'}`}
                                       value={item} onClick={props.onPercentChange} data-testid={item}>{item} %</button>
                    }) }
                </div>
            </div>
            <div className="form__block">
                <label htmlFor="period" className="form__text">Срок кредита</label>
                <NumberFormat value={props.period} displayType={'input'} thousandSeparator={' '} isNumericString={true}
                              onValueChange={props.onPeriodChange} className="form__input" placeholder="10"
                              id="period" />
                <span className="form__symbol">лет</span>
            </div>
            <div className="form__block">
                <label htmlFor="interestRate" className="form__text">Процентная ставка</label>
                <NumberFormat value={props.interestRate} displayType={'input'} thousandSeparator={' '} isNumericString={true}
                              onValueChange={props.onInterestChange} className="form__input" placeholder="10"
                              id="interestRate" />
                <span className="form__symbol">&#37;</span>
            </div>
            <div className="form__buttons">
                <button type="submit" className="form__submit button">Save</button>
                <button type="button" className="form__clear button" onClick={props.onClear}>Clear</button>
            </div>
        </form>
    );
}

export default Form;