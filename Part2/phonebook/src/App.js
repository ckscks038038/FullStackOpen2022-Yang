import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number:123 } ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject ={ name: newName, number: newNumber}
    // go through the persons array to check 
    // if there is an object within the array identical to "personObject"
    // if true, noitfy user with alert
    let duplicated = persons.every(person => 
      JSON.stringify(person.name) !== JSON.stringify(personObject.name))

    if (!duplicated){
      alert(`${newName} is already added to phonebook`)
    }else {
      setPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    return setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    return setNewNumber(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
                 onChange={handleNameChange} 
                  />
        </div>
        <div>
          number: <input value={newNumber}
                 onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <li key={person.name}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App