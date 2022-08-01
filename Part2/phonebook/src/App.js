import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number:123 } ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const personFiltered = persons.filter(person => person.name.includes(filter))
  const personShown = filter.length > 0 ? personFiltered : persons
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
  // Function that returns a function
  const handleChange = (newFunction) => {
    return (event) => {
      console.log(event.target.value)
      newFunction(event.target.value)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
      <div>
          filter shown with: <input value={filter}
                 onChange={handleChange(setFilter)}/>
      </div>
      <div>
        <h2>Add a new</h2>
      </div>
      </form>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
                 onChange={handleChange(setNewName)} 
                  />
        </div>
        <div>
          number: <input value={newNumber}
                 onChange={handleChange(setNewNumber)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personShown.map(person =>
          <li key={person.name}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App