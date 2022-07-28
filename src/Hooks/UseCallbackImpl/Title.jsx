import React from 'react'

function Title() {
    console.log('Rendering Title')
  return (
    <div className='app'>
        <h2>UseCallback Hook</h2>
    </div>
  )
}

export default React.memo(Title)