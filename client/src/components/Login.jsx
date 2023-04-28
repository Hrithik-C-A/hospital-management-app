import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
    const configuration = {
      method: 'post',
      url: 'http://localhost:3000/login',
      data: {
        email,
        password
      }
    }
    axios(configuration)
    .then((result)=>{
      cookies.set('TOKEN',result.data.token,{
        path: '/'
      })
      window.location.href = '/dashboard'
    })
    .catch((error)=>{
      console.error(error);
    })

  }
  return (
    <div className='mt-32'>
        <h1 className='text-center text-slate-900 text-3xl font-bold '>Admin Login</h1>
        <form className='w-64 h-72 flex flex-col justify-center items-center gap-3 px-14 py-2 m-auto shadow-lg' onSubmit={handleSubmit}>
            <input className='rounded border px-3 py-2' type="email" placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input className='rounded border px-3 py-2' type="password" placeholder='Enter your Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button className='rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold px-2 py-1 ' type="submit">Log In</button>
        </form>
    </div>
  )
}

export default Login