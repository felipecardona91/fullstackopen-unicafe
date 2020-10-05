import React, { useState } from 'react'
import './index.css';
import Button from "./button"
import Statistics from "./statistics"
import './app.css'



function App() {
    // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = bad + neutral + good;
  const average = (good - bad ) / total || '0' //esto hace que el número no arranque en NaN
  const positive = (good / total) * 100 || '0'

  const increaseGood = () => {
    setGood(good + 1);
    console.log("hi")
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1);
    console.log("hi")
  }

  const increaseBad = () => {
    setBad(bad + 1);
    console.log("hi")
  }

  const reset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
    console.log("hi")
  }




  return (
    <div>
     <h1>Give Feedback</h1>
     <Button onClick={increaseGood}
        text='Good'/>
     <Button onClick={increaseNeutral}
        text='Neutral'/>
     <Button onClick={increaseBad}
        text='Bad'/>
     <Button onClick={reset}
        text='Reset'/>
     <Statistics good ={good} bad ={bad} neutral ={neutral} total ={total} average ={average} positive ={positive}/> {/* se le manda mejor uno por uno los props, sí quisiera mandarlos todos en por ejemplo una variable "props" toca con doble curly braces porque se le manda un objeto */}
    </div>
  );
}

export default App;
