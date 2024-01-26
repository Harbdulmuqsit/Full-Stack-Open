const Header = (props) => {
    return(
        <h3>{props.course.name}</h3>
    )
}


const Content =  (props) => {
  console.log(props)
  return(
      <ul>
        {props.course.parts.map((show, index)  =>  {
          return    <li  key={index}>
                        {show.name}: {show.exercises} Exercises
                    </li>
        })}
        </ul>
  )
}


const Total = (props) => {
  console.log(props);
  const totalEXercises = props.course.parts.reduce((accumulator, currentValue) => {
      return  accumulator + currentValue.exercises
  },0)

    console.log(totalEXercises)
  return(
    <>
      <p>{totalEXercises}</p>
    </>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
              exercises: 10
          },

        {
          name: 'Using props to pass data',
                exercises: 7
          },

          {
            name: 'State of a component',
            exercises: 14
          }
          ]
}

  return (
    <div>
        <Header course = {course}/>
        <Content course = {course}/>
        <Total course= {course} />    
    </div>
  )
}

export default App
