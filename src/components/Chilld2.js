import React from 'react'
import "./Css.css"
function Chilld2({setOption}) {
  return (
    <div className='child2'>
    <h1>Child Component 2</h1>
    <button onClick={()=>setOption("option 2")}>Option 2</button>
  </div>
  )
}

export default Chilld2
