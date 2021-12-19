import React, { useState, useEffect } from "react";
import moment from "moment";
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import axios from "axios";
import { useSelector } from "react-redux";
import { Tag, TreeSelect, Space, Select, DatePicker, Row, Col } from "antd";
import { Card, Statistic } from "antd";
import Bar1 from "./comparison/Bar";
import Chart from "./comparison/Chart";
import Chart2 from "./comparison/Chart2";

import { Button, message, Divider, Popover } from "antd";
import { margin } from "@mui/system";
// import Speedometer from "./dials/Speedometer";
import useForceUpdate from "use-force-update";
// import InputMapping from "./InputMapping";

const Comparison = () => {
  const forceUpdate = useForceUpdate();
  const [DeviceInputTree, setDeviceInputTree] = useState([]);
  const date_ = moment(new Date()).format("YYYY-MM-DD");
  
  const [dropd, setDropd] = useState(localStorage.getItem('tt'));

  const [pfdata, setPFdata] = useState([]);
  const [btc, setBtc] = useState([]);
  const [eth, setEth] = useState([]);
  
  const onFilterSearch = (e) => {
    console.log(e);
  };


  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }


  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.coingecko.com/api/v3/simple/price`,
      params: {
        ids : "ethereum",
        vs_currencies: "usd",
        include_market_cap: "true",
        include_24hr_vol: "true",
        include_24hr_change: "true",
        include_last_updated_at: "true"
      }
    })
      .then((res) => {
        setBtc(res.data["ethereum"]);
        console.log(res.data["ethereum"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Space>
    
        
      </Space>
     
      <Row gutter={[95]}>
        <Space>
          <div className="site-card-border-less-wrapper">
            <Card
              title="Eth-Sol Daily Price Comparison"
              bordered={false}
              style={{ width: 600, marginTop: "20px", marginLeft: "46px" }}
            >
              <Chart props={dropd} />
            </Card>
          </div>
          <Card
            title="Eth-Sol Daily Volume Comparison"
            bordered={false}
            style={{ width:600, marginTop: "20px", marginLeft: "16px" }}
          >
           <Chart2 props={dropd} />
          </Card>
        </Space>
      </Row>
      <Row gutter={[95]}>
        <Space>
          <Card
            title="Eth-Sol Monthly Price Comparison (2021)"
            bordered={false}
            style={{ width: 1200, marginTop: "20px", marginLeft: "46px" }}
          >
            <Bar1 props={dropd} />
          </Card>
        </Space>
      </Row>
      
    </>
  );
};
export default Comparison;
