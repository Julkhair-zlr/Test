// import logo from './logo.svg';
import './App.css';
import {Box} from '@mui/material';
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Components/HomePage/Home';
import About from './Components/AboutPage/About';
import Contact from './Components/ContactPage/Contact';
import Login from './Components/LoginPage/Login';

function App() {
  return (
    <Box>
      <Routes>
        <Route excet path='/' element=<Home/>/>
        <Route excet path='/home' element=<Home/>/>
        <Route excet path='/about' element=<About/>/>
        <Route excet path='/contact' element=<Contact/>/>
        <Route excet path='/login' element=<Login/>/>
        <Route excet path='/*' element=<h1><marquee style={{color:'red'}}>404 Page not Found...</marquee></h1>/>
      </Routes>      
    </Box>
    
  );
}

export default App;
