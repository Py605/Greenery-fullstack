import React, { useState } from 'react'

const Login = () => {
    const [gmail, setemail] = useState('');
    //const [password, setpassword] = useState('');
    async function collection() {
    let result = await fetch('http://localhost:4000/login', {
        method: 'post',
        body: JSON.stringify( { gmail} ),
        headers: {
          'content-type': 'application/json',
          
        }
      });
      result = await result.json();
      console.log(result.result);
    }
  return (
    <>
   
   <input type='email' className='input' value={gmail} onChange={(e) => setemail(e.target.value)} placeholder='Enter Email...' />
        {/* <input type='password' className='input' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Enter password...' /> */}
        <button type='button' onClick={collection} style={{ display: 'block', padding: '10px 15px', background: 'skyblue', border: 'none', marginLeft: '10px' }}>Signup</button>
  
   
    </>
  )
}

export default Login