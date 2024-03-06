
const Persons = ({person}) => {
    return (
    <div>
    {person.map( (persons) => 
        <div key={persons.id}>
           <p>{persons.name}:  {persons.number}</p> 
        </div>
        )}
    </div>
  )
}

export default Persons
