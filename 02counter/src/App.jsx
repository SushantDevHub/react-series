import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

let [counter, setCounter] = useState(15) //using useState hook to create a state variable 'counter' and a function 'setCounter' to update it. Initial value is 15.
   //let counter = 15

const addValue = () => {
  console.log('clicked', counter );   
  counter = counter + 1
  setCounter(counter)}
  return (
    <>
      <h1>sushant and react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button>Subtract Value{counter}</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
