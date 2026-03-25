const Persons = ({ persons, filter }) => {

    const filteredPersons = persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase()) ||
        person.number.includes(filter)
    )

    return (
        <>
            <ul>
                {filteredPersons.map(person => (
                    <li key={person.id}>{person.name} {person.number}</li>
                ))}
            </ul>
        </>
    )
}

export default Persons