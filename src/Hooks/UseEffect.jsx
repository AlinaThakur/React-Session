import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function UseEffect() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title=`You Clicked ${count} times`
        console.log({count})
    });
  return (
    <div className='app'>
     <button onClick={()=>setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default UseEffect