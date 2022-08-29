import React, { useState, useEffect } from "react"
import { API_URL } from "../config"
import { Header } from "./Header"
import { Preloader } from "./Preloader"
import { Container } from "./Container"
import { BuyOrSell } from "./BuyOrSell"

export function Main() {

	const [currency, setCurrency] = useState([])
	const [loading, setLoading] = useState(true)


	useEffect(function getCurrency() {
		fetch(API_URL)
			.then(response => response.json())
			.then(data => {
				data && setCurrency(data);
				setLoading(false)
			})
	}, [])
	return (
		<>
			<Header />
			{
				loading ?
					<Preloader />
					:
					(
						<div className="container">
							<Container currency={currency} />
							<BuyOrSell currency={currency} />
						</div>
					)
			}
		</>
	)
}