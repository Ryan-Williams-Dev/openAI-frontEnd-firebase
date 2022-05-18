import { Alert, AlertTitle, Box, Button, TextField, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import './login-styles.scss';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { Link, useNavigate } from "react-router-dom"

const Register = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const { register } = useAuth()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if(passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError(null)
      setLoading(true)
      await register(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch (err){
      setLoading(false)
      console.log(err)
      return setError(
        <Alert severity='error' onClose={() => setError(null)}>
          <AlertTitle>Failed to create account</AlertTitle>
          {err.message}
        </Alert>
      )
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
          {error}
          <Button disabled={loading} type='submit' variant='contained' >Register</Button>
          <Typography>
            Already Have an account? <Link to="/login" >Log In</Link>
          </Typography>

        </div>
      </Box>
    </div>
  );
}

export default Register;
