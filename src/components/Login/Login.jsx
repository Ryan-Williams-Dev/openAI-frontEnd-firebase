import { Box, Button, TextField, Typography, Alert } from '@mui/material';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.jsx';
import './login-styles.scss'

const Login = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    
    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
    } catch (err){
      setLoading(false)
      console.log(err)
      return setError('Failed to log in\n', err.message)
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
          {error && <Alert severity="error"  >{error}</Alert>}
          <Button type='submit' variant='contained' >Log in</Button>
          <Typography>
            Need an account? <Link to='/register'>Sign up</Link>
          </Typography>

        </div>
      </Box>
    </div>
  );
}

export default Login;
