import React, { useState, useEffect } from "react";
import moment from "moment";
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import axios from "axios";
import { useSelector } from "react-redux";
import { Tag, TreeSelect, Space, Select, DatePicker, Row, Col } from "antd";
import { Card, Statistic } from "antd";
import Bar1 from "./Sol_charts/Bar";
import Chart from "./Sol_charts/Chart";
import Chart2 from "./Sol_charts/Chart2";

import { Button, message, Divider, Popover } from "antd";
import { margin } from "@mui/system";
// import Speedometer from "./dials/Speedometer";
import useForceUpdate from "use-force-update";
// import InputMapping from "./InputMapping";

const Solana = () => {
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
  const [value, setValue] = useState(undefined);
  const [currsite, setCurrSite] = useState([]);
  const [tagName, setTagName] = useState([]);
  const [zone, setZone] = useState([]);
  const [measurement, setMeasurement] = useState([]);
  const [singleEnergy, setSingleEnergy] = useState();
  const [tagId, setTagId] = useState();
  const [siteid, setSiteId] = useState();
  const [subsiteid, setSubSiteId] = useState();
  const OrgSelection = useSelector((state) => state.OrgSelectorReducer);
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const [newData, setNewdata] = useState();
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
          <Col>
            <Card
              title="Solana On Chain Metrics"
              bordered={false}
              style={{ width: 1300, marginTop: "20px" }}
            >
              <Space>
              <Card>
                
                <Statistic
                  title="Allowed number of Transactions per second"
                  value={50000}
                  // precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  // prefix={<ArrowUpOutlined />}
                  suffix=""
                />
                 
              </Card>
              <Card>
              
          <Statistic
            title=" Value"
            value={ 181.69
            }
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            // prefix={<ArrowUpOutlined />}
            suffix="$"
          />
           
        </Card>
             <Card>
             <Statistic
            title=" USD Market Cap"
            value={ 55848291339}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            // prefix={<ArrowUpOutlined />}
            suffix="$"
          />
             </Card>
             <Card>
             <Statistic
            title="USD 24h Volume"
            value={ 1583507584}
            // precision={2}
            valueStyle={{ color: '#3f8600' }}
            // prefix={<ArrowUpOutlined />}
            suffix="$"
          />
             </Card>
             <Card>
             <Statistic
            title= "USD 24h Change"
            value={ 3.8}
            // precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
             </Card>
              <br/>
              
             
              {/* Last Updated at 
              <Tag color="processing"> {moment.unix(btc.last_updated_at).format('DD:MM:YYYY HH:MM:SS')}</Tag> */}
             
             
              {/* {voltage3data} */}
              </Space>
              
            </Card>
          </Col>

         
        </Space>
      </Row>
      <Row gutter={[95]}>
        <Space>
          <div className="site-card-border-less-wrapper">
            <Card
              title="Solana Daily Price Variation"
              bordered={false}
              style={{ width: 600, marginTop: "20px", marginLeft: "46px" }}
            >
              <Chart props={dropd} />
            </Card>
          </div>
          <Card
            title="Solana Daily Volume Variation"
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
            title="Solana Monthly Price Variation (2021)"
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
export default Solana;
