import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


const Login = (props) => {

   const token = localStorage.getItem('token')

   const [info, setInfo] = useState({
      username: '',
      password: '',
  
    })
  
    const handleChange = (e) => {
  
      setInfo({
        ...info,
        [e.target.name]: e.target.value,
      })
  
    }
  
    const handleSubmit = (e) => {
      
      e.preventDefault()

      axios
         .post('http://localhost:5000/api/login', info)
         .then(res => {
            localStorage.setItem('token', res.data.payload)
            props.history.push('/friendsform')
         })
      // res.data.payload is saving a 'token' information

      setInfo({
        username: '',
        password: '',
      })
  
    }

   if(token){
      return <Redirect to='friendsform' />
   }

   return (
   <div className="login">
      <h1>Login</h1>
      <form className='login___form' onSubmit={handleSubmit}>
         <label className='login___label' htmlFor='username'>
            Username
            <input id='username' name='username' value={info.username} onChange={handleChange} autoComplete='off'/>
         </label>
         <label className='login___label' htmlFor='password' autoComplete='off'>
            Password
            <input id='password' type='password' name='password' value={info.password} onChange={handleChange} autoComplete='off'/>
         </label>
         <button type='submit'>Login</button>
      </form>
   </div>
   )
}

export default Login