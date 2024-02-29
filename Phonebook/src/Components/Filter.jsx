import { useState } from "react";

const Filter = ({person}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredPersons = person.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
    <div>
       filter shown with <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul>
            {filteredPersons.map((person) => (
              <li key={person.id}>
                {person.name} - {person.number}
              </li>
            ))}
          </ul>
    </div>
  )
}

export default Filter
