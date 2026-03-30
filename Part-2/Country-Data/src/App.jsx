import { useEffect, useState } from "react"
import Filter from "./Filter"
import Countries from "./Countries"
import "./App.css"

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(response => response.json())
      .then(data => setCountries(data))

  }, [])

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
      {filter !== '' && <Countries filter={filter} setFilter={setFilter} countries={countries} />}
    </>
  )
}

export default App
