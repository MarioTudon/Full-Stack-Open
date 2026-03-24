import { useEffect, useState } from "react"
import Button from "./Button"
import Title from "./Title"
import Anecdote from "./Anecdote"

function App() {
  const [selected, setSelected] = useState(0)
  const [index, setIndex] = useState(0)
  const [anecdotes, setAnedcdotes] = useState([
    {
      text: 'If it hurts, do it more often.',
      votes: 0
    },
    {
      text: 'Adding manpower to a late software project makes it later!',
      votes: 0
    },
    {
      text: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0
    },
    {
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0
    },
    {
      text: 'Premature optimization is the root of all evil.',
      votes: 0
    },
    {
      text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0
    },
    {
      text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      votes: 0
    },
    {
      text: 'The only way to go fast, is to go well.',
      votes: 0
    }
  ])

  const handleNext = () => {
    const selection = Math.floor(Math.random() * anecdotes.length)
    setSelected(selection)
  }

  const handleVote = () => {
    setAnedcdotes(prev => prev.map((a, i) => i === selected ? { ...a, votes: a.votes + 1 } : a))
  }

  useEffect(() => {
    let maxIndex = 0

    anecdotes.forEach((a, i) => {
      if (a.votes > anecdotes[maxIndex].votes) {
        maxIndex = i;
      }
    })

    setIndex(maxIndex)
  }, [anecdotes])

  return (
    <>
      <Title title={'Anecdote of the day'} />
      <Anecdote text={anecdotes[selected].text} votes={anecdotes[selected].votes} />
      <Button onClick={handleVote} label={'vote'} />
      <Button onClick={handleNext} label={'next anecdote'} />
      <Title title={'Anecdote with most votes'} />
      <Anecdote text={anecdotes[index].text} votes={anecdotes[index].votes} />
    </>
  )
}

export default App
