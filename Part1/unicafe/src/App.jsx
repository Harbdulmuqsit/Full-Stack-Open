

const Button = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>
        {text}
      </button>
    </>
  )
}



const Display = ({text, value}) =>{

  return(
    <>
      <p>{text}: {value}</p>
    </>
  )
}





import {useState} from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [percentage, setPercentage] = useState(0);


  const handleGood = () => {
    console.log(good)

    const good1 = good + 1;
    setGood(good1);
    updateFeedback(good1,neutral,bad)
  }

  const handleNeutral = () => {
    console.log(neutral)
    const neutral1 = neutral + 1;
    setNeutral(neutral1)
    updateFeedback(good,neutral1,bad)
  }

  const handleBad = () => {
    console.log(bad)
    const bad1 = bad + 1;
    setBad(bad1)
    updateFeedback( good,neutral,bad1)
  }

  const updateFeedback = (newGood, newNeutral, newBad) => {
    const calc = newGood + newNeutral + newBad;
    const average1 = calc / 3;
    const percentage = (newGood / calc) * 100;
    setTotal(calc);
    setAverage(average1);
    setPercentage(percentage);
  }

  return (
    <div>
        <h1>Give Feedback</h1>
            <Button handleClick={handleGood} text='Good'/>
            <Button handleClick={handleNeutral} text='Neutral'/>
            <Button handleClick={handleBad} text='Bad'/>
      <div>
        <h2>Statistics</h2>
       
       
        {total === 0 ?
        (
          <div>No feedback given</div>
        )
        :(
          <>
            <Display text='Good' value={good}/>
            <Display text='Neutral' value={neutral}/>
            <Display text='Bad' value={bad}/>
            <Display text='Total' value={total}/>
            <Display text='Average' value={average.toFixed(2)}/>
            <Display text='Percentage' value={percentage.toFixed(2) + '%'}/>
         </>
         
        ) }

   
          </div>
    </div>
  )
}

export default App
