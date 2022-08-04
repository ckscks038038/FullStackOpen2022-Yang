const PersonForm = ({handleAdd, handleName, handleNumber, Name, Number}) => {
    return (
        <>
        <form onSubmit={handleAdd}>
        <div>
          name: 
          <input value={Name}
                 onChange={handleName} 
          />
        </div>
        <div>
          number: 
          <input 
            value={Number}
            onChange={handleNumber} 
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </>
    )
}
export default PersonForm