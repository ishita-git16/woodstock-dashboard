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
      "Date": "Jan-21",
      "Price": 1312.73,
      "Open": 735.87,
      "High": 1474.68,
      "Low": 715.15,
      "Vol.": "79.04M",
      "Change %": "78.37%",
      "FIELD8": ""
    },
    {
      "Date": "Feb-21",
      "Price": 1418.76,
      "Open": 1312.69,
      "High": 2040.79,
      "Low": 1272.09,
      "Vol.": "53.76M",
      "Change %": "8.08%",
      "FIELD8": ""
    },
    {
      "Date": "Mar-21",
      "Price": 1917.99,
      "Open": 1418.91,
      "High": 1945.4,
      "Low": 1411.55,
      "Vol.": "50.74M",
      "Change %": "35.19%",
      "FIELD8": ""
    },
    {
      "Date": "Apr-21",
      "Price": 2772.78,
      "Open": 1918.82,
      "High": 2797.61,
      "Low": 1897.38,
      "Vol.": "61.47M",
      "Change %": "44.57%",
      "FIELD8": ""
    },
    {
      "Date": "May-21",
      "Price": 2708.47,
      "Open": 2772.27,
      "High": 4366.1,
      "Low": 1739.91,
      "Vol.": "81.40M",
      "Change %": "-2.32%",
      "FIELD8": ""
    },
    {
      "Date": "Jun-21",
      "Price": 2273.84,
      "Open": 2707.94,
      "High": 2889.19,
      "Low": 1707.24,
      "Vol.": "51.29M",
      "Change %": "-16.05%",
      "FIELD8": ""
    },
    {
      "Date": "Jul-21",
      "Price": 2532.19,
      "Open": 2274.5,
      "High": 2551.68,
      "Low": 1720.7,
      "Vol.": "33.53M",
      "Change %": "11.36%",
      "FIELD8": ""
    },
    {
      "Date": "Aug-21",
      "Price": 3430.74,
      "Open": 2530.94,
      "High": 3467.42,
      "Low": 2445.49,
      "Vol.": "26.43M",
      "Change %": "35.49%",
      "FIELD8": ""
    },
    {
      "Date": "Sep-21",
      "Price": 3000.59,
      "Open": 3429.65,
      "High": 4024.89,
      "Low": 2659.71,
      "Vol.": "30.69M",
      "Change %": "-12.54%",
      "FIELD8": ""
    },
    {
      "Date": "Oct-21",
      "Price": 4287.56,
      "Open": 2999.86,
      "High": 4458.3,
      "Low": 2972.75,
      "Vol.": "21.57M",
      "Change %": "42.89%",
      "FIELD8": ""
    },
    {
      "Date": "Nov-21",
      "Price": 4628.9,
      "Open": 4287.41,
      "High": 4864.06,
      "Low": 3917.43,
      "Vol.": "17.12M",
      "Change %": "7.96%",
      "FIELD8": ""
    },
    {
      "Date": "Dec-21",
      "Price": 3886.97,
      "Open": 4628.72,
      "High": 4778.14,
      "Low": 3533.02,
      "Vol.": "13.11M",
      "Change %": "-16.03%",
      "FIELD8": ""
    }
   ]
  const date_ = moment(new Date()).format("YYYY-MM-DD");
  const dates = convert(date_);
  // const [data, setData] = useState([]);
  const [newdata, setNewdata] = useState([]);
  // const [rangeStart, setRangeStart] = React.useState(new Date)
  // const defaultEndDate = new Date()
  // defaultEndDate.setDate(defaultEndDate.getDate() + 7)
  // const [rangeEnd, setRangeEnd] = React.useState(defaultEndDate)
  // const today = new Date()

  // useEffect(() => {
  //   axios({
  //     method: "POST",
  //     url: `/getdevicedata/zone`,
  //     data: {
  //       panel_no: "000002",
  //       device_code: "MOD02",
  //       measurement: "energy",
  //       zone: "KWH",
  //       start_time: `${dates}T00:00:00+05:30`,
  //       end_time: `${dates}T23:59:59+05:30`,
  //       // aggregate: "difference",
  //       // group_by: "15m"
  //       // group_by: localStorage.getItem('tt')
  //     },
  //   })
  //     .then((res) => {
  //       console.log("Hello");
  //       console.log(res);
  //       const a = [];
  //       console.log(res.data.results[0].series[0].values);
  //       res.data.results[0].series[0].values.map((kdata) => {
  //         a.push(kdata);
  //       });
  //       setNewdata(a);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // const selectDateHandler = (d) => {
  //   setDate(d)
  // }

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
        <YAxis domain={[1000, 5000]} />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="Date" height={30} stroke="#8884d8" />
        {/* <Bar dataKey="pv" fill="#8884d8" /> */}
        <Bar dataKey="Price" fill="#051b2d" />
      </BarChart>
    </>
  );
};

export default Bar1;
