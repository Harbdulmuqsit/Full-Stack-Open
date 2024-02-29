
const Part = ({name, exercises}) => {
    console.log(name, exercises )
  return (
    <div>
      <p>{name} - Exercises {exercises}</p>
    </div>
  )
}

export default Part
