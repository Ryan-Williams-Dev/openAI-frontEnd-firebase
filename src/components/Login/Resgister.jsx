import { Alert, Box, Button, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import './login-styles.scss';
import { useAuth } from '../../contexts/AuthContext.jsx';

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { register } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if(password !== confirmPassword) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await register(email, password)
    } catch (err){
      setLoading(false)
      console.log(err)
      return setError('Failed to create an account\n', err.message)
    }
    setLoading(false)

  }

  return (
    <div>
      <Box
        component='form'
        onSubmit={handleSubmit}
        >
        <div className='form-container'>
          <TextField type='email' required label='email' onChange={(e) => {setEmail(e.target.value)}}/>
          <TextField type='password' required label='password' onChange={(e) => {setPassword(e.target.value)}} />
          <TextField type='password' required label='confirm password' onChange={(e) => {setConfirmPassword(e.target.value)}} />
          {error && <Alert severity="error"  >{error}</Alert>}
          <Button disabled={loading} type='submit' variant='contained' >Login</Button> 

        </div>
      </Box>
    </div>
  );
}

export default Register;
