import './App.css';
import Routes from './Routes';
import Home from './components/MainAplicationPages/Home/Home';
import AuthHome from './components/authHome/AuthHome';
import Register from './components/register/Register';

import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return ( 
  
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  
    );
}
 
export default App;