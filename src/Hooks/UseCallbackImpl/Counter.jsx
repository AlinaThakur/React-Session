import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

function Counter() {
    const [counterOne,setCounterOne] = useState(0)
    const [counterTwo,setCounterTwo] = useState(0)

    const incrementOne =()=>{
        setCounterOne(counterOne+1)
    }
    const incrementTwo =()=>{
        setCounterTwo(counterTwo+1)
    }
    const isEven =useMemo(()=>{
      let i=0;
      while(i < 200000000) i++
      return counterOne%2===0;
    },[counterOne])
   
  return (
    <div className='app'>
        <div>
            <button onClick={incrementOne}>Count one - {counterOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <br/>
            <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
           
        </div>
    </div>
  )
}

export default Counter