import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function CreateUsers() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState("");
    const navigate = useNavigate();
    const Submit = (e)=>{
        e.preventDefault();
        
        axios.post("http://localhost:3000/createUser",{name,email,age})
        .then(result => navigate('/'))
        .catch(err=>console.log(err))
    }
  return (
    <div>
      <form onSubmit={Submit}>
        <input type="text" name="" id="" placeholder='Enter name' onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <br/>
        <input type="text" name="" id="" placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <br/>
        <input type="text" name="" id="" placeholder='Enter age' onChange={(e)=>setAge(e.target.value)}/>
        <br/>
        <br/>
        <button className="btn btn-success">Submit </button>
      </form>
    </div>
  )
}
