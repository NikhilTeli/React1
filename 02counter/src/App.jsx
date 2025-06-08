import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(15)

  // let counter = 7

const addValue = () =>{
  // counter =counter + 1
  setCounter(counter + 1)
}

const removeValue = () =>{
  // counter =counter - 1
  setCounter(counter - 1)
}

let [number, setnumber] = useState(0)
const increaseNo = () =>{
  setnumber(number + 1)
}

const decreaseNo = () =>{
  setnumber(number - 1)
}
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter: {counter}</h2>

      <button
      onClick={addValue}
      >add value</button>
      <br /><br />
      <button
      onClick={removeValue}
      >remove value</button>

      <br /><br />
      <button
      onClick={increaseNo}
      onMouseOver={decreaseNo}
      >start {number}</button>
    </>
  )
}

export default App
