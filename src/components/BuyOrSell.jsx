import React, { useState } from "react";
import { useEffect } from "react";
import Buy from "./Buy";
import Sell from "./Sell";

export function BuyOrSell(props) {
  const { currency } = props;

  console.log(currency);

  function rounded(number) {
    return +number.toFixed(2);
  }

  useEffect(() => {}, []);
  return (
    <>
      <div className="BuyOrSell">
        <Buy currency={currency} rounded={rounded} />
        <Sell currency={currency} rounded={rounded} />
      </div>
    </>
  );
}
