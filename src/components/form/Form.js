import React from 'react';
import NumberFormat from "react-number-format";
import './Form.css';

function Form(props) {
    const percentsArr = [10, 15, 20, 25, 30];
    const [percentActive, setPercentActive] = React.useState(percentsArr[0]);

    const handlePercentClick = (e) => {
        props.onPercentChange(e);
        setPercentActive(e.target.value);
    }

    return (
        <form className="form" onSubmit={props.onSubmit} >
            <div className="form__block">
                <span className="form__text">Стоимость недвижимости</span>
                <NumberFormat value={props.cost} displayType={'input'} thousandSeparator={' '} isNumericString={true}
                              onValueChange={props.onCostChange} className="form__input" placeholder="10 000 000" />
                <span className="form__symbol">&#8381;</span>
            </div>
            <div className="form__block">
                <span className="form__text">Первоначальный взнос</span>
                <NumberFormat value={props.initialCost} displayType={'input'} thousandSeparator={' '} isNumericString={true}
                              onValueChange={props.onInitCostChange} className="form__input" placeholder="2 000 000" />
                <span className="form__symbol">&#8381;</span>
                <div className="form__percents">
                    { percentsArr.map(item => {
                        return <button key={item} className={`percent-button ${percentActive == item && 'percent-button_active'}`}
                                       value={item} onClick={handlePercentClick}>{item} %</button>
                    }) }
                </div>
            </div>
            <div className="form__block">
                <span className="form__text">Срок кредита</span>
                <NumberFormat value={props.period} displayType={'input'} thousandSeparator={' '} isNumericString={true}
                              onValueChange={props.onPeriodChange} className="form__input" placeholder="10" />
                <span className="form__symbol">лет</span>
            </div>
            <div className="form__block">
                <span className="form__text">Кредитная ставка</span>
                <NumberFormat value={props.interestRate} displayType={'input'} thousandSeparator={' '} isNumericString={true}
                              onValueChange={props.onInterestChange} className="form__input" placeholder="10" />
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