
// const Display = (props) => {
//   console.log(props)
//   const {text} = props;
//   return <h3>{text}</h3>
// }

// const App = () => {
//   const name='What is your name ?';
//   const email = 'What is your Email ?';
//   console.log(name,  'My name is Abdulsalam Abdulmuqsit Olamide');

//   const sortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6, 5].reduce((a, b) => a - b);

//     console.log(sortedNumbers);
//   return (
//     <div>
//        <Display text={name}/>
//        <Display text={email} />
     
//     </div>
//   )
// }

// export default App


const App = () => {

  var animals = [
    {name: 'Fluffykins', Species:'rabbit'},
    {name: 'Carlo', Species:'dog'},
    {name: 'Hamilton', Species:'dog'},
    {name: 'Harold', Species:'fish'},
    {name: 'Ursula', Species:'cat'},
    {name: 'Jimmy', Species:'fish'},
  ]

  // var dog = [];
  // for (let i = 0; i < animals.length; i++) {
  //   if( animals[i].Species === 'dog')
  //   dog.push(animals[i])
  // }

  // var dog = animals.filter(function(animal) {
  //   return animal.Species === 'dog' 
  // })

  // var dog = [];
  // console.log(dog)
  return (
    <>
    <div>
     {/* {animals.map((dog, i)=> (
      <div key={i}>
        <p><b>Name:</b> {dog.name}, <b>Species:</b>  {dog.Species}</p>
      </div>
     ))}  */}
    {animals.filter((animal) => animal.Species === 'dog').map((anl, index) => {
      return <div key={index}>
        <p><b>Name:</b> {anl.name}, <b>Species:</b> {anl.Species}</p>
      </div>
    })}
     </div>
    </>
  )
}

export default App
