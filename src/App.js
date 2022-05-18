import './App.css';
import Login from './components/Login/Login';
import Register from './components/Login/Resgister';
import Prompt from './components/Prompt';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'

function App() {
  const [ error, setError ] = useState(null)

  return (

    <div className="App">
      <Navbar errorSetter={setError}/>
      {error}
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            
            <Route exact path="/" element={<Homepage />} />
            <Route path="/register" element={<Register/>} />
            <Route path='/login' element={<Login/>} />

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
