const Countries = ({countries, filterLength}) => {
    
    if (filterLength === 0) return (null)

    if (countries.length > 10 && filterLength > 0) {
        return (<>
            <div>
                too many matches, specify another
            </div>        
        </>)
    }

    if (countries.length > 1 && filterLength > 0) {
        return (<>
            {countries.map((country) => {
            return (
                <div key={country.name.common}>
                    {country.name.common}
                </div>
            );
            })}
        </>)
    }
    
    return (<>
    {countries.map((country) => {
      return (
        <div key={country.name.common}>
          <h2>{country.name.common}</h2>
          <div>capital: {country.capital}</div>
          <div>area: {country.area}</div>
          <h3>languages: </h3>
          <ul>{Object.keys(country.languages).map((key) => {
            return <li>{country.languages[key]}</li>
          })}</ul>
          <img src={`${country.flags.png}`} 
          alt="flag img"
          width="150" height="auto"></img>
        </div>
      );
    })}
    </>)
}
export default Countries