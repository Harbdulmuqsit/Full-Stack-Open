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

   var orders = [
    {amount: 200},
    {amount: 400},
    {amount: 100},
    {amount: 325}
   ]

   var totalAmount = orders.reduce((sum, order) =>  (sum + order.amount) , 0)

  //  var totalAmount = 0;

  //  for(var i = 0; i < orders.length; i++){
  //   totalAmount += orders[i].amount
  //  }

   console.log(totalAmount);

  // var dog = [];
  // for (let i = 0; i < animals.length; i++) {
  //   if( animals[i].Species === 'dog')
  //   dog.push(animals[i])
  // }

  // var dog = animals.filter(function(animal) {
  //   return animal.Species === 'dog' 
  // })

  var names = animals.map((x)=> x.name);
  console.log(names)
  
  // var dog = [];
  // console.log(dog)

  // var add = function (d){ return d + 3}; 
  // var parameter = add;
  // console.log(parameter(20))

  
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
