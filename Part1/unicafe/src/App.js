import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td width="30px">{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  
  const total = good + neutral + bad

  if (good===0&&neutral===0&&bad===0) {
    return (
        <p>No feedback given</p>
    )
  }
  return (
    <>
      <table>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value ={total} />
        <StatisticLine text="average" value ={(good-bad)/total} />
        <StatisticLine text="positive" value ={good/total+' %'}/>
      </table>
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
      <h2>give feedback</h2>
      <Button handleClick={handleGood} text="good"/>
      <Button handleClick={handleNeutral} text="neutral"/>
      <Button handleClick={handleBad} text="bad"/>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App