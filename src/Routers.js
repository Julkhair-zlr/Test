// import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
// import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
// import Home from "./Components/HomePage/Home";
// import About from "./Components/AboutPage/About";
// import Contact from "./Components/ContactPage/Contact";
// import Login from "./Components/LoginPage/Login";
import { Box } from "@mui/system";
const Routers = () => {
    

  return (
    <Box> 
     
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
      
    </Box>
  );
};

export default Routers;
