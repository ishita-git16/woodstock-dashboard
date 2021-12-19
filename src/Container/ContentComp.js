import React, {useEffect, useState} from "react";
import axios from "axios";
import moment from "moment";
import {Card, Col, Layout, Row, Space, Typography} from "antd";
import "antd/dist/antd.css";

import Comparison from "../Components/Dashboard/Comparison";
const { Content } = Layout;

const TheContentComp = () => {
  
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
     <Comparison/>
      </Content>   
    </>
  );
};

export default TheContentComp;
