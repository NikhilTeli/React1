import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Card2 from './components/card2'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Nikhil",
    age: 21
  }

  return (
    <>
      <div className="bg-green-400 text-red-400 p-2 rounded-4xl">Hi</div>

        <Card username = "Nihkil art" />
        {/* <Card username = "hitesh art" price = "99999" /> */}
        <Card2 name = "Beautiful Sunset"/>
        <Card2 />
    </>
  )
}

export default App
