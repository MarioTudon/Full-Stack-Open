import Button from "./Button"

const Country = ({ country, onClick }) => {
    const languagesArray = Object.values(country.languages)

    return (
        <div className="country-container">
            <h1>{country.name.common}</h1>
            <div>Capital {country.capital}</div>
            <div>Area {country.area}</div>
            <h2>Languages</h2>
            <ul>
                {
                    languagesArray.map(language => <li key={language}>{language}</li>)
                }
            </ul>
            <img src={country.flags.svg} alt="country flag" />
            <div>
                <Button onClick={onClick} text={'Back'}/>
            </div>
        </div>
    )
}

export default Country