import './App.css';
import Routes from './Routes';
import Footer from './components/MainAplicationPages/Footer/Footer';
import Header from './components/MainAplicationPages/Header/Header';
import Home from './components/MainAplicationPages/Home/Home';
import Sidebar from './components/MainAplicationPages/SideBar/SideBar';
import AuthHome from './components/authHome/AuthHome';
import Register from './components/register/Register';

import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return ( 
  
      <>
        <div style={{display:'flex', flexDirection:'row'}}>

          <Sidebar></Sidebar>
        
          <div style={{display:'flex', flexDirection:'column', width:'100%'}} >
            <Header></Header>

            <BrowserRouter>
              
              <Routes></Routes>

            </BrowserRouter>

            <Footer></Footer>
            
          </div>
        </div>
      </>
  
    );
}
 
export default App;