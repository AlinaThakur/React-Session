import React,{useState} from 'react';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry,setAllEntry]=useState([])
  
     const submitForm = (event) =>{
        event.preventDefault()
        const newEntry = {email: email, password: password}
        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry);
        console.log("Login sucssessfully");
     }

    return (
    <>
     <form action='' onSubmit={submitForm}>
        <div>
            <label htmlFor='email'>Email</label>
            <input type="text" name="email" id="email" value={email} onChange={(event)=> setEmail(event.target.value)}/>
        </div>
         <div>
            <label htmlFor='password'>Password</label>
            <input type="password" name="password" id="password" value={password} onChange={(event)=> setPassword(event.target.value)}/>
        </div>
        <button type='submit'>Login</button>
        </form> 

        <div>
            {allEntry.map((currentElement)=>{
                return (
                    <div className='showDataStyle'>
                        <p>{currentElement.email}</p>
                        <p>{currentElement.password}</p>
                    </div>
                )
            })}
        </div>
    </>
  );
}

export default Login;
