import { useEffect, useState } from "react"
import Button from "./Button"
import Country from "./Country"

const Countries = ({ filter, countries }) => {
    const [filteredCountries, setFilteredCountries] = useState([])

    useEffect(() => {
        resetFiltered()
    }, [filter, countries])

    const resetFiltered = () => {
        setFilteredCountries(
            countries.filter(country =>
                country.name.common.toLowerCase().includes(filter.toLowerCase())
            )
        )
    }

    const selectCountry = (countryName) => {
        setFilteredCountries(prev =>
            prev.filter(country => country.name.common === countryName)
        )
    }

    if (filteredCountries.length === 1) {
        return (
            <Country
                country={filteredCountries[0]}
                onClick={resetFiltered}
            />
        )
    }

    if (filteredCountries.length <= 10) {
        return (
            <ul>
                {filteredCountries.map(country => (
                    <li key={country.name.common}>
                        {country.name.common}
                        <Button
                            onClick={() => selectCountry(country.name.common)}
                            text="Select"
                        />
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div>Too many matches, specify another filter</div>
    )
}

export default Countries