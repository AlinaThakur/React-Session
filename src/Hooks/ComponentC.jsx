import React from 'react'
import ComponentE from './ComponentE'

function ComponentC() {
  return (
    <div className='nested'>
        <ComponentE/>
    </div>
  )
}

export default ComponentC