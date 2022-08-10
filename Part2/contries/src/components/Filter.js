const Filter = ({filter, handleFilter}) => {
    return (<>
        find countries:
        <input 
            value={filter}
            onChange={(event) => {
                handleFilter(event.target.value)
            }}
        />    
    </>)
}
export default Filter