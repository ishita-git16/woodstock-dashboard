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
      "Price": 4.268,
      "Open": 1.514,
      "High": 4.781,
      "Low": 1.507,
      "Vol.": "-",
      "Change %": "181.90%"
    },
    {
      "Date": "Feb 21",
      "Price": 13.063,
      "Open": 4.268,
      "High": 20,
      "Low": 4.128,
      "Vol.": "-",
      "Change %": "206.05%"
    },
    {
      "Date": "Mar 21",
      "Price": 19.437,
      "Open": 13.063,
      "High": 24.4,
      "Low": 11.99,
      "Vol.": "-",
      "Change %": "48.80%"
    },
    {
      "Date": "Apr 21",
      "Price": 42.586,
      "Open": 19.437,
      "High": 48.36,
      "Low": 18.612,
      "Vol.": "-",
      "Change %": "119.09%"
    },
    {
      "Date": "May 21",
      "Price": 32.724,
      "Open": 23.7,
      "High": 36.311,
      "Low": 19.8,
      "Vol.": "-",
      "Change %": "-23.16%"
    },
    {
      "Date": "Jun 21",
      "Price": 35.536,
      "Open": 32.724,
      "High": 43.91,
      "Low": 20.472,
      "Vol.": "-",
      "Change %": "8.59%"
    },
    {
      "Date": "Jul 21",
      "Price": 36.709,
      "Open": 35.536,
      "High": 37.904,
      "Low": 22.23,
      "Vol.": "-",
      "Change %": "3.30%"
    },
    {
      "Date": "Aug 21",
      "Price": 108.32,
      "Open": 36.709,
      "High": 130.03,
      "Low": 32.2,
      "Vol.": "-",
      "Change %": "195.08%"
    },
    {
      "Date": "Sep 21",
      "Price": 141.36,
      "Open": 152.549,
      "High": 174.974,
      "Low": 116.135,
      "Vol.": "162.07M",
      "Change %": "30.50%"
    },
    {
      "Date": "Oct 21",
      "Price": 202.573,
      "Open": 141.366,
      "High": 218.939,
      "Low": 137.73,
      "Vol.": "162.22M",
      "Change %": "43.30%"
    },
    {
      "Date": "Nov 21",
      "Price": 208.423,
      "Open": 202.565,
      "High": 259.861,
      "Low": 181.285,
      "Vol.": "110.44M",
      "Change %": "2.89%"
    },
    {
      "Date": "Dec 21",
      "Price": 181.991,
      "Open": 208.486,
      "High": 243.069,
      "Low": 148.384,
      "Vol.": "73.54M",
      "Change %": "-12.68%"
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
  // console.log(keyValueData)

  return (
    <>
      {/* <DatePicker
    dateFormat="yyyy/MM/dd"
    selected={startDate}
    onChange={selectDateHandler} 
    minDate={today}
    todayButton={"Today"}/>
     */}
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
        <YAxis domain={[100, 200]} />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="Date" height={30} stroke="#8884d8" />
        {/* <Bar dataKey="pv" fill="#8884d8" /> */}
        <Bar dataKey="Price" fill="#051b2d"/>
      </BarChart>
    </>
  );
};

export default Bar1;
