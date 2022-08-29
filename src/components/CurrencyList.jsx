export function CurrencyList(props) {
	const { ccy,
		base_ccy,
		buy,
		sale,
	} = props
	return (
		<tr>
			<td>{ccy}/<span className="grey-text text-grey-lighten-1">{base_ccy}</span></td>
			<td>{buy}</td>
			<td>{sale}</td>
		</tr>
	)
}