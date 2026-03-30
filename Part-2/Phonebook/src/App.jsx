import { useEffect, useState } from "react"
import Persons from "./Persons"
import PersonForm from "./PersonForm"
import Filter from "./Filter"
import personsService from "./services/personsService"
import Notification from "./Notification"
import Error from "./Error"

function App() {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({
    name: '',
    number: ''
  })
  const [filter, setFilter] = useState('')
  const [showNotification, setShowNotification] = useState(false)
  const [showError, setShowError] = useState(false)
  const [messageNotification, setMessageNotification] = useState('')
  const [messageError, setMessageError] = useState('')

  useEffect(() => {
    personsService.getAll()
      .then(data => {
        setPersons(data)
      })
  }, [])

  const addName = (e) => {
    e.preventDefault()

    if (!newPerson.name) {
      alert("Name can't be blank")
      setNewPerson(prev => ({ ...prev, name: '', number: '' }))
      return
    }

    if (!newPerson.number) {
      alert("Number can't be blank")
      setNewPerson(prev => ({ ...prev, name: '', number: '' }))
      return
    }

    if (persons.some(p => p.name === newPerson.name)) {
      const person = persons.find(person => person.name === newPerson.name)
      if (!window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)) return

      newPerson.id = person.id
      personsService.update(person.id, newPerson)
        .then(data => {
          setPersons(prev => prev.map(person => person.id !== data.id ? person : newPerson))
          setShowNotification(true)
          setMessageNotification(`Updated ${person.name}`)
          setTimeout(() => setShowNotification(false), 2000)
          setNewPerson(prev => ({ ...prev, name: '', number: '' }))
        })
        .catch(() => {
          setShowError(true)
          setMessageError(`${person.name} has already been removed from server`)
          personsService.getAll()
            .then(prev => setPersons(prev))
          setTimeout(() => setShowError(false), 2000)
        })

      return
    }


    personsService.create(newPerson)
      .then(data => {
        setPersons(prev => [...prev, data])
      })

    setShowNotification(true)
    setMessageNotification(`Added ${newPerson.name}`)
    setTimeout(() => setShowNotification(false), 2000)
    setNewPerson(prev => ({ ...prev, name: '', number: '' }))
  }

  const deleteName = (id) => {
    const person = persons.find(person => person.id === id)
    if (!person) return

    if (!window.confirm(`Delete ${person.name}?`)) return

    personsService.remove(id)
      .then(data => {
        setPersons(prev => prev.filter(person => person.id != data.id))
        setShowNotification(true)
        setMessageNotification(`Deleted ${person.name}`)
        setTimeout(() => setShowNotification(false), 2000)
      })
      .catch(() => {
        setShowError(true)
        setMessageError(`${person.name} has already been removed from server`)
        personsService.getAll()
          .then(prev => setPersons(prev))
        setTimeout(() => setShowError(false), 2000)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      {showNotification && <Notification messageNotification={messageNotification} />}
      {showError && <Error messageError={messageError} />}

      <h2>add a new</h2>
      <PersonForm newPerson={newPerson} setNewPerson={setNewPerson} addName={addName} />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} deleteName={deleteName} />
    </div>
  )
}

export default App