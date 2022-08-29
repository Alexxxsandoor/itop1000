import React, { useState } from "react"
import { useEffect } from "react"

export function BuyOrSell(props) {

	const { currency } = props

	const [typeCurr1, settypeCurr1] = useState("USD")//первая выбранная валюта
	const [typeCurr2, settypeCurr2] = useState("UAH")//2 выбранная валюта
	const [inputCurrency, setInputCurrency] = useState()//ввод юзера
	const [typeCurrency, setTypeCurrency] = useState("")//в какую валюту конвентируем
	const [currencTransfer, setCurrencTransfer] = useState()//сколько получим в выбранной валюте

	//Операции обмена валют
	function calc(curr1, curr2) {
		if (curr1 === "UAH") {//купить валюту за гривну
			const typeCurr = currency.filter(word => word.ccy === curr2);
			setCurrencTransfer(rounded(inputCurrency / typeCurr[0].sale))
			setTypeCurrency(typeCurr[0].ccy)
		}
		else {//продать валюту
			if (curr2 === "UAH") {//продать валюту в гривну
				const typeCurr = currency.filter(word => word.ccy === curr1);
				setCurrencTransfer(rounded(inputCurrency * typeCurr[0].buy))
				setTypeCurrency("UAH")
			}
			else {//продать валюту в другую валюту
				const typeCurr1 = currency.filter(word => word.ccy === curr1);
				const typeCurr2 = currency.filter(word => word.ccy === curr2);
				setCurrencTransfer(rounded(inputCurrency * typeCurr1[0].buy / typeCurr1[0].sale))//переводим в гривны по ПОКУПКЕ, а потом переводим во 2 валюту по ПРОДАЖЕ
				setTypeCurrency(typeCurr2[0].ccy)
			}
		}
	}
	//меняем местами валюты
	function change() {
		const change1 = typeCurr1
		const change2 = typeCurr2
		settypeCurr1(change2)
		settypeCurr2(change1)
	}
	//округление до сотых
	function rounded(number) {
		return +number.toFixed(2);
	}

	//проверяем любое изменения в выбранных валютах и сколько ввел юзер
	useEffect(() => {
		if (typeCurr1 === typeCurr2) {
			setCurrencTransfer(inputCurrency)
			setTypeCurrency(typeCurr1)
		} else {
			calc(typeCurr1, typeCurr2)
		}
	}, [typeCurr1, typeCurr2, inputCurrency])
	return (<>
		<div className="BuyOrSell">
			<input
				type="number"
				name="number"
				placeholder=""
				value={inputCurrency}
				onChange={e => setInputCurrency(Number(e.target.value))}
			/>
			<select onChange={e => {
				settypeCurr1(e.target.value)
			}}>
				<option value="USD">USD</option>
				<option value="UAH">UAH</option>
				<option value="EUR">EUR</option>
			</select>

			<select
				onChange={e => {
					settypeCurr2(e.target.value)
				}}>
				<option value="UAH">UAH</option>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
			</select>
		</div>
		<p>{!inputCurrency ? 0 : inputCurrency} <b>{typeCurr1}</b><a onClick={change}>🔁</a><b>{typeCurr2}</b>
			=
			{!currencTransfer ? 0 : currencTransfer}
			<b> {typeCurrency ? typeCurr2 : typeCurrency}</b>
		</p>
	</>
	)

}