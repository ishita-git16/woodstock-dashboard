import React, {useEffect, useState} from "react";
import {Col, Layout, Row, Menu} from "antd";
import moment from "moment";
import TheContent from "./Content";
import { Link, useLocation } from "react-router-dom";
const {Header, Footer, Sider, Content} = Layout;

const { SubMenu } = Menu;
// import PropTypes from 'prop-types';
const MainScreen = () => {
  
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

           <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} 
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
           
        <TheContent />
        </Layout>
            
      </Layout>
    </>
  );
};

export default MainScreen;
