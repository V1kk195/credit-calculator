import './App.css';

function App() {
  return (
      <div className="container">
          <form className="form">
              <div className="form__block">
                  <span className="form__text">Стоимость недвижимости</span>
                  <input className="form__input" type="number" placeholder="10000000"/>
              </div>
              <div className="form__block">
                  <span className="form__text">Первоначальный взнос</span>
                  <input className="form__input" type="number" placeholder="3000000"/>
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
                  <input className="form__input" type="number" placeholder="10"/>
              </div>
              <div className="form__block">
                  <span className="form__text">Кредитная ставка</span>
                  <input className="form__input" type="number" placeholder="10"/>
              </div>
              <div className="form__buttons">
                  <button type="submit" className="form__submit button">Save</button>
                  <button className="form__clear button">Clear</button>
              </div>
          </form>

          <div className="results">
              <div>
                  <span>Ежемесячный платёж</span>
                  <p className="results__payment">5 &#8381;</p>
              </div>
              <div>
                  <span>Необходимый доход</span>
                  <p className="results__income">5 &#8381;</p>
              </div>
              <div>
                  <span>Переплата</span>
                  <p className="results__overpayment">5 &#8381;</p>
              </div>
              <div>
                  <span>Тело кредита</span>
                  <p className="results__loan-amount">5 &#8381;</p>
              </div>
          </div>
      </div>
  );
}

export default App;
