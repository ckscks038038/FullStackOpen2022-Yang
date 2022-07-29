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
      <Display text = 'statistics'/>
      <Stat text ='good' count = {good}/>
      <Stat text ='neutral' count = {neutral}/>
      <Stat text ='bad' count = {bad}/>
      <Stat text ='all' count = {good+neutral+bad}/>
      <Percentage text ='average' count = {(good-bad)/(good+neutral+bad)}/>
      <Percentage text ='positive' count = {good/(good+neutral+bad)}/>
    </div>
  )
}

export default App