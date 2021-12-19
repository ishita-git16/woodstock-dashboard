import React, {useEffect, useState} from "react";
import {Col, Layout, Row, Menu} from "antd";
import moment from "moment";
import TheContentComp from "./ContentComp";
import { Link, useLocation } from "react-router-dom";
const {Header, Footer, Sider, Content} = Layout;
const { SubMenu } = Menu;
const MainScreenComp = () => {
    const location = useLocation();
  return (
    <>
      <Layout
        // className="site-layout"
        style={{ height: "100vh", 
        // minWidth: "10vh" 
    }}
      >
           <Header
         
           >

           <Menu theme="dark" mode="horizontal"defaultSelectedKeys={["3"]} 
        //    selectedKeys={[location.pathname]}
        
           >
        <Menu.Item key="1">
          <Link to = "/ethereum">
          Ethereum
          </Link>
          </Menu.Item>
        <Menu.Item key="2">
        <Link to = "/solana">
        Solana
          </Link>
          </Menu.Item>
          <Menu.Item key="3">
        <Link to = "/comparison">
          Comparison
          </Link>
          </Menu.Item>
      </Menu>
           </Header>
           <Layout>             
          
        <TheContentComp />
        </Layout>
        
      </Layout>
    </>
  );
};

export default MainScreenComp;
