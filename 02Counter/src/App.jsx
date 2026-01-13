import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter,setCounter]=useState(15)
  // let counter = 15
  

  const addValue = ()=>{
    console.log("clicked",counter);
    setCounter(counter+1)
    if (counter>20) {
      alert("counter value is above the expectaion")
      setCounter(0)
      
    }

  }
  const removeValue = () => {
    setCounter(counter-1)
    if (counter < 0) {
      alert("counter value is below the expectaion")
      setCounter(0)
    }
  }

  return (
    <>
    <h1>chai aur react</h1> 
    <h2>counter value:{counter}</h2>

    <button 
    onClick={addValue}>Add Value={counter}</button>
  <br />
    <button onClick={removeValue}>Remove value= {counter}</button>
     </>
  )
}

export default App
