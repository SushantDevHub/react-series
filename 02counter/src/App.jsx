import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() { 

let [counter, setCounter] = useState(15) //using useState hook to create a state variable 'counter' and a function 'setCounter' to update it. Initial value is 15.
   //let counter = 15

const addValue = () => {
  if(counter < 20){
  setCounter(counter +1 ) //update the counter state variable by incrementing its value by 1
}
}
const removeValue = () => {
  if(counter > 0){
  setCounter(counter -1 ) //update the counter state variable by decrementing its value by 1
}
}
  return (
    <>
      <h1>sushant and react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue} disabled={counter === 20}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue} disabled={counter === 0}> 
        remove Value{counter}</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
