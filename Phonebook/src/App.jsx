import { useState } from 'react'
import Filter from './Components/Filter'
import Persons from './Components/Persons'
import PersonForm from './Components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [number, setNumber] = useState('') 
  const [newName, setNewName] = useState('')

  const handleChangeName = (e) => {
    setNewName(e.target.value);
    
  }

  const handleChangeNumber = (e) => {
    setNumber(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
  const Available = persons.some(persons => persons.name === newName || persons.number === number); 
  

    if(Available){
      alert(`${newName}: ${number} is already added to phonebook`)
    }
     else{
      setPersons([...persons, {name: newName, number}])
      setNewName('');  
      setNumber('')
    }
  };

 

  return (
    <div>
      <h2>Phonebook</h2>
          <Filter person={persons}/>
      

        <PersonForm 
          handleSubmit={handleSubmit}
          newName={newName}
          handleChangeName={handleChangeName}
          number={number}
          handleChangeNumber={handleChangeNumber}
        />
    
        <h2>Numbers</h2>
          <Persons person={persons}/>

      <div>debug: {newName}: {number}</div>


           
     </div>

  )
}




export default App