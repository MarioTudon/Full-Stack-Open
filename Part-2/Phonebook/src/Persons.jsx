const Persons = ({ persons, filter, deleteName }) => {

    const filteredPersons = persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase()) ||
        person.number.includes(filter)
    )

    return (
        <>
            <ul>
                {filteredPersons.map(person => (
                    <li key={person.id}>{person.name} {person.number} <button onClick={()=> deleteName(person.id)}>delete</button></li>
                ))}
            </ul>
        </>
    )
}

export default Persons