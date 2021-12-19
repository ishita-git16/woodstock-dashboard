import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import TheLayout from "./Container/TheLayout";
// import TheLayout from "./Container/Layout";
import MainScreen from "./Container/Mainscreen";
import MainScreenSol from "./Container/MainscreenSol";
import MainScreenComp from "./Container/MainScreenComp";
// import Solana from "./Components/Dashboard/Solana";
// import jwt_decode from "jwt-decode";
// import { loginUser } from "./Actions/AuthAction";
// import SignInSide from "./Components/Signin";
// import MainDashboard from "./Components/Dashboard/MainDashboard";
import "antd/dist/antd.css";

const App = () => {

  return (
    <>
      <Router>
      
          
           <Redirect from='/' to='/ethereum' />
            <Switch>
              <Route path="/ethereum">
              <MainScreen></MainScreen>
              </Route>
              <Route path="/solana">
            <MainScreenSol/>
             </Route>
             <Route path="/comparison">
            <MainScreenComp/>
             </Route>
            </Switch>
        
            
          
        
      </Router>
   
    {/* <TheLayout></TheLayout> */}
    {/* <MainDashboard/> */}
    </>
  )
}

export default App;
