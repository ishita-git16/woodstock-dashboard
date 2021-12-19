import React, {useEffect, useState} from "react";
import axios from "axios";
import moment from "moment";
import {Card, Col, Layout, Row, Space, Typography} from "antd";
import "antd/dist/antd.css";
import useForceUpdate from "use-force-update";
import Solana from "../Components/Dashboard/Solana";
const { Content } = Layout;

const TheContentSol = () => {
  
  return (
    <>
    
      <Content
        // className="site-layout-background"
        style={{
          height: "100vh",
          marginLeft: "50px",
          marginTop: "50px"
        }}
      >

     <Solana/>
      </Content>
    
    </>
  );
};

export default TheContentSol;
