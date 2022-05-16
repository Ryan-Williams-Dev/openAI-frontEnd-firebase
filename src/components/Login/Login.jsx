import { Box, Button, TextField } from '@mui/material';
import React, { useRef } from 'react';
import './login-styles.scss'

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('email: ', emailRef, '\npassword: ', passwordRef)
  }

  return (
    <div>
      <Box
        component='form'
        onSubmit={handleSubmit}
      >
        <div className='form-container'>

          <TextField type='email' required label='email' ref={emailRef} />
          <TextField type='password' required label='password' ref={passwordRef} />
          <Button type='submit' variant='contained' >Login</Button> 

        </div>
      </Box>
    </div>
  );
}

export default Login;
