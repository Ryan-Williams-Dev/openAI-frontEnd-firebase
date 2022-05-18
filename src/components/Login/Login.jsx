import { Box, Button, TextField, Typography, Alert, AlertTitle } from '@mui/material';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.jsx';
import './login-styles.scss'

const Login = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    
    try {
      setError(null)
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch (err){
      setLoading(false)
      console.log(err)
      return setError(
        <Alert severity='error' onClose={() => setError(null)}>
          <AlertTitle>Could not log in</AlertTitle>
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

          <TextField type='email' required label='email' inputRef={emailRef} />
          <TextField type='password' required label='password' inputRef={passwordRef} />
          {error}
          <Button type='submit' variant='contained' >Log in</Button>
          <Typography>
            Need an account? <Link to='/register'>Register here</Link>
          </Typography>

        </div>
      </Box>
    </div>
  );
}

export default Login;
