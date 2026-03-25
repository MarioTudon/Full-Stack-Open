import { useState } from "react"
import Persons from "./Persons"
import PersonForm from "./PersonForm"
import Filter from "./Filter"

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas", number: "+358 40 123 456" },
    { id: 2, name: "Ada Lovelace", number: "+44 39 44 5323523" },
    { id: 3, name: "Dan Abramov", number: "+1 12 43 234345" },
    { id: 4, name: "Mary Poppendieck", number: "+44 39 23 6423122" }
  ])

  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

    setPersons(prev => [...prev, newPerson])
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />

      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App