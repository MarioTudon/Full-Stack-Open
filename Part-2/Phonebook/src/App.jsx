import { useEffect, useState } from "react"
import Persons from "./Persons"
import PersonForm from "./PersonForm"
import Filter from "./Filter"
import personsService from "./services/personsService"

function App() {
  const [persons, setPersons] = useState([])

  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personsService.getAll()
      .then(response => {
        console.log(response)
        setPersons(response)
      })
  }, [])

  const addName = (e) => {
    e.preventDefault()

    if (!newName) {
      alert("Name can't be blank")
      return
    }

    if (!newNumber) {
      alert("Number can't be blank")
      return
    }

    if (persons.some(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setFilter('')
      return
    }

    if (persons.some(p => p.number === newNumber)) {
      alert(`number ${newNumber} is already linked to a name`)
      setNewNumber('')
      setFilter('')
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    personsService.create(newPerson)
      .then(response => {
        setPersons(prev => [...prev, response])
      })

    setNewName('')
    setNewNumber('')
  }

  const deleteName = (id) => {
    console.log(id)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />

      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} deleteName={deleteName} />
    </div>
  )
}

export default App