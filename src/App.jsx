import { useState, useRef } from 'react'
import './App.css'

function App() {
  const student = "Привет"

  function a(student){
    console.log(student)
  }




  const [text, setText] = useState(" ");
  function test(){
    console.log(text)
  }
  return (
    <>
      <input onChange={e => setText(e.target.value)}/>
      <button onClick={a}>test</button>
    </>
  )
}

export default App
