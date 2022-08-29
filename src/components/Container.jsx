import React from "react"
import { CurrencyList } from "./CurrencyList"

export function Container(props) {
	const currency = props.currency

	if (!currency.length) {
		return <h4>Ничего нет :(</h4>
	}

	return (
		<div className="table">
			<table>
				<thead>
					<tr>
						<td></td>

						<td>Покупка</td>
						<td>Продажа</td>
					</tr>
				</thead>
				<tbody>
					{
						currency.map(item =>
							<CurrencyList key={item.ccy} {...item} />)
					}
				</tbody>
			</table>
		</div>
	)
}