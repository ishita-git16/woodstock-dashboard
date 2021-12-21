import React, { useState, useEffect } from "react";
import moment from "moment";
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import axios from "axios";
import { useSelector } from "react-redux";
import { Tag, TreeSelect, Space, Select, DatePicker, Row, Col } from "antd";
import { Card, Statistic } from "antd";
import Bar1 from "./Eth_charts/Bar";
import Chart from "./Eth_charts/Chart";
import Chart2 from "./Eth_charts/Chart2";

import { Button, message, Divider, Popover } from "antd";
import { margin } from "@mui/system";
// import Speedometer from "./dials/Speedometer";
import useForceUpdate from "use-force-update";
// import InputMapping from "./InputMapping";

const Ethereum = () => {
  const forceUpdate = useForceUpdate();
  const [DeviceInputTree, setDeviceInputTree] = useState([]);
  const date_ = moment(new Date()).format("YYYY-MM-DD");
  const [currentSelectedTag, setCurrentSelectedTag] = useState(undefined);
  const [initialSelectedInputs, setinitialSelectedInputs] = useState([]);
  const dates = convert(date_);
  const [startDate, setStartDate] = useState(date_);
  const [endDate, setEndDate] = useState(date_);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [Sitetreedata, setSitetreedata] = useState([]);
 
  const [subsiteid, setSubSiteId] = useState();
  const OrgSelection = useSelector((state) => state.OrgSelectorReducer);
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const [newData, setNewdata] = useState();
  const [dropd, setDropd] = useState(localStorage.getItem('tt'));
  
  const [voltage1data, setVoltage1data] = useState([]);
  const [voltage2data, setVoltage2data] = useState([]);
  const [voltage3data, setVoltage3data] = useState([]);
  const [voltageData, setVoltagedata] = useState([]);
  const [currentData, setCurrentdata] = useState([]);
  const [pfdata, setPFdata] = useState([]);
  const [btc, setBtc] = useState([]);
  const [eth, setEth] = useState([]);
 

  useEffect(() => {
    const timer = setInterval(() => {
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
    }, 1000)
    return () => clearInterval(timer);
  }, []);




  
  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  return (
    <>

      <Row gutter={[95]}>
        <Space>
          <Col>
            <Card
              title={
                <>
              <Space>
                Ethereum On Chain Metrics
              
                   
                 
               
                <Tag color="processing">  Last Updated at  :{moment.unix(btc.last_updated_at).format('DD:MM:YYYY HH:MM:SS')}</Tag>
                </Space> 
             

                </>
              }
              bordered={false}
              style={{ width: 1300, marginTop: "20px" }}
            >
              <Space>
              <Card>
                
                <Statistic
                  title="Max allowed number of Transactions per second"
                  value={45}
                  // precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  // prefix={<ArrowUpOutlined />}
                  // suffix="$"
                />
                 
              </Card>
              <Card>
                
          <Statistic
            title=" Value"
            value={ `${btc.usd}`}
            precision={0}
            valueStyle={{ color: '#3f8600' }}
            // prefix={<ArrowUpOutlined />}
            suffix="$"
          />
           
        </Card>
             <Card>
             <Statistic
            title=" USD Market Cap"
            value={ `${btc.usd_market_cap}`}
            precision={0}
            valueStyle={{ color: '#3f8600' }}
            // prefix={<ArrowUpOutlined />}
            suffix="$"
          />
             </Card>
             <Card>
             <Statistic
            title="USD 24h Volume"
            value={ `${btc.usd_24h_vol}`}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            // prefix={<ArrowUpOutlined />}
            suffix="$"
          />
             </Card>
             <Card>
             <Statistic
            title= "USD 24h Change"
            value={ `${btc.usd_24h_change}`}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="$"
          />
             </Card>
              <br/>
              
             
              </Space>
              
            </Card>
          </Col>

         
        </Space>
      </Row>
      <Row gutter={[95]}>
        <Space>
          <div className="site-card-border-less-wrapper">
            <Card
              title="Ethereum Daily Price Variation"
              bordered={false}
              style={{ width: 600, marginTop: "20px", marginLeft: "46px" }}
            >
              <Chart props={dropd} />
            </Card>
          </div>
          <Card
            title="Ethereum Daily Volume Variation"
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
            title="Ethereum Monthly Price Variation (2021)"
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
export default Ethereum;
