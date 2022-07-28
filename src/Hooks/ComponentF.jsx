import React from 'react'
import {UserContaxt, WebContaxt} from '../App'
function ComponentF() {
  return (
    <div className='nested'>
        <UserContaxt.Consumer>
            {
                user=>{
                    return( 
                        <WebContaxt.Consumer>
                    {WebContaxt =>{
                        return(
                           <div>
                            User Contaxt value is {user},
                            Web Contaxt value is {WebContaxt}
                           </div>
                        )
                    }}
                    </WebContaxt.Consumer>
                    ) }
            }
        </UserContaxt.Consumer>
    </div>
  )
}

export default ComponentF