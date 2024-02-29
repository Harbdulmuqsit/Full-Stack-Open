
const Total = ({total}) => {
    const TotalExercise = total.reduce((total, part) => total + part.exercises, 0 );
    console.log(TotalExercise)
    return (
    <div>
      <h3> Total of {TotalExercise} Exercises </h3>
    </div>
  )
}

export default Total
