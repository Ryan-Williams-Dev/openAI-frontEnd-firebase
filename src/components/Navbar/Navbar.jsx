import { AppBar, Button, Alert, AlertTitle, Typography } from '@mui/material'
import { useAuth } from "../../contexts/AuthContext.jsx"
import { useNavigate } from 'react-router-dom'
import "./nav-styles.scss"

export default function Navbar(props) {
  const { logout, currentUser } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    props.errorSetter(null)

    try {
      await logout()
      navigate('/login')
    } catch (error) {
      props.errorSetter(
        <Alert variant='error'>
          <AlertTitle>Failed to logout</AlertTitle>
          {error.message}
        </Alert>
      )
    }
  }

  return (
    <AppBar position='fixed'>
      <div className='Navbar'>
        <Typography variant='h4' > Shopify Front-end Challenge </Typography>
        {currentUser &&
          <>
            <Typography variant='p'>Logged in as: {currentUser.email}</Typography>
            <Button color='inherit' onClick={handleLogout} >Log out</Button>
          </>
        }
      </div>
    </AppBar>
  )
}
