import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { Tag, Divider } from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  ResponsiveContainer,
} from "recharts";
//Data for getting power consumption
const Chart2 = (props) => {
  
  const [ethData, setEthData] = useState([]);
  
  const data = [
    {
      "Date": "Jan 01, 2021",
      "Sol_Price": 1.84,
      "Eth_Price": 729.12,
      "Sol_Vol": "-",
      "Eth_Vol": 1.64,
      "Change %": "21.34%"
    },
    {
      "Date": "Jan 02, 2021",
      "Sol_Price": 1.8,
      "Eth_Price": 774.5,
      "Sol_Vol": "-",
      "Eth_Vol": 2.25,
      "Change %": "-2.22%"
    },
    {
      "Date": "Jan 03, 2021",
      "Sol_Price": 2.16,
      "Eth_Price": 974.97,
      "Sol_Vol": "-",
      "Eth_Vol": 4.02,
      "Change %": "20.27%"
    },
    {
      "Date": "Jan 04, 2021",
      "Sol_Price": 2.49,
      "Eth_Price": 1042.4,
      "Sol_Vol": "-",
      "Eth_Vol": 5.19,
      "Change %": "15.18%"
    },
    {
      "Date": "Jan 05, 2021",
      "Sol_Price": 2.16,
      "Eth_Price": 1099.52,
      "Sol_Vol": "-",
      "Eth_Vol": 3.25,
      "Change %": "-13.39%"
    },
    {
      "Date": "Jan 06, 2021",
      "Sol_Price": 1.93,
      "Eth_Price": 1207.77,
      "Sol_Vol": "-",
      "Eth_Vol": 3.75,
      "Change %": "-10.29%"
    },
    {
      "Date": "Jan 07, 2021",
      "Sol_Price": 2.36,
      "Eth_Price": 1224.35,
      "Sol_Vol": "-",
      "Eth_Vol": 2.71,
      "Change %": "22.00%"
    },
    {
      "Date": "Jan 08, 2021",
      "Sol_Price": 3.89,
      "Eth_Price": 1215.73,
      "Sol_Vol": "-",
      "Eth_Vol": 2.71,
      "Change %": "64.83%"
    },
    {
      "Date": "Jan 09, 2021",
      "Sol_Price": 3,
      "Eth_Price": 1275.58,
      "Sol_Vol": "-",
      "Eth_Vol": 1.99,
      "Change %": "-22.85%"
    },
    {
      "Date": "Jan 10, 2021",
      "Sol_Price": 3.05,
      "Eth_Price": 1256.04,
      "Sol_Vol": "-",
      "Eth_Vol": 2.65,
      "Change %": "1.76%"
    },
    {
      "Date": "Jan 11, 2021",
      "Sol_Price": 3.11,
      "Eth_Price": 1091.47,
      "Sol_Vol": "-",
      "Eth_Vol": 4.19,
      "Change %": "1.77%"
    },
    {
      "Date": "Jan 12, 2021",
      "Sol_Price": 3.63,
      "Eth_Price": 1050.19,
      "Sol_Vol": "-",
      "Eth_Vol": 3.09,
      "Change %": "16.88%"
    },
    {
      "Date": "Jan 13, 2021",
      "Sol_Price": 3.52,
      "Eth_Price": 1128.46,
      "Sol_Vol": "-",
      "Eth_Vol": 2.25,
      "Change %": "-3.14%"
    },
    {
      "Date": "Jan 14, 2021",
      "Sol_Price": 3.28,
      "Eth_Price": 1226.17,
      "Sol_Vol": "-",
      "Eth_Vol": 1.55,
      "Change %": "-6.63%"
    },
    {
      "Date": "Jan 15, 2021",
      "Sol_Price": 3.3,
      "Eth_Price": 1171.68,
      "Sol_Vol": "-",
      "Eth_Vol": 2.85,
      "Change %": "0.48%"
    },
    {
      "Date": "Jan 16, 2021",
      "Sol_Price": 3.45,
      "Eth_Price": 1228.27,
      "Sol_Vol": "-",
      "Eth_Vol": 2.29,
      "Change %": "4.50%"
    },
    {
      "Date": "Jan 17, 2021",
      "Sol_Price": 3.83,
      "Eth_Price": 1232.64,
      "Sol_Vol": "-",
      "Eth_Vol": 2.15,
      "Change %": "10.99%"
    },
    {
      "Date": "Jan 18, 2021",
      "Sol_Price": 3.78,
      "Eth_Price": 1258.06,
      "Sol_Vol": "-",
      "Eth_Vol": 1.73,
      "Change %": "-1.13%"
    },
    {
      "Date": "Jan 19, 2021",
      "Sol_Price": 3.65,
      "Eth_Price": 1372,
      "Sol_Vol": "-",
      "Eth_Vol": 2.27,
      "Change %": "-3.62%"
    },
    {
      "Date": "Jan 20, 2021",
      "Sol_Price": 3.72,
      "Eth_Price": 1377.53,
      "Sol_Vol": "-",
      "Eth_Vol": 3.05,
      "Change %": "2.08%"
    },
    {
      "Date": "Jan 21, 2021",
      "Sol_Price": 2.99,
      "Eth_Price": 1117.33,
      "Sol_Vol": "-",
      "Eth_Vol": 2.76,
      "Change %": "-19.83%"
    },
    {
      "Date": "Jan 22, 2021",
      "Sol_Price": 3.34,
      "Eth_Price": 1234.58,
      "Sol_Vol": "-",
      "Eth_Vol": 2.94,
      "Change %": "11.87%"
    },
    {
      "Date": "Jan 23, 2021",
      "Sol_Price": 3.5,
      "Eth_Price": 1233.4,
      "Sol_Vol": "-",
      "Eth_Vol": 1.46,
      "Change %": "4.85%"
    },
    {
      "Date": "Jan 24, 2021",
      "Sol_Price": 3.62,
      "Eth_Price": 1390.28,
      "Sol_Vol": "-",
      "Eth_Vol": 2.3,
      "Change %": "3.51%"
    },
    {
      "Date": "Jan 25, 2021",
      "Sol_Price": 3.72,
      "Eth_Price": 1317.9,
      "Sol_Vol": "-",
      "Eth_Vol": 2.77,
      "Change %": "2.64%"
    },
    {
      "Date": "Jan 26, 2021",
      "Sol_Price": 4.04,
      "Eth_Price": 1366.27,
      "Sol_Vol": "-",
      "Eth_Vol": 2.56,
      "Change %": "8.53%"
    },
    {
      "Date": "Jan 27, 2021",
      "Sol_Price": 3.69,
      "Eth_Price": 1247.62,
      "Sol_Vol": "-",
      "Eth_Vol": 2.9,
      "Change %": "-8.64%"
    },
    {
      "Date": "Jan 28, 2021",
      "Sol_Price": 3.82,
      "Eth_Price": 1328.47,
      "Sol_Vol": "-",
      "Eth_Vol": 814.31,
      "Change %": "3.54%"
    },
    {
      "Date": "Jan 29, 2021",
      "Sol_Price": 3.84,
      "Eth_Price": 1379.3,
      "Sol_Vol": "-",
      "Eth_Vol": 3.33,
      "Change %": "0.60%"
    },
    {
      "Date": "Jan 30, 2021",
      "Sol_Price": 4.23,
      "Eth_Price": 1376.96,
      "Sol_Vol": "-",
      "Eth_Vol": 1.59,
      "Change %": "10.15%"
    },
    {
      "Date": "Jan 31, 2021",
      "Sol_Price": 4.27,
      "Eth_Price": 1312.73,
      "Sol_Vol": "-",
      "Eth_Vol": 1.54,
      "Change %": "0.86%"
    },
    {
      "Date": "Feb 01, 2021",
      "Sol_Price": 4.62,
      "Eth_Price": 1373.4,
      "Sol_Vol": "-",
      "Eth_Vol": 1.65,
      "Change %": "8.29%"
    },
    {
      "Date": "Feb 02, 2021",
      "Sol_Price": 5.26,
      "Eth_Price": 1511.36,
      "Sol_Vol": "-",
      "Eth_Vol": 2.73,
      "Change %": "13.75%"
    },
    {
      "Date": "Feb 03, 2021",
      "Sol_Price": 5.72,
      "Eth_Price": 1664.34,
      "Sol_Vol": "-",
      "Eth_Vol": 2.27,
      "Change %": "8.77%"
    },
    {
      "Date": "Feb 04, 2021",
      "Sol_Price": 6.42,
      "Eth_Price": 1594,
      "Sol_Vol": "-",
      "Eth_Vol": 2.34,
      "Change %": "12.26%"
    },
    {
      "Date": "Feb 05, 2021",
      "Sol_Price": 6.5,
      "Eth_Price": 1719.2,
      "Sol_Vol": "-",
      "Eth_Vol": 1.8,
      "Change %": "1.25%"
    },
    {
      "Date": "Feb 06, 2021",
      "Sol_Price": 6.12,
      "Eth_Price": 1676.63,
      "Sol_Vol": "-",
      "Eth_Vol": 1.78,
      "Change %": "-5.85%"
    },
    {
      "Date": "Feb 07, 2021",
      "Sol_Price": 6.7,
      "Eth_Price": 1612.99,
      "Sol_Vol": "-",
      "Eth_Vol": 1.94,
      "Change %": "9.54%"
    },
    {
      "Date": "Feb 08, 2021",
      "Sol_Price": 7.88,
      "Eth_Price": 1750.18,
      "Sol_Vol": "-",
      "Eth_Vol": 2.17,
      "Change %": "17.53%"
    },
    {
      "Date": "Feb 09, 2021",
      "Sol_Price": 7.84,
      "Eth_Price": 1770.63,
      "Sol_Vol": "-",
      "Eth_Vol": 1.94,
      "Change %": "-0.54%"
    },
    {
      "Date": "Feb 10, 2021",
      "Sol_Price": 8.95,
      "Eth_Price": 1742.09,
      "Sol_Vol": "-",
      "Eth_Vol": 2.01,
      "Change %": "14.21%"
    },
    {
      "Date": "Feb 11, 2021",
      "Sol_Price": 9.19,
      "Eth_Price": 1786.35,
      "Sol_Vol": "-",
      "Eth_Vol": 1.56,
      "Change %": "2.63%"
    },
    {
      "Date": "Feb 12, 2021",
      "Sol_Price": 9.21,
      "Eth_Price": 1841.02,
      "Sol_Vol": "-",
      "Eth_Vol": 1.75,
      "Change %": "0.27%"
    },
    {
      "Date": "Feb 13, 2021",
      "Sol_Price": 8.67,
      "Eth_Price": 1815.49,
      "Sol_Vol": "-",
      "Eth_Vol": 1.44,
      "Change %": "-5.87%"
    },
    {
      "Date": "Feb 14, 2021",
      "Sol_Price": 8.74,
      "Eth_Price": 1801.78,
      "Sol_Vol": "-",
      "Eth_Vol": 1.43,
      "Change %": "0.76%"
    },
    {
      "Date": "Feb 15, 2021",
      "Sol_Price": 8.85,
      "Eth_Price": 1778.82,
      "Sol_Vol": "-",
      "Eth_Vol": 1.94,
      "Change %": "1.27%"
    },
    {
      "Date": "Feb 16, 2021",
      "Sol_Price": 8.3,
      "Eth_Price": 1781.69,
      "Sol_Vol": "-",
      "Eth_Vol": 1.48,
      "Change %": "-6.17%"
    },
    {
      "Date": "Feb 17, 2021",
      "Sol_Price": 8.24,
      "Eth_Price": 1847.95,
      "Sol_Vol": "-",
      "Eth_Vol": 1.69,
      "Change %": "-0.77%"
    },
    {
      "Date": "Feb 18, 2021",
      "Sol_Price": 8.98,
      "Eth_Price": 1934.16,
      "Sol_Vol": "-",
      "Eth_Vol": 881.87,
      "Change %": "9.09%"
    },
    {
      "Date": "Feb 19, 2021",
      "Sol_Price": 11.44,
      "Eth_Price": 1955.59,
      "Sol_Vol": "-",
      "Eth_Vol": 1.78,
      "Change %": "27.38%"
    },
    {
      "Date": "Feb 20, 2021",
      "Sol_Price": 10.01,
      "Eth_Price": 1913.88,
      "Sol_Vol": "-",
      "Eth_Vol": 2.29,
      "Change %": "-12.57%"
    },
    {
      "Date": "Feb 21, 2021",
      "Sol_Price": 11.07,
      "Eth_Price": 1933.45,
      "Sol_Vol": "-",
      "Eth_Vol": 1.47,
      "Change %": "10.68%"
    },
    {
      "Date": "Feb 22, 2021",
      "Sol_Price": 14.51,
      "Eth_Price": 1777.28,
      "Sol_Vol": "-",
      "Eth_Vol": 2.68,
      "Change %": "31.05%"
    },
    {
      "Date": "Feb 23, 2021",
      "Sol_Price": 15.09,
      "Eth_Price": 1578.11,
      "Sol_Vol": "-",
      "Eth_Vol": 3.6,
      "Change %": "3.97%"
    },
    {
      "Date": "Feb 24, 2021",
      "Sol_Price": 17.17,
      "Eth_Price": 1623.71,
      "Sol_Vol": "-",
      "Eth_Vol": 2.19,
      "Change %": "13.77%"
    },
    {
      "Date": "Feb 25, 2021",
      "Sol_Price": 14,
      "Eth_Price": 1476.15,
      "Sol_Vol": "-",
      "Eth_Vol": 1.75,
      "Change %": "-18.45%"
    },
    {
      "Date": "Feb 26, 2021",
      "Sol_Price": 13.58,
      "Eth_Price": 1445.44,
      "Sol_Vol": "-",
      "Eth_Vol": 2.13,
      "Change %": "-3.03%"
    },
    {
      "Date": "Feb 27, 2021",
      "Sol_Price": 13.22,
      "Eth_Price": 1458.93,
      "Sol_Vol": "-",
      "Eth_Vol": 1.56,
      "Change %": "-2.66%"
    },
    {
      "Date": "Feb 28, 2021",
      "Sol_Price": 13.06,
      "Eth_Price": 1418.76,
      "Sol_Vol": "-",
      "Eth_Vol": 2.07,
      "Change %": "-1.15%"
    },
    {
      "Date": "Mar 01, 2021",
      "Sol_Price": 14.98,
      "Eth_Price": 1570.03,
      "Sol_Vol": "-",
      "Eth_Vol": 1.92,
      "Change %": "14.70%"
    },
    {
      "Date": "Mar 02, 2021",
      "Sol_Price": 13.97,
      "Eth_Price": 1488.62,
      "Sol_Vol": "-",
      "Eth_Vol": 1.74,
      "Change %": "-6.73%"
    },
    {
      "Date": "Mar 03, 2021",
      "Sol_Price": 14.13,
      "Eth_Price": 1571.05,
      "Sol_Vol": "-",
      "Eth_Vol": 1.17,
      "Change %": "1.12%"
    },
    {
      "Date": "Mar 04, 2021",
      "Sol_Price": 13.11,
      "Eth_Price": 1538.61,
      "Sol_Vol": "-",
      "Eth_Vol": 1.7,
      "Change %": "-7.21%"
    },
    {
      "Date": "Mar 05, 2021",
      "Sol_Price": 12.57,
      "Eth_Price": 1530.29,
      "Sol_Vol": "-",
      "Eth_Vol": 1.67,
      "Change %": "-4.12%"
    },
    {
      "Date": "Mar 06, 2021",
      "Sol_Price": 12.92,
      "Eth_Price": 1649.19,
      "Sol_Vol": "-",
      "Eth_Vol": 2.07,
      "Change %": "2.80%"
    },
    {
      "Date": "Mar 07, 2021",
      "Sol_Price": 13.79,
      "Eth_Price": 1728.1,
      "Sol_Vol": "-",
      "Eth_Vol": 1.69,
      "Change %": "6.71%"
    },
    {
      "Date": "Mar 08, 2021",
      "Sol_Price": 13.6,
      "Eth_Price": 1831.49,
      "Sol_Vol": "-",
      "Eth_Vol": 1.97,
      "Change %": "-1.40%"
    },
    {
      "Date": "Mar 09, 2021",
      "Sol_Price": 14.86,
      "Eth_Price": 1869.1,
      "Sol_Vol": "-",
      "Eth_Vol": 1.58,
      "Change %": "9.29%"
    },
    {
      "Date": "Mar 10, 2021",
      "Sol_Price": 14.24,
      "Eth_Price": 1794.14,
      "Sol_Vol": "-",
      "Eth_Vol": 1.66,
      "Change %": "-4.21%"
    },
    {
      "Date": "Mar 11, 2021",
      "Sol_Price": 15.99,
      "Eth_Price": 1825.79,
      "Sol_Vol": "-",
      "Eth_Vol": 1.58,
      "Change %": "12.31%"
    },
    {
      "Date": "Mar 12, 2021",
      "Sol_Price": 14.55,
      "Eth_Price": 1766.9,
      "Sol_Vol": "-",
      "Eth_Vol": 1.52,
      "Change %": "-8.98%"
    },
    {
      "Date": "Mar 13, 2021",
      "Sol_Price": 15.37,
      "Eth_Price": 1921.13,
      "Sol_Vol": "-",
      "Eth_Vol": 1.79,
      "Change %": "5.62%"
    },
    {
      "Date": "Mar 14, 2021",
      "Sol_Price": 14.56,
      "Eth_Price": 1849.06,
      "Sol_Vol": "-",
      "Eth_Vol": 671.56,
      "Change %": "-5.31%"
    },
    {
      "Date": "Mar 15, 2021",
      "Sol_Price": 14.28,
      "Eth_Price": 1792.38,
      "Sol_Vol": "-",
      "Eth_Vol": 1.7,
      "Change %": "-1.89%"
    },
    {
      "Date": "Mar 16, 2021",
      "Sol_Price": 13.81,
      "Eth_Price": 1804.85,
      "Sol_Vol": "-",
      "Eth_Vol": 1.81,
      "Change %": "-3.33%"
    },
    {
      "Date": "Mar 17, 2021",
      "Sol_Price": 13.99,
      "Eth_Price": 1823.35,
      "Sol_Vol": "-",
      "Eth_Vol": 1.5,
      "Change %": "1.34%"
    },
    {
      "Date": "Mar 18, 2021",
      "Sol_Price": 14.33,
      "Eth_Price": 1776.08,
      "Sol_Vol": "-",
      "Eth_Vol": 1.53,
      "Change %": "2.41%"
    },
    {
      "Date": "Mar 19, 2021",
      "Sol_Price": 14.29,
      "Eth_Price": 1809.64,
      "Sol_Vol": "-",
      "Eth_Vol": 1.2,
      "Change %": "-0.28%"
    },
    {
      "Date": "Mar 20, 2021",
      "Sol_Price": 14.27,
      "Eth_Price": 1804.6,
      "Sol_Vol": "-",
      "Eth_Vol": 27.03,
      "Change %": "-0.12%"
    },
    {
      "Date": "Mar 21, 2021",
      "Sol_Price": 14.18,
      "Eth_Price": 1783.72,
      "Sol_Vol": "-",
      "Eth_Vol": 1.43,
      "Change %": "-0.63%"
    },
    {
      "Date": "Mar 22, 2021",
      "Sol_Price": 14.89,
      "Eth_Price": 1682.37,
      "Sol_Vol": "-",
      "Eth_Vol": 1.58,
      "Change %": "5.00%"
    },
    {
      "Date": "Mar 23, 2021",
      "Sol_Price": 14.19,
      "Eth_Price": 1667.9,
      "Sol_Vol": "-",
      "Eth_Vol": 1.46,
      "Change %": "-4.67%"
    },
    {
      "Date": "Mar 24, 2021",
      "Sol_Price": 13.63,
      "Eth_Price": 1582.38,
      "Sol_Vol": "-",
      "Eth_Vol": 1.88,
      "Change %": "-3.98%"
    },
    {
      "Date": "Mar 25, 2021",
      "Sol_Price": 12.99,
      "Eth_Price": 1586.54,
      "Sol_Vol": "-",
      "Eth_Vol": 1.54,
      "Change %": "-4.70%"
    },
    {
      "Date": "Mar 26, 2021",
      "Sol_Price": 14.75,
      "Eth_Price": 1698.6,
      "Sol_Vol": "-",
      "Eth_Vol": 1.64,
      "Change %": "13.56%"
    },
    {
      "Date": "Mar 27, 2021",
      "Sol_Price": 16.51,
      "Eth_Price": 1713.01,
      "Sol_Vol": "-",
      "Eth_Vol": 1.4,
      "Change %": "11.91%"
    },
    {
      "Date": "Mar 28, 2021",
      "Sol_Price": 18.22,
      "Eth_Price": 1686.8,
      "Sol_Vol": "-",
      "Eth_Vol": 1.31,
      "Change %": "10.38%"
    },
    {
      "Date": "Mar 29, 2021",
      "Sol_Price": 18.88,
      "Eth_Price": 1816.69,
      "Sol_Vol": "-",
      "Eth_Vol": 1.94,
      "Change %": "3.61%"
    },
    {
      "Date": "Mar 30, 2021",
      "Sol_Price": 19.16,
      "Eth_Price": 1841.01,
      "Sol_Vol": "-",
      "Eth_Vol": 3.03,
      "Change %": "1.47%"
    },
    {
      "Date": "Mar 31, 2021",
      "Sol_Price": 19.44,
      "Eth_Price": 1917.99,
      "Sol_Vol": "-",
      "Eth_Vol": 2.59,
      "Change %": "1.47%"
    },
    {
      "Date": "Apr 01, 2021",
      "Sol_Price": 19.07,
      "Eth_Price": 1967.96,
      "Sol_Vol": "-",
      "Eth_Vol": 2.08,
      "Change %": "-1.89%"
    },
    {
      "Date": "Apr 02, 2021",
      "Sol_Price": 19.75,
      "Eth_Price": 2134.55,
      "Sol_Vol": "-",
      "Eth_Vol": 2.47,
      "Change %": "3.56%"
    },
    {
      "Date": "Apr 03, 2021",
      "Sol_Price": 22.47,
      "Eth_Price": 2008.59,
      "Sol_Vol": "-",
      "Eth_Vol": 2.01,
      "Change %": "13.75%"
    },
    {
      "Date": "Apr 04, 2021",
      "Sol_Price": 23.88,
      "Eth_Price": 2075.94,
      "Sol_Vol": "-",
      "Eth_Vol": 1.59,
      "Change %": "6.28%"
    },
    {
      "Date": "Apr 05, 2021",
      "Sol_Price": 22.96,
      "Eth_Price": 2106.41,
      "Sol_Vol": "-",
      "Eth_Vol": 2.31,
      "Change %": "-3.85%"
    },
    {
      "Date": "Apr 06, 2021",
      "Sol_Price": 24.97,
      "Eth_Price": 2111.53,
      "Sol_Vol": "-",
      "Eth_Vol": 1.93,
      "Change %": "8.77%"
    },
    {
      "Date": "Apr 07, 2021",
      "Sol_Price": 26.48,
      "Eth_Price": 1961.46,
      "Sol_Vol": "-",
      "Eth_Vol": 2.3,
      "Change %": "6.04%"
    },
    {
      "Date": "Apr 08, 2021",
      "Sol_Price": 27.72,
      "Eth_Price": 2079.92,
      "Sol_Vol": "-",
      "Eth_Vol": 1.73,
      "Change %": "4.70%"
    },
    {
      "Date": "Apr 10, 2021",
      "Sol_Price": 26.79,
      "Eth_Price": 2066.93,
      "Sol_Vol": "-",
      "Eth_Vol": 2.47,
      "Change %": "-3.37%"
    },
    {
      "Date": "Apr 11, 2021",
      "Sol_Price": 27.81,
      "Eth_Price": 2133.79,
      "Sol_Vol": "-",
      "Eth_Vol": 2.09,
      "Change %": "3.81%"
    },
    {
      "Date": "Apr 12, 2021",
      "Sol_Price": 28.55,
      "Eth_Price": 2151.42,
      "Sol_Vol": "-",
      "Eth_Vol": 1.97,
      "Change %": "2.64%"
    },
    {
      "Date": "Apr 13, 2021",
      "Sol_Price": 27.75,
      "Eth_Price": 2137.81,
      "Sol_Vol": "-",
      "Eth_Vol": 2.16,
      "Change %": "-2.79%"
    },
    {
      "Date": "Apr 14, 2021",
      "Sol_Price": 26.47,
      "Eth_Price": 2299.93,
      "Sol_Vol": "-",
      "Eth_Vol": 2.38,
      "Change %": "-4.63%"
    },
    {
      "Date": "Apr 15, 2021",
      "Sol_Price": 27,
      "Eth_Price": 2431.56,
      "Sol_Vol": "-",
      "Eth_Vol": 2.11,
      "Change %": "2.03%"
    },
    {
      "Date": "Apr 16, 2021",
      "Sol_Price": 25.34,
      "Eth_Price": 2514.22,
      "Sol_Vol": "-",
      "Eth_Vol": 1.91,
      "Change %": "-6.15%"
    },
    {
      "Date": "Apr 17, 2021",
      "Sol_Price": 25.1,
      "Eth_Price": 2423.18,
      "Sol_Vol": "-",
      "Eth_Vol": 2.08,
      "Change %": "-0.97%"
    },
    {
      "Date": "Apr 18, 2021",
      "Sol_Price": 28.3,
      "Eth_Price": 2318.33,
      "Sol_Vol": "-",
      "Eth_Vol": 1.73,
      "Change %": "12.77%"
    },
    {
      "Date": "Apr 19, 2021",
      "Sol_Price": 28.8,
      "Eth_Price": 2237.17,
      "Sol_Vol": "-",
      "Eth_Vol": 2.76,
      "Change %": "1.77%"
    },
    {
      "Date": "Apr 20, 2021",
      "Sol_Price": 31.75,
      "Eth_Price": 2160.63,
      "Sol_Vol": "-",
      "Eth_Vol": 1.9,
      "Change %": "10.25%"
    },
    {
      "Date": "Apr 21, 2021",
      "Sol_Price": 32.54,
      "Eth_Price": 2332.14,
      "Sol_Vol": "-",
      "Eth_Vol": 1.86,
      "Change %": "2.47%"
    },
    {
      "Date": "Apr 22, 2021",
      "Sol_Price": 39.02,
      "Eth_Price": 2360.81,
      "Sol_Vol": "-",
      "Eth_Vol": 2.1,
      "Change %": "19.91%"
    },
    {
      "Date": "Apr 23, 2021",
      "Sol_Price": 36.01,
      "Eth_Price": 2401.1,
      "Sol_Vol": "-",
      "Eth_Vol": 3.17,
      "Change %": "-7.71%"
    },
    {
      "Date": "Apr 24, 2021",
      "Sol_Price": 40.85,
      "Eth_Price": 2367.31,
      "Sol_Vol": "-",
      "Eth_Vol": 3.46,
      "Change %": "13.45%"
    },
    {
      "Date": "Apr 25, 2021",
      "Sol_Price": 47.47,
      "Eth_Price": 2215.93,
      "Sol_Vol": "-",
      "Eth_Vol": 1.61,
      "Change %": "16.20%"
    },
    {
      "Date": "Apr 26, 2021",
      "Sol_Price": 44.5,
      "Eth_Price": 2316.48,
      "Sol_Vol": "-",
      "Eth_Vol": 1.02,
      "Change %": "-6.25%"
    },
    {
      "Date": "Apr 27, 2021",
      "Sol_Price": 43.25,
      "Eth_Price": 2533.12,
      "Sol_Vol": "-",
      "Eth_Vol": 1.79,
      "Change %": "-2.80%"
    },
    {
      "Date": "Apr 28, 2021",
      "Sol_Price": 44.97,
      "Eth_Price": 2665.24,
      "Sol_Vol": "-",
      "Eth_Vol": 1.45,
      "Change %": "3.97%"
    },
    {
      "Date": "Apr 29, 2021",
      "Sol_Price": 42.64,
      "Eth_Price": 2746.54,
      "Sol_Vol": "-",
      "Eth_Vol": 1.74,
      "Change %": "-5.19%"
    },
    {
      "Date": "Apr 30, 2021",
      "Sol_Price": 42.59,
      "Eth_Price": 2757.36,
      "Sol_Vol": "-",
      "Eth_Vol": 1.65,
      "Change %": "-0.12%"
    },
    {
      "Date": "May 23, 2021",
      "Sol_Price": 24.61,
      "Eth_Price": 2772.78,
      "Sol_Vol": "-",
      "Eth_Vol": 1.52,
      "Change %": "-42.21%"
    },
    {
      "Date": "May 24, 2021",
      "Sol_Price": 30.64,
      "Eth_Price": 2944.66,
      "Sol_Vol": "-",
      "Eth_Vol": 1.51,
      "Change %": "24.48%"
    },
    {
      "Date": "May 25, 2021",
      "Sol_Price": 29.94,
      "Eth_Price": 2950.33,
      "Sol_Vol": "-",
      "Eth_Vol": 1.3,
      "Change %": "-2.26%"
    },
    {
      "Date": "May 26, 2021",
      "Sol_Price": 35.5,
      "Eth_Price": 3429.37,
      "Sol_Vol": "-",
      "Eth_Vol": 2.32,
      "Change %": "18.55%"
    },
    {
      "Date": "May 27, 2021",
      "Sol_Price": 33.52,
      "Eth_Price": 3286.71,
      "Sol_Vol": "-",
      "Eth_Vol": 2.74,
      "Change %": "-5.59%"
    },
    {
      "Date": "May 28, 2021",
      "Sol_Price": 29.09,
      "Eth_Price": 3522.76,
      "Sol_Vol": "-",
      "Eth_Vol": 1.87,
      "Change %": "-13.22%"
    },
    {
      "Date": "May 29, 2021",
      "Sol_Price": 26.9,
      "Eth_Price": 3489.52,
      "Sol_Vol": "-",
      "Eth_Vol": 1.51,
      "Change %": "-7.52%"
    },
    {
      "Date": "May 30, 2021",
      "Sol_Price": 28.52,
      "Eth_Price": 3481.22,
      "Sol_Vol": "-",
      "Eth_Vol": 1.35,
      "Change %": "6.02%"
    },
    {
      "Date": "May 31, 2021",
      "Sol_Price": 32.72,
      "Eth_Price": 3905.55,
      "Sol_Vol": "-",
      "Eth_Vol": 1.34,
      "Change %": "14.74%"
    },
    {
      "Date": "Jun 01, 2021",
      "Sol_Price": 31,
      "Eth_Price": 3922.23,
      "Sol_Vol": "-",
      "Eth_Vol": 1.94,
      "Change %": "-5.26%"
    },
    {
      "Date": "Jun 02, 2021",
      "Sol_Price": 34.01,
      "Eth_Price": 3947.9,
      "Sol_Vol": "-",
      "Eth_Vol": 2.7,
      "Change %": "9.70%"
    },
    {
      "Date": "Jun 03, 2021",
      "Sol_Price": 39.46,
      "Eth_Price": 4167.78,
      "Sol_Vol": "-",
      "Eth_Vol": 1.27,
      "Change %": "16.03%"
    },
    {
      "Date": "Jun 04, 2021",
      "Sol_Price": 37.44,
      "Eth_Price": 3811.77,
      "Sol_Vol": "-",
      "Eth_Vol": 2.78,
      "Change %": "-5.13%"
    },
    {
      "Date": "Jun 05, 2021",
      "Sol_Price": 39.56,
      "Eth_Price": 3719.62,
      "Sol_Vol": "-",
      "Eth_Vol": 3.21,
      "Change %": "5.67%"
    },
    {
      "Date": "Jun 06, 2021",
      "Sol_Price": 42.21,
      "Eth_Price": 4075.38,
      "Sol_Vol": "-",
      "Eth_Vol": 2.06,
      "Change %": "6.70%"
    },
    {
      "Date": "Jun 07, 2021",
      "Sol_Price": 38.27,
      "Eth_Price": 3641.65,
      "Sol_Vol": "-",
      "Eth_Vol": 1.94,
      "Change %": "-9.33%"
    },
    {
      "Date": "Jun 08, 2021",
      "Sol_Price": 41.34,
      "Eth_Price": 3582.12,
      "Sol_Vol": "-",
      "Eth_Vol": 2.28,
      "Change %": "8.02%"
    },
    {
      "Date": "Jun 09, 2021",
      "Sol_Price": 42.04,
      "Eth_Price": 3279.68,
      "Sol_Vol": "-",
      "Eth_Vol": 2.85,
      "Change %": "1.70%"
    },
    {
      "Date": "Jun 10, 2021",
      "Sol_Price": 41.12,
      "Eth_Price": 3377.55,
      "Sol_Vol": "-",
      "Eth_Vol": 2.3,
      "Change %": "-2.18%"
    },
    {
      "Date": "Jun 11, 2021",
      "Sol_Price": 36.01,
      "Eth_Price": 2435.69,
      "Sol_Vol": "-",
      "Eth_Vol": 6.42,
      "Change %": "-12.43%"
    },
    {
      "Date": "Jun 12, 2021",
      "Sol_Price": 36.4,
      "Eth_Price": 2777.55,
      "Sol_Vol": "-",
      "Eth_Vol": 4.33,
      "Change %": "1.08%"
    },
    {
      "Date": "Jun 13, 2021",
      "Sol_Price": 38.81,
      "Eth_Price": 2433.11,
      "Sol_Vol": "-",
      "Eth_Vol": 4.23,
      "Change %": "6.60%"
    },
    {
      "Date": "Jun 14, 2021",
      "Sol_Price": 39.7,
      "Eth_Price": 2291.6,
      "Sol_Vol": "-",
      "Eth_Vol": 2.82,
      "Change %": "2.31%"
    },
    {
      "Date": "Jun 15, 2021",
      "Sol_Price": 39.59,
      "Eth_Price": 2101.34,
      "Sol_Vol": "-",
      "Eth_Vol": 3.52,
      "Change %": "-0.28%"
    },
    {
      "Date": "Jun 16, 2021",
      "Sol_Price": 39.33,
      "Eth_Price": 2646.79,
      "Sol_Vol": "-",
      "Eth_Vol": 3.24,
      "Change %": "-0.65%"
    },
    {
      "Date": "Jun 17, 2021",
      "Sol_Price": 39.4,
      "Eth_Price": 2705.09,
      "Sol_Vol": "-",
      "Eth_Vol": 3.28,
      "Change %": "0.17%"
    },
    {
      "Date": "Jun 18, 2021",
      "Sol_Price": 36.65,
      "Eth_Price": 2884.66,
      "Sol_Vol": "-",
      "Eth_Vol": 2.66,
      "Change %": "-6.98%"
    },
    {
      "Date": "Jun 19, 2021",
      "Sol_Price": 35.28,
      "Eth_Price": 2735.88,
      "Sol_Vol": "-",
      "Eth_Vol": 2.39,
      "Change %": "-3.73%"
    },
    {
      "Date": "Jun 20, 2021",
      "Sol_Price": 35.32,
      "Eth_Price": 2414.29,
      "Sol_Vol": "-",
      "Eth_Vol": 3.26,
      "Change %": "0.10%"
    },
    {
      "Date": "Jun 21, 2021",
      "Sol_Price": 26.6,
      "Eth_Price": 2276.07,
      "Sol_Vol": "-",
      "Eth_Vol": 2.94,
      "Change %": "-24.69%"
    },
    {
      "Date": "Jun 22, 2021",
      "Sol_Price": 26.69,
      "Eth_Price": 2386.1,
      "Sol_Vol": "-",
      "Eth_Vol": 2.8,
      "Change %": "0.32%"
    },
    {
      "Date": "Jun 23, 2021",
      "Sol_Price": 30.86,
      "Eth_Price": 2708.47,
      "Sol_Vol": "-",
      "Eth_Vol": 2.83,
      "Change %": "15.63%"
    },
    {
      "Date": "Jun 24, 2021",
      "Sol_Price": 31.25,
      "Eth_Price": 2633.67,
      "Sol_Vol": "-",
      "Eth_Vol": 2.45,
      "Change %": "1.26%"
    },
    {
      "Date": "Jun 25, 2021",
      "Sol_Price": 28.8,
      "Eth_Price": 2706.1,
      "Sol_Vol": "-",
      "Eth_Vol": 2.6,
      "Change %": "-7.83%"
    },
    {
      "Date": "Jun 26, 2021",
      "Sol_Price": 29.55,
      "Eth_Price": 2853.35,
      "Sol_Vol": "-",
      "Eth_Vol": 1.09,
      "Change %": "2.63%"
    },
    {
      "Date": "Jun 27, 2021",
      "Sol_Price": 31.82,
      "Eth_Price": 2686.5,
      "Sol_Vol": "-",
      "Eth_Vol": 2.47,
      "Change %": "7.67%"
    },
    {
      "Date": "Jun 28, 2021",
      "Sol_Price": 32.99,
      "Eth_Price": 2628.98,
      "Sol_Vol": "-",
      "Eth_Vol": 2.55,
      "Change %": "3.67%"
    },
    {
      "Date": "Jun 29, 2021",
      "Sol_Price": 33.89,
      "Eth_Price": 2713.66,
      "Sol_Vol": "-",
      "Eth_Vol": 756.36,
      "Change %": "2.71%"
    },
    {
      "Date": "Jun 30, 2021",
      "Sol_Price": 35.54,
      "Eth_Price": 2592.63,
      "Sol_Vol": "-",
      "Eth_Vol": 3.01,
      "Change %": "4.87%"
    },
    {
      "Date": "Jul 01, 2021",
      "Sol_Price": 33.38,
      "Eth_Price": 2510.65,
      "Sol_Vol": "-",
      "Eth_Vol": 75.18,
      "Change %": "-6.08%"
    },
    {
      "Date": "Jul 02, 2021",
      "Sol_Price": 34,
      "Eth_Price": 2606.23,
      "Sol_Vol": "-",
      "Eth_Vol": 2.32,
      "Change %": "1.87%"
    },
    {
      "Date": "Jul 03, 2021",
      "Sol_Price": 34.8,
      "Eth_Price": 2469.97,
      "Sol_Vol": "-",
      "Eth_Vol": 1.29,
      "Change %": "2.36%"
    },
    {
      "Date": "Jul 04, 2021",
      "Sol_Price": 34.36,
      "Eth_Price": 2351.45,
      "Sol_Vol": "-",
      "Eth_Vol": 587.18,
      "Change %": "-1.27%"
    },
    {
      "Date": "Jul 05, 2021",
      "Sol_Price": 32.97,
      "Eth_Price": 2368.47,
      "Sol_Vol": "-",
      "Eth_Vol": 1.8,
      "Change %": "-4.06%"
    },
    {
      "Date": "Jul 06, 2021",
      "Sol_Price": 33.64,
      "Eth_Price": 2508.27,
      "Sol_Vol": "-",
      "Eth_Vol": 1.62,
      "Change %": "2.05%"
    },
    {
      "Date": "Jul 07, 2021",
      "Sol_Price": 36.54,
      "Eth_Price": 2581.48,
      "Sol_Vol": "-",
      "Eth_Vol": 1.79,
      "Change %": "8.60%"
    },
    {
      "Date": "Jul 08, 2021",
      "Sol_Price": 32.9,
      "Eth_Price": 2543.83,
      "Sol_Vol": "-",
      "Eth_Vol": 1.95,
      "Change %": "-9.95%"
    },
    {
      "Date": "Jul 09, 2021",
      "Sol_Price": 33.36,
      "Eth_Price": 2367.28,
      "Sol_Vol": "-",
      "Eth_Vol": 1.37,
      "Change %": "1.40%"
    },
    {
      "Date": "Jul 10, 2021",
      "Sol_Price": 31.73,
      "Eth_Price": 2371.62,
      "Sol_Vol": "-",
      "Eth_Vol": 1.06,
      "Change %": "-4.90%"
    },
    {
      "Date": "Jul 11, 2021",
      "Sol_Price": 32.12,
      "Eth_Price": 2229.53,
      "Sol_Vol": "-",
      "Eth_Vol": 778.79,
      "Change %": "1.21%"
    },
    {
      "Date": "Jul 12, 2021",
      "Sol_Price": 30.88,
      "Eth_Price": 2166.91,
      "Sol_Vol": "-",
      "Eth_Vol": 1.08,
      "Change %": "-3.85%"
    },
    {
      "Date": "Jul 13, 2021",
      "Sol_Price": 29.05,
      "Eth_Price": 2243.86,
      "Sol_Vol": "-",
      "Eth_Vol": 1.42,
      "Change %": "-5.92%"
    },
    {
      "Date": "Jul 14, 2021",
      "Sol_Price": 31.26,
      "Eth_Price": 1891.18,
      "Sol_Vol": "-",
      "Eth_Vol": 2.69,
      "Change %": "7.60%"
    },
    {
      "Date": "Jul 15, 2021",
      "Sol_Price": 28.46,
      "Eth_Price": 1876.66,
      "Sol_Vol": "-",
      "Eth_Vol": 2.84,
      "Change %": "-8.97%"
    },
    {
      "Date": "Jul 16, 2021",
      "Sol_Price": 26.31,
      "Eth_Price": 1968.39,
      "Sol_Vol": "-",
      "Eth_Vol": 1.77,
      "Change %": "-7.55%"
    },
    {
      "Date": "Jul 17, 2021",
      "Sol_Price": 26.72,
      "Eth_Price": 1989.14,
      "Sol_Vol": "-",
      "Eth_Vol": 1.64,
      "Change %": "1.55%"
    },
    {
      "Date": "Jul 18, 2021",
      "Sol_Price": 26.73,
      "Eth_Price": 1810.57,
      "Sol_Vol": "-",
      "Eth_Vol": 1.65,
      "Change %": "0.04%"
    },
    {
      "Date": "Jul 19, 2021",
      "Sol_Price": 24.5,
      "Eth_Price": 1830.62,
      "Sol_Vol": "-",
      "Eth_Vol": 1.99,
      "Change %": "-8.35%"
    },
    {
      "Date": "Jul 20, 2021",
      "Sol_Price": 23.48,
      "Eth_Price": 1979.88,
      "Sol_Vol": "-",
      "Eth_Vol": 1.87,
      "Change %": "-4.14%"
    },
    {
      "Date": "Jul 21, 2021",
      "Sol_Price": 26.64,
      "Eth_Price": 2083.09,
      "Sol_Vol": "-",
      "Eth_Vol": 2.19,
      "Change %": "13.45%"
    },
    {
      "Date": "Jul 22, 2021",
      "Sol_Price": 27.75,
      "Eth_Price": 2158.71,
      "Sol_Vol": "-",
      "Eth_Vol": 898.06,
      "Change %": "4.16%"
    },
    {
      "Date": "Jul 23, 2021",
      "Sol_Price": 28.47,
      "Eth_Price": 2273.84,
      "Sol_Vol": "-",
      "Eth_Vol": 1.9,
      "Change %": "2.60%"
    },
    {
      "Date": "Jul 24, 2021",
      "Sol_Price": 28.72,
      "Eth_Price": 2109.11,
      "Sol_Vol": "-",
      "Eth_Vol": 1.71,
      "Change %": "0.88%"
    },
    {
      "Date": "Jul 25, 2021",
      "Sol_Price": 28.13,
      "Eth_Price": 2154.78,
      "Sol_Vol": "-",
      "Eth_Vol": 1.39,
      "Change %": "-2.04%"
    },
    {
      "Date": "Jul 26, 2021",
      "Sol_Price": 28.25,
      "Eth_Price": 2224.7,
      "Sol_Vol": "-",
      "Eth_Vol": 1.28,
      "Change %": "0.42%"
    },
    {
      "Date": "Jul 27, 2021",
      "Sol_Price": 28.02,
      "Eth_Price": 2323.22,
      "Sol_Vol": "-",
      "Eth_Vol": 1.39,
      "Change %": "-0.82%"
    },
    {
      "Date": "Jul 28, 2021",
      "Sol_Price": 27.86,
      "Eth_Price": 2196.16,
      "Sol_Vol": "-",
      "Eth_Vol": 822.95,
      "Change %": "-0.57%"
    },
    {
      "Date": "Jul 29, 2021",
      "Sol_Price": 31.27,
      "Eth_Price": 2322.72,
      "Sol_Vol": "-",
      "Eth_Vol": 1.78,
      "Change %": "12.24%"
    },
    {
      "Date": "Jul 30, 2021",
      "Sol_Price": 32.36,
      "Eth_Price": 2316.57,
      "Sol_Vol": "-",
      "Eth_Vol": 1.32,
      "Change %": "3.48%"
    },
    {
      "Date": "Jul 31, 2021",
      "Sol_Price": 36.71,
      "Eth_Price": 2120.22,
      "Sol_Vol": "-",
      "Eth_Vol": 1.82,
      "Change %": "13.45%"
    },
    {
      "Date": "Aug 01, 2021",
      "Sol_Price": 34.28,
      "Eth_Price": 2145.89,
      "Sol_Vol": "-",
      "Eth_Vol": 1.42,
      "Change %": "-6.63%"
    },
    {
      "Date": "Aug 02, 2021",
      "Sol_Price": 33.17,
      "Eth_Price": 2111.12,
      "Sol_Vol": "-",
      "Eth_Vol": 929.32,
      "Change %": "-3.23%"
    },
    {
      "Date": "Aug 03, 2021",
      "Sol_Price": 33.96,
      "Eth_Price": 2139.35,
      "Sol_Vol": "-",
      "Eth_Vol": 724.84,
      "Change %": "2.38%"
    },
    {
      "Date": "Aug 04, 2021",
      "Sol_Price": 35.71,
      "Eth_Price": 2035.09,
      "Sol_Vol": "-",
      "Eth_Vol": 540.1,
      "Change %": "5.14%"
    },
    {
      "Date": "Aug 05, 2021",
      "Sol_Price": 37.41,
      "Eth_Price": 1940.72,
      "Sol_Vol": "-",
      "Eth_Vol": 717.85,
      "Change %": "4.77%"
    },
    {
      "Date": "Aug 06, 2021",
      "Sol_Price": 39.5,
      "Eth_Price": 1994.64,
      "Sol_Vol": "-",
      "Eth_Vol": 1.05,
      "Change %": "5.58%"
    },
    {
      "Date": "Aug 07, 2021",
      "Sol_Price": 39.43,
      "Eth_Price": 1917.21,
      "Sol_Vol": "-",
      "Eth_Vol": 645.06,
      "Change %": "-0.18%"
    },
    {
      "Date": "Aug 08, 2021",
      "Sol_Price": 37.67,
      "Eth_Price": 1878.2,
      "Sol_Vol": "-",
      "Eth_Vol": 619.62,
      "Change %": "-4.46%"
    },
    {
      "Date": "Aug 09, 2021",
      "Sol_Price": 38.72,
      "Eth_Price": 1897.98,
      "Sol_Vol": "-",
      "Eth_Vol": 623.52,
      "Change %": "2.80%"
    },
    {
      "Date": "Aug 10, 2021",
      "Sol_Price": 40.6,
      "Eth_Price": 1892.42,
      "Sol_Vol": "-",
      "Eth_Vol": 829.77,
      "Change %": "4.84%"
    },
    {
      "Date": "Aug 11, 2021",
      "Sol_Price": 41.79,
      "Eth_Price": 1818.07,
      "Sol_Vol": "-",
      "Eth_Vol": 802.78,
      "Change %": "2.95%"
    },
    {
      "Date": "Aug 12, 2021",
      "Sol_Price": 41.1,
      "Eth_Price": 1786.07,
      "Sol_Vol": "-",
      "Eth_Vol": 1.2,
      "Change %": "-1.66%"
    },
    {
      "Date": "Aug 13, 2021",
      "Sol_Price": 44.82,
      "Eth_Price": 1994.49,
      "Sol_Vol": "-",
      "Eth_Vol": 1.51,
      "Change %": "9.05%"
    },
    {
      "Date": "Aug 14, 2021",
      "Sol_Price": 44.04,
      "Eth_Price": 2024.58,
      "Sol_Vol": "-",
      "Eth_Vol": 1.02,
      "Change %": "-1.74%"
    },
    {
      "Date": "Aug 15, 2021",
      "Sol_Price": 53.71,
      "Eth_Price": 2123.61,
      "Sol_Vol": "-",
      "Eth_Vol": 961.67,
      "Change %": "21.96%"
    },
    {
      "Date": "Aug 16, 2021",
      "Sol_Price": 62.14,
      "Eth_Price": 2151.85,
      "Sol_Vol": "-",
      "Eth_Vol": 907.11,
      "Change %": "15.68%"
    },
    {
      "Date": "Aug 17, 2021",
      "Sol_Price": 64,
      "Eth_Price": 2189.79,
      "Sol_Vol": "-",
      "Eth_Vol": 786.94,
      "Change %": "3.00%"
    },
    {
      "Date": "Aug 18, 2021",
      "Sol_Price": 72.58,
      "Eth_Price": 2229.53,
      "Sol_Vol": "-",
      "Eth_Vol": 1.89,
      "Change %": "13.40%"
    },
    {
      "Date": "Aug 19, 2021",
      "Sol_Price": 72.7,
      "Eth_Price": 2300.22,
      "Sol_Vol": "-",
      "Eth_Vol": 1.25,
      "Change %": "0.17%"
    },
    {
      "Date": "Aug 20, 2021",
      "Sol_Price": 78.71,
      "Eth_Price": 2299.11,
      "Sol_Vol": "-",
      "Eth_Vol": 968.94,
      "Change %": "8.27%"
    },
    {
      "Date": "Aug 21, 2021",
      "Sol_Price": 73.91,
      "Eth_Price": 2380.93,
      "Sol_Vol": "-",
      "Eth_Vol": 642.75,
      "Change %": "-6.11%"
    },
    {
      "Date": "Aug 22, 2021",
      "Sol_Price": 72.85,
      "Eth_Price": 2460.95,
      "Sol_Vol": "-",
      "Eth_Vol": 1.03,
      "Change %": "-1.44%"
    },
    {
      "Date": "Aug 23, 2021",
      "Sol_Price": 75.55,
      "Eth_Price": 2532.19,
      "Sol_Vol": "-",
      "Eth_Vol": 507.08,
      "Change %": "3.72%"
    },
    {
      "Date": "Aug 24, 2021",
      "Sol_Price": 70.67,
      "Eth_Price": 2556.23,
      "Sol_Vol": "-",
      "Eth_Vol": 1.2,
      "Change %": "-6.46%"
    },
    {
      "Date": "Aug 25, 2021",
      "Sol_Price": 72.06,
      "Eth_Price": 2608.04,
      "Sol_Vol": "-",
      "Eth_Vol": 970.67,
      "Change %": "1.96%"
    },
    {
      "Date": "Aug 26, 2021",
      "Sol_Price": 75.17,
      "Eth_Price": 2506.65,
      "Sol_Vol": "-",
      "Eth_Vol": 158.45,
      "Change %": "4.32%"
    },
    {
      "Date": "Aug 27, 2021",
      "Sol_Price": 87.97,
      "Eth_Price": 2725.29,
      "Sol_Vol": "-",
      "Eth_Vol": 1.23,
      "Change %": "17.03%"
    },
    {
      "Date": "Aug 28, 2021",
      "Sol_Price": 96.72,
      "Eth_Price": 2827.21,
      "Sol_Vol": "-",
      "Eth_Vol": 1.65,
      "Change %": "9.95%"
    },
    {
      "Date": "Aug 29, 2021",
      "Sol_Price": 94.2,
      "Eth_Price": 2889.43,
      "Sol_Vol": "-",
      "Eth_Vol": 1.06,
      "Change %": "-2.61%"
    },
    {
      "Date": "Aug 30, 2021",
      "Sol_Price": 110.24,
      "Eth_Price": 3158,
      "Sol_Vol": "-",
      "Eth_Vol": 64.84,
      "Change %": "17.03%"
    },
    {
      "Date": "Aug 31, 2021",
      "Sol_Price": 108.32,
      "Eth_Price": 3012.07,
      "Sol_Vol": "-",
      "Eth_Vol": 1.25,
      "Change %": "-1.74%"
    },
    {
      "Date": "Sep 01, 2021",
      "Sol_Price": 111.06,
      "Eth_Price": 3162.93,
      "Sol_Vol": "-",
      "Eth_Vol": 1.44,
      "Change %": "2.53%"
    },
    {
      "Date": "Sep 02, 2021",
      "Sol_Price": 128.07,
      "Eth_Price": 3140.71,
      "Sol_Vol": "-",
      "Eth_Vol": 1.12,
      "Change %": "15.32%"
    },
    {
      "Date": "Sep 03, 2021",
      "Sol_Price": 146.14,
      "Eth_Price": 3163.66,
      "Sol_Vol": "-",
      "Eth_Vol": 950.12,
      "Change %": "14.11%"
    },
    {
      "Date": "Sep 04, 2021",
      "Sol_Price": 139.09,
      "Eth_Price": 3043.61,
      "Sol_Vol": "-",
      "Eth_Vol": 965.63,
      "Change %": "-4.82%"
    },
    {
      "Date": "Sep 05, 2021",
      "Sol_Price": 142.13,
      "Eth_Price": 3322.43,
      "Sol_Vol": "-",
      "Eth_Vol": 795.54,
      "Change %": "2.19%"
    },
    {
      "Date": "Sep 06, 2021",
      "Sol_Price": 164.17,
      "Eth_Price": 3264.69,
      "Sol_Vol": "-",
      "Eth_Vol": 658.6,
      "Change %": "15.51%"
    },
    {
      "Date": "Sep 07, 2021",
      "Sol_Price": 173.03,
      "Eth_Price": 3308.87,
      "Sol_Vol": "-",
      "Eth_Vol": 782.81,
      "Change %": "5.40%"
    },
    {
      "Date": "Sep 08, 2021",
      "Sol_Price": 190.69,
      "Eth_Price": 3147.65,
      "Sol_Vol": "-",
      "Eth_Vol": 859.09,
      "Change %": "10.21%"
    },
    {
      "Date": "Sep 09, 2021",
      "Sol_Price": 192.1,
      "Eth_Price": 3014.58,
      "Sol_Vol": "-",
      "Eth_Vol": 1.06,
      "Change %": "0.74%"
    },
    {
      "Date": "Sep 10, 2021",
      "Sol_Price": 179.15,
      "Eth_Price": 3016.91,
      "Sol_Vol": "-",
      "Eth_Vol": 750.74,
      "Change %": "-6.74%"
    },
    {
      "Date": "Sep 11, 2021",
      "Sol_Price": 178.35,
      "Eth_Price": 3184.82,
      "Sol_Vol": "-",
      "Eth_Vol": 844.13,
      "Change %": "-0.45%"
    },
    {
      "Date": "Sep 12, 2021",
      "Sol_Price": 174.37,
      "Eth_Price": 3284.21,
      "Sol_Vol": "-",
      "Eth_Vol": 739.32,
      "Change %": "-2.23%"
    },
    {
      "Date": "Sep 13, 2021",
      "Sol_Price": 169.47,
      "Eth_Price": 3223.96,
      "Sol_Vol": "12.52",
      "Eth_Vol": 768.74,
      "Change %": "-2.81%"
    },
    {
      "Date": "Sep 14, 2021",
      "Sol_Price": 158,
      "Eth_Price": 3238.7,
      "Sol_Vol": "12.22",
      "Eth_Vol": 747.65,
      "Change %": "-6.77%"
    },
    {
      "Date": "Sep 15, 2021",
      "Sol_Price": 158.62,
      "Eth_Price": 3319.49,
      "Sol_Vol": "8.72",
      "Eth_Vol": 1.09,
      "Change %": "0.39%"
    },
    {
      "Date": "Sep 16, 2021",
      "Sol_Price": 152.21,
      "Eth_Price": 3173.26,
      "Sol_Vol": "6.8",
      "Eth_Vol": 988.82,
      "Change %": "-4.04%"
    },
    {
      "Date": "Sep 17, 2021",
      "Sol_Price": 147.42,
      "Eth_Price": 3228.15,
      "Sol_Vol": "11.39",
      "Eth_Vol": 923.13,
      "Change %": "-3.15%"
    },
    {
      "Date": "Sep 18, 2021",
      "Sol_Price": 169.4,
      "Eth_Price": 3093.54,
      "Sol_Vol": "12.19",
      "Eth_Vol": 118.44,
      "Change %": "14.91%"
    },
    {
      "Date": "Sep 19, 2021",
      "Sol_Price": 152.7,
      "Eth_Price": 3273.58,
      "Sol_Vol": "7.32",
      "Eth_Vol": 839.54,
      "Change %": "-9.86%"
    },
    {
      "Date": "Sep 20, 2021",
      "Sol_Price": 132.5,
      "Eth_Price": 3243.9,
      "Sol_Vol": "14.72",
      "Eth_Vol": 466.21,
      "Change %": "-13.23%"
    },
    {
      "Date": "Sep 21, 2021",
      "Sol_Price": 123.88,
      "Eth_Price": 3222.16,
      "Sol_Vol": "14.26",
      "Eth_Vol": 643.73,
      "Change %": "-6.51%"
    },
    {
      "Date": "Sep 22, 2021",
      "Sol_Price": 148.05,
      "Eth_Price": 3225.67,
      "Sol_Vol": "12.06",
      "Eth_Vol": 966.58,
      "Change %": "19.51%"
    },
    {
      "Date": "Sep 23, 2021",
      "Sol_Price": 149.87,
      "Eth_Price": 3430.74,
      "Sol_Vol": "7.4",
      "Eth_Vol": 1.52,
      "Change %": "1.23%"
    },
    {
      "Date": "Sep 24, 2021",
      "Sol_Price": 139.27,
      "Eth_Price": 3832.73,
      "Sol_Vol": "9.67",
      "Eth_Vol": 1.48,
      "Change %": "-7.07%"
    },
    {
      "Date": "Sep 25, 2021",
      "Sol_Price": 136.09,
      "Eth_Price": 3786.19,
      "Sol_Vol": "4.38",
      "Eth_Vol": 928.7,
      "Change %": "-2.28%"
    },
    {
      "Date": "Sep 26, 2021",
      "Sol_Price": 135.75,
      "Eth_Price": 3936.29,
      "Sol_Vol": "5.83",
      "Eth_Vol": 1.2,
      "Change %": "-0.25%"
    },
    {
      "Date": "Sep 27, 2021",
      "Sol_Price": 136.37,
      "Eth_Price": 3884.97,
      "Sol_Vol": "6.92",
      "Eth_Vol": 672.53,
      "Change %": "0.46%"
    },
    {
      "Date": "Sep 28, 2021",
      "Sol_Price": 132.1,
      "Eth_Price": 3950.62,
      "Sol_Vol": "5.25",
      "Eth_Vol": 714.16,
      "Change %": "-3.13%"
    },
    {
      "Date": "Sep 29, 2021",
      "Sol_Price": 135.28,
      "Eth_Price": 3927.21,
      "Sol_Vol": "5.31",
      "Eth_Vol": 764.56,
      "Change %": "2.41%"
    },
    {
      "Date": "Sep 30, 2021",
      "Sol_Price": 141.36,
      "Eth_Price": 3423.12,
      "Sol_Vol": "4.83",
      "Eth_Vol": 2.47,
      "Change %": "4.49%"
    },
    {
      "Date": "Oct 01, 2021",
      "Sol_Price": 161.62,
      "Eth_Price": 3495.1,
      "Sol_Vol": "8.96",
      "Eth_Vol": 780.68,
      "Change %": "14.33%"
    },
    {
      "Date": "Oct 02, 2021",
      "Sol_Price": 169.08,
      "Eth_Price": 3423.51,
      "Sol_Vol": "6.76",
      "Eth_Vol": 1.09,
      "Change %": "4.61%"
    },
    {
      "Date": "Oct 03, 2021",
      "Sol_Price": 172.75,
      "Eth_Price": 3207.27,
      "Sol_Vol": "5.56",
      "Eth_Vol": 1.21,
      "Change %": "2.17%"
    },
    {
      "Date": "Oct 04, 2021",
      "Sol_Price": 167.12,
      "Eth_Price": 3267.33,
      "Sol_Vol": "5.75",
      "Eth_Vol": 732.95,
      "Change %": "-3.26%"
    },
    {
      "Date": "Oct 05, 2021",
      "Sol_Price": 164.62,
      "Eth_Price": 3408.28,
      "Sol_Vol": "4.88",
      "Eth_Vol": 805.97,
      "Change %": "-1.49%"
    },
    {
      "Date": "Oct 06, 2021",
      "Sol_Price": 153.9,
      "Eth_Price": 3284.52,
      "Sol_Vol": "6.64",
      "Eth_Vol": 1.34,
      "Change %": "-6.51%"
    },
    {
      "Date": "Oct 07, 2021",
      "Sol_Price": 154.21,
      "Eth_Price": 3428.87,
      "Sol_Vol": "4.96",
      "Eth_Vol": 720.34,
      "Change %": "0.20%"
    },
    {
      "Date": "Oct 08, 2021",
      "Sol_Price": 158.59,
      "Eth_Price": 3611.9,
      "Sol_Vol": "5.41",
      "Eth_Vol": 790.27,
      "Change %": "2.84%"
    },
    {
      "Date": "Oct 09, 2021",
      "Sol_Price": 156.76,
      "Eth_Price": 3569.43,
      "Sol_Vol": "2.87",
      "Eth_Vol": 195.79,
      "Change %": "-1.16%"
    },
    {
      "Date": "Oct 10, 2021",
      "Sol_Price": 147.74,
      "Eth_Price": 3398.65,
      "Sol_Vol": "2.91",
      "Eth_Vol": 748.1,
      "Change %": "-5.75%"
    },
    {
      "Date": "Oct 11, 2021",
      "Sol_Price": 144.89,
      "Eth_Price": 3435.97,
      "Sol_Vol": "3.59",
      "Eth_Vol": 600.19,
      "Change %": "-1.93%"
    },
    {
      "Date": "Oct 12, 2021",
      "Sol_Price": 152.52,
      "Eth_Price": 3329.12,
      "Sol_Vol": "5.65",
      "Eth_Vol": 614,
      "Change %": "5.27%"
    },
    {
      "Date": "Oct 13, 2021",
      "Sol_Price": 148.13,
      "Eth_Price": 2976.05,
      "Sol_Vol": "3.93",
      "Eth_Vol": 1.72,
      "Change %": "-2.88%"
    },
    {
      "Date": "Oct 14, 2021",
      "Sol_Price": 149.98,
      "Eth_Price": 2761.52,
      "Sol_Vol": "3.8",
      "Eth_Vol": 1.79,
      "Change %": "1.25%"
    },
    {
      "Date": "Oct 15, 2021",
      "Sol_Price": 163.17,
      "Eth_Price": 3077.78,
      "Sol_Vol": "7.13",
      "Eth_Vol": 1.19,
      "Change %": "8.79%"
    },
    {
      "Date": "Oct 16, 2021",
      "Sol_Price": 157.4,
      "Eth_Price": 3152.92,
      "Sol_Vol": "2.65",
      "Eth_Vol": 841.54,
      "Change %": "-3.53%"
    },
    {
      "Date": "Oct 17, 2021",
      "Sol_Price": 160.08,
      "Eth_Price": 2928.57,
      "Sol_Vol": "4",
      "Eth_Vol": 1.74,
      "Change %": "1.70%"
    },
    {
      "Date": "Oct 18, 2021",
      "Sol_Price": 157.22,
      "Eth_Price": 2922.55,
      "Sol_Vol": "3.01",
      "Eth_Vol": 975.49,
      "Change %": "-1.79%"
    },
    {
      "Date": "Oct 19, 2021",
      "Sol_Price": 155.86,
      "Eth_Price": 3063.51,
      "Sol_Vol": "2.52",
      "Eth_Vol": 1.33,
      "Change %": "-0.87%"
    },
    {
      "Date": "Oct 20, 2021",
      "Sol_Price": 176.81,
      "Eth_Price": 2926.24,
      "Sol_Vol": "5.43",
      "Eth_Vol": 865.3,
      "Change %": "13.44%"
    },
    {
      "Date": "Oct 21, 2021",
      "Sol_Price": 190.43,
      "Eth_Price": 2807.28,
      "Sol_Vol": "11.01",
      "Eth_Vol": 896.28,
      "Change %": "7.70%"
    },
    {
      "Date": "Oct 22, 2021",
      "Sol_Price": 196.17,
      "Eth_Price": 2851.5,
      "Sol_Vol": "11.75",
      "Eth_Vol": 728.86,
      "Change %": "3.02%"
    },
    {
      "Date": "Oct 23, 2021",
      "Sol_Price": 197.78,
      "Eth_Price": 3000.59,
      "Sol_Vol": "4.62",
      "Eth_Vol": 968.23,
      "Change %": "0.82%"
    },
    {
      "Date": "Oct 24, 2021",
      "Sol_Price": 202.39,
      "Eth_Price": 3309.13,
      "Sol_Vol": "5.12",
      "Eth_Vol": 1.14,
      "Change %": "2.34%"
    },
    {
      "Date": "Oct 25, 2021",
      "Sol_Price": 209.7,
      "Eth_Price": 3388.97,
      "Sol_Vol": "6.89",
      "Eth_Vol": 778.15,
      "Change %": "3.61%"
    },
    {
      "Date": "Oct 26, 2021",
      "Sol_Price": 199.74,
      "Eth_Price": 3417.34,
      "Sol_Vol": "4.86",
      "Eth_Vol": 642.59,
      "Change %": "-4.75%"
    },
    {
      "Date": "Oct 27, 2021",
      "Sol_Price": 184.4,
      "Eth_Price": 3382.9,
      "Sol_Vol": "7.41",
      "Eth_Vol": 826.83,
      "Change %": "-7.68%"
    },
    {
      "Date": "Oct 28, 2021",
      "Sol_Price": 194.66,
      "Eth_Price": 3517.26,
      "Sol_Vol": "5.36",
      "Eth_Vol": 663.88,
      "Change %": "5.57%"
    },
    {
      "Date": "Oct 29, 2021",
      "Sol_Price": 200.22,
      "Eth_Price": 3575.41,
      "Sol_Vol": "3.75",
      "Eth_Vol": 1.05,
      "Change %": "2.86%"
    },
    {
      "Date": "Oct 30, 2021",
      "Sol_Price": 195.81,
      "Eth_Price": 3586,
      "Sol_Vol": "2.5",
      "Eth_Vol": 826.29,
      "Change %": "-2.20%"
    },
    {
      "Date": "Oct 31, 2021",
      "Sol_Price": 202.57,
      "Eth_Price": 3559.42,
      "Sol_Vol": "3.64",
      "Eth_Vol": 681.74,
      "Change %": "3.45%"
    },
    {
      "Date": "Nov 01, 2021",
      "Sol_Price": 203.45,
      "Eth_Price": 3574.2,
      "Sol_Vol": "4.78",
      "Eth_Vol": 464.11,
      "Change %": "0.44%"
    },
    {
      "Date": "Nov 02, 2021",
      "Sol_Price": 220.68,
      "Eth_Price": 3415.03,
      "Sol_Vol": "4.46",
      "Eth_Vol": 767.49,
      "Change %": "8.47%"
    },
    {
      "Date": "Nov 03, 2021",
      "Sol_Price": 243.27,
      "Eth_Price": 3545.06,
      "Sol_Vol": "7.93",
      "Eth_Vol": 683.24,
      "Change %": "10.24%"
    },
    {
      "Date": "Nov 04, 2021",
      "Sol_Price": 247.14,
      "Eth_Price": 3489.9,
      "Sol_Vol": "5.46",
      "Eth_Vol": 609.89,
      "Change %": "1.59%"
    },
    {
      "Date": "Nov 05, 2021",
      "Sol_Price": 236.15,
      "Eth_Price": 3607.28,
      "Sol_Vol": "3.43",
      "Eth_Vol": 557.18,
      "Change %": "-4.45%"
    },
    {
      "Date": "Nov 06, 2021",
      "Sol_Price": 258.48,
      "Eth_Price": 3790.41,
      "Sol_Vol": "4.44",
      "Eth_Vol": 697.09,
      "Change %": "9.46%"
    },
    {
      "Date": "Nov 07, 2021",
      "Sol_Price": 249.64,
      "Eth_Price": 3866.9,
      "Sol_Vol": "2.96",
      "Eth_Vol": 721.14,
      "Change %": "-3.42%"
    },
    {
      "Date": "Nov 08, 2021",
      "Sol_Price": 248.42,
      "Eth_Price": 3827.55,
      "Sol_Vol": "3.75",
      "Eth_Vol": 527.61,
      "Change %": "-0.49%"
    },
    {
      "Date": "Nov 09, 2021",
      "Sol_Price": 239.03,
      "Eth_Price": 3845.47,
      "Sol_Vol": "3.52",
      "Eth_Vol": 543.52,
      "Change %": "-3.78%"
    },
    {
      "Date": "Nov 10, 2021",
      "Sol_Price": 233.69,
      "Eth_Price": 3747.6,
      "Sol_Vol": "4.79",
      "Eth_Vol": 578.21,
      "Change %": "-2.23%"
    },
    {
      "Date": "Nov 11, 2021",
      "Sol_Price": 233.58,
      "Eth_Price": 3876.78,
      "Sol_Vol": "3.19",
      "Eth_Vol": 488.6,
      "Change %": "-0.05%"
    },
    {
      "Date": "Nov 12, 2021",
      "Sol_Price": 228.55,
      "Eth_Price": 4159.89,
      "Sol_Vol": "3.36",
      "Eth_Vol": 752.03,
      "Change %": "-2.15%"
    },
    {
      "Date": "Nov 13, 2021",
      "Sol_Price": 241.68,
      "Eth_Price": 4054.16,
      "Sol_Vol": "2.43",
      "Eth_Vol": 1.14,
      "Change %": "5.75%"
    },
    {
      "Date": "Nov 14, 2021",
      "Sol_Price": 238.67,
      "Eth_Price": 3970.94,
      "Sol_Vol": "1.96",
      "Eth_Vol": 654.77,
      "Change %": "-1.25%"
    },
    {
      "Date": "Nov 15, 2021",
      "Sol_Price": 238.19,
      "Eth_Price": 4168.85,
      "Sol_Vol": "3.03",
      "Eth_Vol": 487.03,
      "Change %": "-0.20%"
    },
    {
      "Date": "Nov 16, 2021",
      "Sol_Price": 219.06,
      "Eth_Price": 4082.8,
      "Sol_Vol": "4.3",
      "Eth_Vol": 507.63,
      "Change %": "-8.03%"
    },
    {
      "Date": "Nov 17, 2021",
      "Sol_Price": 218.92,
      "Eth_Price": 4219.92,
      "Sol_Vol": "3.63",
      "Eth_Vol": 481.41,
      "Change %": "-0.07%"
    },
    {
      "Date": "Nov 18, 2021",
      "Sol_Price": 195.16,
      "Eth_Price": 4129.51,
      "Sol_Vol": "5.62",
      "Eth_Vol": 559.29,
      "Change %": "-10.85%"
    },
    {
      "Date": "Nov 19, 2021",
      "Sol_Price": 215.27,
      "Eth_Price": 3921.93,
      "Sol_Vol": "4.45",
      "Eth_Vol": 1.07,
      "Change %": "10.30%"
    },
    {
      "Date": "Nov 20, 2021",
      "Sol_Price": 217.83,
      "Eth_Price": 4284.9,
      "Sol_Vol": "2.47",
      "Eth_Vol": 865.8,
      "Change %": "1.19%"
    },
    {
      "Date": "Nov 21, 2021",
      "Sol_Price": 231.41,
      "Eth_Price": 4413.7,
      "Sol_Vol": "3.15",
      "Eth_Vol": 781.57,
      "Change %": "6.23%"
    },
    {
      "Date": "Nov 22, 2021",
      "Sol_Price": 215.85,
      "Eth_Price": 4320.65,
      "Sol_Vol": "3.97",
      "Eth_Vol": 494.87,
      "Change %": "-6.72%"
    },
    {
      "Date": "Nov 23, 2021",
      "Sol_Price": 221.89,
      "Eth_Price": 4287.56,
      "Sol_Vol": "2.65",
      "Eth_Vol": 555.32,
      "Change %": "2.79%"
    },
    {
      "Date": "Nov 24, 2021",
      "Sol_Price": 205.88,
      "Eth_Price": 4320.85,
      "Sol_Vol": "3.12",
      "Eth_Vol": 574.26,
      "Change %": "-7.21%"
    },
    {
      "Date": "Nov 25, 2021",
      "Sol_Price": 209.95,
      "Eth_Price": 4586.06,
      "Sol_Vol": "2.9",
      "Eth_Vol": 630.26,
      "Change %": "1.98%"
    },
    {
      "Date": "Nov 26, 2021",
      "Sol_Price": 191.99,
      "Eth_Price": 4602.21,
      "Sol_Vol": "4.57",
      "Eth_Vol": 634.68,
      "Change %": "-8.55%"
    },
    {
      "Date": "Nov 27, 2021",
      "Sol_Price": 193.06,
      "Eth_Price": 4535.11,
      "Sol_Vol": "1.93",
      "Eth_Vol": 495.86,
      "Change %": "0.56%"
    },
    {
      "Date": "Nov 28, 2021",
      "Sol_Price": 200.85,
      "Eth_Price": 4475,
      "Sol_Vol": "2.67",
      "Eth_Vol": 409.75,
      "Change %": "4.04%"
    },
    {
      "Date": "Nov 29, 2021",
      "Sol_Price": 204.14,
      "Eth_Price": 4517.36,
      "Sol_Vol": "2.82",
      "Eth_Vol": 442.6,
      "Change %": "1.63%"
    },
    {
      "Date": "Nov 30, 2021",
      "Sol_Price": 208.42,
      "Eth_Price": 4612.06,
      "Sol_Vol": "3.65",
      "Eth_Vol": 337.81,
      "Change %": "2.10%"
    },
    {
      "Date": "Dec 01, 2021",
      "Sol_Price": 229.83,
      "Eth_Price": 4808.38,
      "Sol_Vol": "4.5",
      "Eth_Vol": 673.21,
      "Change %": "10.27%"
    },
    {
      "Date": "Dec 02, 2021",
      "Sol_Price": 233.79,
      "Eth_Price": 4731.83,
      "Sol_Vol": "4.76",
      "Eth_Vol": 437.41,
      "Change %": "1.72%"
    },
    {
      "Date": "Dec 03, 2021",
      "Sol_Price": 212.05,
      "Eth_Price": 4634.03,
      "Sol_Vol": "4.84",
      "Eth_Vol": 761.9,
      "Change %": "-9.30%"
    },
    {
      "Date": "Dec 04, 2021",
      "Sol_Price": 201.09,
      "Eth_Price": 4720.87,
      "Sol_Vol": "6.98",
      "Eth_Vol": 418.61,
      "Change %": "-5.17%"
    },
    {
      "Date": "Dec 05, 2021",
      "Sol_Price": 196.44,
      "Eth_Price": 4667.31,
      "Sol_Vol": "4.19",
      "Eth_Vol": 634.59,
      "Change %": "-2.31%"
    },
    {
      "Date": "Dec 06, 2021",
      "Sol_Price": 193.96,
      "Eth_Price": 4644.61,
      "Sol_Vol": "4.88",
      "Eth_Vol": 290.27,
      "Change %": "-1.26%"
    },
    {
      "Date": "Dec 07, 2021",
      "Sol_Price": 190.24,
      "Eth_Price": 4625.59,
      "Sol_Vol": "3.68",
      "Eth_Vol": 340.96,
      "Change %": "-1.92%"
    },
    {
      "Date": "Dec 08, 2021",
      "Sol_Price": 194.6,
      "Eth_Price": 4562.98,
      "Sol_Vol": "3.38",
      "Eth_Vol": 495.96,
      "Change %": "2.29%"
    },
    {
      "Date": "Dec 09, 2021",
      "Sol_Price": 181.36,
      "Eth_Price": 4208.16,
      "Sol_Vol": "3.01",
      "Eth_Vol": 1.12,
      "Change %": "-6.80%"
    },
    {
      "Date": "Dec 10, 2021",
      "Sol_Price": 167.6,
      "Eth_Price": 4290.88,
      "Sol_Vol": "3.2",
      "Eth_Vol": 664.94,
      "Change %": "-7.59%"
    },
    {
      "Date": "Dec 11, 2021",
      "Sol_Price": 171.73,
      "Eth_Price": 4001.87,
      "Sol_Vol": "2.8",
      "Eth_Vol": 792.38,
      "Change %": "2.47%"
    },
    {
      "Date": "Dec 12, 2021",
      "Sol_Price": 172.92,
      "Eth_Price": 4295.43,
      "Sol_Vol": "1.77",
      "Eth_Vol": 571.96,
      "Change %": "0.70%"
    },
    {
      "Date": "Dec 13, 2021",
      "Sol_Price": 155.2,
      "Eth_Price": 4408.85,
      "Sol_Vol": "4.69",
      "Eth_Vol": 462.99,
      "Change %": "-10.25%"
    },
    {
      "Date": "Dec 14, 2021",
      "Sol_Price": 161.3,
      "Eth_Price": 4268.08,
      "Sol_Vol": "3.91",
      "Eth_Vol": 446.23,
      "Change %": "3.93%"
    },
    {
      "Date": "Dec 15, 2021",
      "Sol_Price": 178.51,
      "Eth_Price": 4086.95,
      "Sol_Vol": "5.55",
      "Eth_Vol": 717.08,
      "Change %": "10.67%"
    },
    {
      "Date": "Dec 16, 2021",
      "Sol_Price": 176.9,
      "Eth_Price": 4340.23,
      "Sol_Vol": "3.94",
      "Eth_Vol": 684.35,
      "Change %": "-0.90%"
    },
    {
      "Date": "Dec 17, 2021",
      "Sol_Price": 175.59,
      "Eth_Price": 4273.54,
      "Sol_Vol": "3.77",
      "Eth_Vol": 595.96,
      "Change %": "-0.75%"
    },
    {
      "Date": "Dec 18, 2021",
      "Sol_Price": 181.81,
      "Eth_Price": 4520.3,
      "Sol_Vol": "2.34",
      "Eth_Vol": 578.65,
      "Change %": "3.54%"
    }
   ]

   for(var i =0; i <data.length; i++){
     const json = [];
     json.push({Date: `${data[i].Date}`, High: `${data[i].High}`})
    
   }
   

 
  return (
    <>

      <LineChart
        width={500}
        height={300}
        data={data}
        stroke="#051b2d"
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip 
          // content={"ccds"}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="Eth_Vol"
          stroke="#051b2d"
          activeDot={{ r: 8 }}
        />
         <Line
          type="monotone"
          dataKey="Sol_Vol"
          stroke="red"
          activeDot={{ r: 8 }}
        />
         <Brush dataKey="Date" height={30} stroke="#8884d8" />
    
      </LineChart>
    </>
  );
};

export default Chart2;
