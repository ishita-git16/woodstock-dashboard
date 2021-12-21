// import "./styles.css";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { Tag, Divider } from 'antd';
import axios from "axios";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import "react-datepicker/dist/react-datepicker.css";

const Bar1 = (props) => {
  // var min1 = Infinity ;
  // var max1 = 0;
  const data = [
    {
      "Date": "Jan 21",
      "Sol_Price": 4.268,
      "Eth_Price": 3886.97
    },
    {
      "Date": "Feb 21",
      "Sol_Price": 13.063,
      "Eth_Price": 4628.9
    },
    {
      "Date": "Mar 21",
      "Sol_Price": 19.437,
      "Eth_Price": 4287.56
    },
    {
      "Date": "Apr 21",
      "Sol_Price": 42.586,
      "Eth_Price": 3000.59
    },
    {
      "Date": "May 21",
      "Sol_Price": 32.724,
      "Eth_Price": 3430.74
    },
    {
      "Date": "Jun 21",
      "Sol_Price": 35.536,
      "Eth_Price": 2532.19
    },
    {
      "Date": "Jul 21",
      "Sol_Price": 36.709,
      "Eth_Price": 2273.84
    },
    {
      "Date": "Aug 21",
      "Sol_Price": 108.32,
      "Eth_Price": 2708.47
    },
    {
      "Date": "Sep 21",
      "Sol_Price": 141.36,
      "Eth_Price": 2772.78
    },
    {
      "Date": "Oct 21",
      "Sol_Price": 202.573,
      "Eth_Price": 1917.99
    },
    {
      "Date": "Nov 21",
      "Sol_Price": 208.423,
      "Eth_Price": 1418.76
    },
    {
      "Date": "Dec 21",
      "Sol_Price": 181.991,
      "Eth_Price": 1312.73
    }
   ]
  const date_ = moment(new Date()).format("YYYY-MM-DD");
  const dates = convert(date_);
  // const [data, setData] = useState([]);
  const [newdata, setNewdata] = useState([]);
 

  const keyToTime = (key) => {
    var time1 = moment(key).format(" h:mm");
    var date = moment(key.substring(0, 10), ["YYYY-MM-DD"]).format("DD MMM");
    return [time1, date];
  };

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  const keyValueData = newdata.map((data) => {
    return {
      time: `${keyToTime(data[0])}`,
      kwh: data[1],
    };
  });
 

  return (
    <>
     
      <BarChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis domain={[1000, 5000]} />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="Date" height={30} stroke="#8884d8" />
        {/* <Bar dataKey="pv" fill="#8884d8" /> */}
        <Bar dataKey="Eth_Price" fill="#051b2d" />
        <Bar dataKey="Sol_Price" fill="red" />
      </BarChart>
    </>
  );
};

export default Bar1;
