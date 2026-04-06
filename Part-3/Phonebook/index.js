import express, { json } from "express"
import persons from "./db.js"

const app = express()

app.use(json())

app.get('/api/persons', (req, res) => {
    return res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id
    const person = persons.find(person => person.id === Number(id))

    if (person) {
        return res.json(person)
    } else {
        return res.status(404).end()
    }
})

app.post('/api/persons', (req, res) => {
    const id = Math.random()
    const person = req.body

    if (!person.name || !person.number) {
        return res.status(400).json({
            error: 'name or number missing'
        })
    }

    const nameExists = persons.find(p => p.name === person.name)
    if (nameExists) {
        return res.status(400).json({
            error: 'name must be unique'
        })
    }

    person.id = id
    persons.push(person)
    return res.json(person)
})

app.get('/info', (req, res) => {
    const now = new Date()
    return res.send(`<p>Phonebook has info for ${persons.length} people</p> <p>${now.toString()}</p>`)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
