import { useState } from 'react'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'
const App = () => {
  // State
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number:123 } ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const personFiltered = persons.filter(person => person.name.includes(filter))
  const personShown = filter.length > 0 ? personFiltered : persons

  //event handler for submitting a form
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
  // event handler for "onChnage", Function that returns a function
  const handleChange = (newFunction) => {
    return (event) => {
      newFunction(event.target.value)
    }
  }

  return (
    <>
      <h2>Phonebook</h2>       
      
      <Filter filter={filter} handleFilter={handleChange(setFilter)}/>

      <h3>Add a new</h3>
      
      <PersonForm 
        handleAdd={addPerson} 
        handleName={handleChange(setNewName)} 
        handleNumber={handleChange(setNewNumber)} 
        Name={newName} 
        Number={newNumber} 
      />

      <h2>Numbers</h2>

      <Persons personShown={personShown}/>
    </>
  )
}

export default App