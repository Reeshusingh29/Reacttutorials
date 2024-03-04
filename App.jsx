import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


 const [counter,setcounter] = useState(15)


 //let counter = 55

 const addvalue = ()=>{
  //console.log("value added",Math.random())
  
  //counter=counter+1 
  setcounter(counter+1)
  
 }
 const removevalue = () =>{
  setcounter(counter-1)
 }
  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value:{counter}</h2>

    <button
     onClick={addvalue}
    >Add value</button>
    <button 
    onClick={removevalue}
    >Remove value</button>
    <br />
      <h1>react</h1>
    </>
  )
}

export default App
