import './App.css';
import Login from './components/Login/Login';
import Register from './components/Login/Resgister';
import Prompt from './components/Prompt';
import { AuthProvider } from './contexts/AuthContext.jsx';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h1>Shopify Front End Challenge</h1>
        <Register />
      </div>
    </AuthProvider>
  );
}

export default App;
