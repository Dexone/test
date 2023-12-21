import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
function test(){
  console.log(count)
}
  return (
    <>

      <input
        value={count}
        onChange={e => setCount(e.target.value)}
      />

      <button onClick={test}>test</button>
    </>
  )
}

export default App
