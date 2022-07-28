import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function HookMouse() {
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);

 const logMousePosition=event=>{
    console.log("Mouse Event");
    setX(event.clientX)
    setY(event.clientY)
  }
   useEffect(()=>{console.log('useEffect Called')
    window.addEventListener("mousemove",logMousePosition);
});
  return (
    <div className='app'>
        <h2>Mouse hover where ever you want</h2>
        <h3>Hook X-axis {x} Y-axis {y}</h3>
    </div>
  )
}

export default HookMouse