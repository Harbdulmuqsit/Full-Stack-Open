
const PersonForm = ({handleSubmit,newName, handleChangeName, number,handleChangeNumber}) => {
  return (
    <div>
        
        <form onSubmit={handleSubmit}>
            <h2>add a new</h2>
                <div>
                name: <input 
                        type='text'
                        value={newName}
                        onChange={handleChangeName}
                        />
                </div>

                <div>  
                number: <input 
                            type='number'
                            value={number}
                            onChange={handleChangeNumber}
                                />
                </div>


                <div>
                <button type="submit">add</button>
                </div>
        </form>

    </div>
  )
}

export default PersonForm
