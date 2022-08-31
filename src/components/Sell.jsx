import React, { useState } from "react";

const Sell = (props) => {
  const { currency, rounded = Function.prototype } = props;
  const [buy, setBuy] = useState(0);
  const [currencyBuy, setCurrencyBuy] = useState(currency[0].buy);

  const sellCurrency = (event) => {
    setCurrencyBuy(event.target.value);
  };
  return (
    <div className="sell">
      <h3>Продать</h3>
      <input
        type="number"
        onChange={(e) => {
          setBuy(e.target.value);
        }}
      />
      <select
        name="select"
        onChange={(e) => {
          sellCurrency(e);
        }}
      >
        {currency.map((el, index) => (
          <option key={index} value={el.buy}>
            {el.ccy}
          </option>
        ))}
      </select>
      {rounded(buy * currencyBuy)} UAH
    </div>
  );
};

export default Sell;
