import './App.css';
import Routes from './Routes';
import Footer from './components/MainAplicationPages/Footer/Footer';
import Header from './components/MainAplicationPages/Header/Header';
import Sidebar from './components/MainAplicationPages/SideBar/SideBar';
import ConponentProvider from './contexts/Statecomponents';


import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return ( 
  
      <ConponentProvider>
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
      </ConponentProvider>
  
    );
}
 
export default App;