import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/card'
function App() {
  const [count, setCount] = useState(0)
  let Myobj = {
    username: "Ram",
    age:30
  }

  return (
    <>
    <h1 className='bg-green-500 text-white p-4 rounded-xl' >Tailwind CSS</h1>
    <br />
      <Card  username ="ChaiAurCode" />
      <br />
      <Card />
      <br />
      <Card />
         
    </>
  )
}

export default App
