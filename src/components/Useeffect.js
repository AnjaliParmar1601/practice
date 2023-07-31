import React, { useContext, useEffect, useState } from 'react';
import {data} from "../App"
export default function Useeffect() {
  const name =useContext(data)
  console.log("name",name)
   const [count,setCount ]= useState(0)
   useEffect(()=>{
// showCount()
   },[])
   const showCount =()=>{
    alert(count)
   }
  return (
    <div>
        <button onClick={()=>setCount(count+ 1)}>add</button>
    </div>

  )
}
