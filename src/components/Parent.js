import React, { useState } from 'react'
import "./Css.css"
import Child1 from './Child1'
import Chilld2 from './Chilld2'
function Parent() {
    const [option,setOption]=useState("");
  return (
    <div>
     <div className='parent'>
     <h1>Parent Component</h1>
     <Child1 setOption={setOption}/>
     <Chilld2 setOption={setOption}/>

     <p>Selected Option :{option}</p>
     </div>
    </div>
  )
}

export default Parent
