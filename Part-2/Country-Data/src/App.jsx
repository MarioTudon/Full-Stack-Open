import { useEffect, useState } from "react"
import Filter from "./Filter"
import Countries from "./Countries"
import "./App.css"
import countriesServices from "./services/countriesServices"

function App() {
	const [filter, setFilter] = useState('')
	const [countries, setCountries] = useState([])


	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const data = await countriesServices.getAll("https://studies.cs.helsinki.fi/restcountries/api/all")
				setCountries(data)
			} catch (error) {
				console.error(error)
			}
		}
		fetchCountries()
	}, [])


	return (
		<>
			<Filter filter={filter} setFilter={setFilter} />
			{filter !== '' && <Countries filter={filter} setFilter={setFilter} countries={countries} />}
		</>
	)
}

export default App
