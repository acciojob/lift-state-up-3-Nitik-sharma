import React from 'react'
import "./Css.css"
function Child1({setOption}) {
  return (
    <div className='child1'>
      <h1>Child Component 2</h1>
      <button onClick={()=>setOption("option 1")}>Option 1</button>
    </div>
  )
}

export default Child1
