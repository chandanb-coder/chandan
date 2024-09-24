
import React, { useEffect, useState } from 'react'

function Form() {

    const data = {name:'',email:'',passwoard:''}
    const [input,setInput] = useState(data);
    const [flag,setFlage] = useState(false)

    useEffect(()=>{
console.log("Registered");

    },[flag])


    function handelData(e){
        setInput({...input, [e.target.name]: e.target.value});
        console.log(input)
    }
    function handelSubmit(e){
e.preventDefault();
if(!input.name || !input.email || !input.passwoard){
    alert("required  all fileds");
}else{
    setFlage(true);
}
    }
  return (
    <div>
        <pre>{{flag}?<h2>Hello {input.name} you have registered</h2>:""}</pre>
      <form className='container' onSubmit={handelSubmit}>
        <div>
            <h1>
                Reg form
            </h1>
        </div>
        <div>
            <input type="text"  value={input.name} onChange={handelData} placeholder='enter your nsme' name='name' />
        </div>
        <div>
            <input type="text"  value={input.email} onChange={handelData} placeholder='enter your email' name='email' />
        </div>
        <div>
            <input type="text"  value={input.passwoard} onChange={handelData}placeholder='enter your password' name='passwoard' />
        </div>
        <div>
            <button type='submit'>save</button> 
        </div>
      </form>
    </div>
  )
}

export default Form
