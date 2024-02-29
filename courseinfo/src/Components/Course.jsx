import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const Course = ({name,course}) => {
  console.log(name,course);
  return (
    <div>
        <Header header={name}/>
        <Content parts={course}/>
        <Total total={course}/>


    </div>
  )
}

export default Course
