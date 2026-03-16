import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
   let counter = 15
   counter = counter + 1
const addValue = () => {
  console.log('clicked', Math.random() );
  console.log( 'value addded', Math.random() );
}
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button>Subtract Value</button>
    </>
  )
}

export default App
