import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Button Clicked")
    }
    function clickHandlerSignup(){
        console.log("SignUp completed")
    }
    function clickHandlerLogin(){
        console.log("Logged in")
    }
    function clickHandlerLogout(){
        console.log("Logged out")
    }
   
  return (
    <div className='App'>
        <h1>HTML events</h1>
        <button>Click</button>
        <button onClick={clickHandler}>React</button>
        <button onClick={clickHandlerSignup}>Sign Up</button>
        <button onClick={clickHandlerLogin}>Login</button>
        <button onClick={clickHandlerLogout}>Logout</button>
        
    </div>
  )
}

export default FunctionClick