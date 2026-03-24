import { useState } from "react"
import Button from "./Button"
import Title from "./Title"

function App() {
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleClick = (comment) => {
    setStatistics(prev => ({ ...prev, [comment]: prev[comment] + 1 }))
  }

  return (
    <>
      <Title title={'give feedback'} />
      <Button label={'good'} onClick={() => handleClick('good')} />
      <Button label={'neutral'} onClick={() => handleClick('neutral')} />
      <Button label={'bad'} onClick={() => handleClick('bad')} />
      <Title title={'statistics'} />
      <div>good {statistics.good}</div>
      <div>neutral {statistics.neutral}</div>
      <div>bad {statistics.bad}</div>
    </>
  )
}

export default App
