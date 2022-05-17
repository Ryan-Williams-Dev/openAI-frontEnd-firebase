import './App.css';
import Login from './components/Login/Login';
import Register from './components/Login/Resgister';
import Prompt from './components/Prompt';
import Homepage from './components/Homepage/Homepage';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <h1>Shopify Front End Challenge</h1>
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
