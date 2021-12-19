import React, {useEffect, useState} from "react";
import {Col, Layout, Row, Menu} from "antd";
import moment from "moment";
import TheContentSol from "./TheContentSol";
import { Link, useLocation } from "react-router-dom";
const {Header, Footer, Sider, Content} = Layout;

const { SubMenu } = Menu;
const MainScreenSol = () => {
  const location = useLocation();
  return (
    <>
      <Layout
        // className="site-layout"
        style={{ height: "100vh", 
        minWidth: "80vh" 
    }}
      >
           <Header>

           <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} 
          //  selectedKeys={[location.pathname]}
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
          
        <TheContentSol />
        </Layout>
         
      </Layout>
    </>
  );
};

export default MainScreenSol;
