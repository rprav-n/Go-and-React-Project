import React, { useState } from 'react'
import {useOutletContext, useNavigate } from 'react-router-dom'
import Input from './form/Input'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setJwtToken, setAlertMessage, setAlertClassName} = useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === 'admin@example.com') {
      setJwtToken('abc')
      setAlertClassName("d-none")
      setAlertMessage("")
      navigate('/')
      
    } else {
      setAlertClassName("alert-danger")
      setAlertMessage("Invalid credentials")
    }
  }

  return (
    <div className='col-md-6 offset-md-3'>
      <h2>Login</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <Input
          title="Email Address"
          type="email"
          name="email"
          autoComplete='email-new'
          placeholder="Email"
          value={email}
          className='form-control'
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          title="Password"
          type="password"
          name="password"
          autoComplete='password-new'
          placeholder="Password"
          value={password}
          className='form-control'
          onChange={(event) => setPassword(event.target.value)}
        />

        <hr />
        <input type="submit" className="btn btn-primary" value='Login' />
      </form>
    </div>
  )
}

export default Login