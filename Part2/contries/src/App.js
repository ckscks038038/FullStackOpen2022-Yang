import {useState, useEffect} from 'react'
import axios from "axios";
import Filter from "./components/Filter"
import Countries from "./components/Countries"
function App() {
  const [countries, setCountries] = useState([])
  const [filter,setFilter] = useState('')  
  useEffect(() => {
    console.log('effect')

    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fullfilled')
        setCountries(response.data)
      })
    },[])
    
    console.log('render')
    console.log('numbers of note', countries)

  const countriesFiltered = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  const countriesShown = filter.length > 0 ? countriesFiltered : countries
  return (
    <>
      <Filter filter={filter} handleFilter={setFilter}/>
      <Countries countries={countriesShown} filterLength={filter.length}/>
    </>
  )
  
}
export default App;
