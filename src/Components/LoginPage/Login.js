import React, { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../utils/Firebase";
import { Box} from "@mui/system";
import { Button, Paper, TextField, Typography } from "@mui/material";
import "./Login.css";
import { blue } from "@mui/material/colors";
import Header from "../Header/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");
  const [userLoginDetail, setUserLoginDetail] = useState(null);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const signInHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.userLoginDetail;
        console.log("Successfully Signin", user);
        setDisplayMessage("Logedin");
        setUserLoginDetail(user);
      })
      .catch((error) => {
        console.log("Error login user", error);
        setDisplayMessage(
          error.code === "auth/user not found"
            ? "Account not found. Please create a Account.."
            : error.code
        );
      });
  };

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        resetAllFields();
        console.log("Sign Out", auth);
      })
      .catch((err) => {
        console.log("Error login out.", err);
      });
  };

  const resetAllFields = () => {
    setUserLoginDetail(null);
    setEmail("");
    setPassword("");
    setDisplayMessage("");
    alert("user Logout...");
  };

  return (
    <Box className="loginBox">
    <Header/>
    <Paper className="loginPaper">
    <Typography variant="h3" sx={{color:'lightsalmon'}}>Log in Page</Typography>
      <Box className="loginBox1">
        {/* <Typography variant="h6" >Email ::</Typography> */}
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={emailHandler}
          sx={{ width: "300px" }}
        />
      </Box>
      <Box className="loginBox1">
        {/* <Typography variant="h6">Password ::</Typography> */}
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={passwordHandler}
          sx={{ width: "300px" ,display:'flex',gap:'10px'}}
        />
      </Box>
      <Box className="loginBox1">
        <Button variant="contained" onClick={signInHandler}>
          Sign In
        </Button>

        <Button onClick={logoutHandler} variant="contained">
          Logout
        </Button>
      </Box>
      <h5>{displayMessage}</h5>
      <h5>{userLoginDetail}</h5>
      </Paper>
    </Box>
  );
};

export default Login;
