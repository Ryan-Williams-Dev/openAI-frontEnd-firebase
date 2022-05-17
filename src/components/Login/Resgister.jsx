import { Alert, Box, Button, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import './login-styles.scss';
import { useAuth } from '../../contexts/AuthContext.jsx';

const Register = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const { register } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if(passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await register(emailRef.current.value, passwordRef.current.value)
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
          <TextField type='email' required label='email' inputRef={emailRef}/>
          <TextField type='password' required label='password' inputRef={passwordRef} />
          <TextField type='password' required label='confirm password' inputRef={confirmPasswordRef} />
          {error && <Alert severity="error"  >{error}</Alert>}
          <Button disabled={loading} type='submit' variant='contained' >Login</Button> 

        </div>
      </Box>
    </div>
  );
}

export default Register;
