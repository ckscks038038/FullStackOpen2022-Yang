const Persons = ({personShown}) => {
    return (
        <>
        <ul>
        {personShown.map(person =>
          <li key={person.name}>{person.name} {person.number}</li>
        )}
        </ul>
        </>
    )
}
export default Persons