import React, { useState } from "react";

const Buy = (props) => {
  const { currency, rounded = Function.prototype } = props;
  const [sell, setSell] = useState(0);
  const [count, sellCount] = useState(currency[0].sale);

  const buyCurrency = (e) => {
    sellCount(e.target.value);
  };

  return (
    <div className="buy">
      <h3>Купить</h3>
      <input
        type="number"
        onChange={(e) => {
          setSell(e.target.value);
        }}
      />
      UAH {rounded(sell * count)}
      <select
        name="select"
        onChange={(e) => {
          buyCurrency(e);
        }}
      >
        {currency.map((el) => (
          <option key={el.ccy + "1"} value={el.sale}>
            {el.ccy}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Buy;
