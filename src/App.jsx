import { useState } from "react"




function App() {
  
const [count,setCound] =useState(0)
  return (
    <>
    <h2>{count}</h2>
    <button onClick={()=>{setCound(count+1)}} style={{width:"200px", height:"200px"}} ></button>
      <h1>Hello</h1>
    </>
  )
}

export default App
