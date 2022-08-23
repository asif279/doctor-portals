
import './App.css';
import Navbar from './pages/Shared/NavBar';
import { Routes, Route,Link ,Review} from "react-router-dom";
import Home from './pages/Home/Home';

import Login from './pages/Login/Login';
import About from './pages/About/About';
import Appoinment from './pages/Appoinment/Appoinment';




function App() {
  return (
    <div>
  <Navbar></Navbar>
  
  <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="appoinment" element={< Appoinment />} />
        
        
      </Routes>
    </div>
  );
}

export default App;
