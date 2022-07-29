import { useState } from 'react'

const Display = (props) => <h2>{props.text}</h2>

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Stat = (props) => {
  return <p>{props.text} {props.count}</p>
}
const Percentage = (props) => {
  return <p>{props.text} {props.count}%</p>
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  return (
    <>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good-bad)/total}%</p>
      <p>positive {good/total}%</p>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(preCount => preCount + 1)
  const handleNeutral = () => setNeutral(preCount => preCount + 1)
  const handleBad = () => setBad(preCount => preCount + 1)
  
  return (
    <div>
      <Display text = 'give feedback'/>
      <Button handleClick={handleGood} text="good"/>
      <Button handleClick={handleNeutral} text="neutral"/>
      <Button handleClick={handleBad} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App