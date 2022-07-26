import { useState } from 'react'

const Button = (props) => {
  return (
    <>
        <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

const Display = ({arr, anecdotes}) => {
  let max = Math.max(...arr)
  let index = arr.indexOf(max)
  return (
    <p>{anecdotes[index]}</p>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const ranGenerator = () => {
    const lng = anecdotes.length
    return Math.floor(Math.random() * lng)
  }

  const handleNum = () => setSelected(ranGenerator)

  const handleVote = () => {
    let copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }

  let a = Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [vote,setVote] = useState(a)

  return (
    <div>
      <h2>Anecdote today</h2>
      <p class="small">{anecdotes[selected]}</p>
      <p line-height= '14px'>has {vote[selected]} votes</p>
      <Button onClick={handleVote} text='vote' />
      <Button onClick={handleNum} text='next anecdote' />
      <h2>Anecdote with most votes</h2>
      <Display arr={vote} anecdotes={anecdotes} />
    </div>
  )
}

export default App