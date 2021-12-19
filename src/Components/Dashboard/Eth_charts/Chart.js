import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { Tag, Divider } from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,Brush} from "recharts";
//Data for getting power consumption
const Chart = (props) => {
  
  const data = [
    {
      "Date": "Jan 01, 2021",
      "Price": 729.12,
      "Open": 735.87,
      "High": 748.96,
      "Low": 715.74,
      "Vol.": "1.64M",
      "Change %": "-0.93%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 02, 2021",
      "Price": 774.5,
      "Open": 729,
      "High": 787.26,
      "Low": 715.15,
      "Vol.": "2.25M",
      "Change %": "6.22%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 03, 2021",
      "Price": 974.97,
      "Open": 774.54,
      "High": 1008.49,
      "Low": 769.57,
      "Vol.": "4.02M",
      "Change %": "25.88%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 04, 2021",
      "Price": 1042.4,
      "Open": 977.76,
      "High": 1158.27,
      "Low": 894.24,
      "Vol.": "5.19M",
      "Change %": "6.92%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 05, 2021",
      "Price": 1099.52,
      "Open": 1042.48,
      "High": 1131.56,
      "Low": 976.91,
      "Vol.": "3.25M",
      "Change %": "5.48%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 06, 2021",
      "Price": 1207.77,
      "Open": 1099.77,
      "High": 1210.78,
      "Low": 1060.67,
      "Vol.": "3.75M",
      "Change %": "9.85%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 07, 2021",
      "Price": 1224.35,
      "Open": 1208.71,
      "High": 1286.81,
      "Low": 1153.09,
      "Vol.": "2.71M",
      "Change %": "1.37%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 08, 2021",
      "Price": 1215.73,
      "Open": 1224.33,
      "High": 1271.08,
      "Low": 1069.25,
      "Vol.": "2.71M",
      "Change %": "-0.70%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 09, 2021",
      "Price": 1275.58,
      "Open": 1215.92,
      "High": 1301.75,
      "Low": 1172.39,
      "Vol.": "1.99M",
      "Change %": "4.92%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 10, 2021",
      "Price": 1256.04,
      "Open": 1275.87,
      "High": 1347.98,
      "Low": 1180.45,
      "Vol.": "2.65M",
      "Change %": "-1.53%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 11, 2021",
      "Price": 1091.47,
      "Open": 1255.84,
      "High": 1257.3,
      "Low": 917.96,
      "Vol.": "4.19M",
      "Change %": "-13.10%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 12, 2021",
      "Price": 1050.19,
      "Open": 1086.96,
      "High": 1149.19,
      "Low": 1008.28,
      "Vol.": "3.09M",
      "Change %": "-3.78%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 13, 2021",
      "Price": 1128.46,
      "Open": 1050.2,
      "High": 1134.66,
      "Low": 990.96,
      "Vol.": "2.25M",
      "Change %": "7.45%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 14, 2021",
      "Price": 1226.17,
      "Open": 1128.8,
      "High": 1246.52,
      "Low": 1088.52,
      "Vol.": "1.55M",
      "Change %": "8.66%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 15, 2021",
      "Price": 1171.68,
      "Open": 1233.34,
      "High": 1256.13,
      "Low": 1079.19,
      "Vol.": "2.85M",
      "Change %": "-4.44%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 16, 2021",
      "Price": 1228.27,
      "Open": 1172.12,
      "High": 1290.92,
      "Low": 1154.04,
      "Vol.": "2.29M",
      "Change %": "4.83%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 17, 2021",
      "Price": 1232.64,
      "Open": 1228.33,
      "High": 1269.01,
      "Low": 1168.39,
      "Vol.": "2.15M",
      "Change %": "0.36%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 18, 2021",
      "Price": 1258.06,
      "Open": 1233.93,
      "High": 1260.3,
      "Low": 1184.15,
      "Vol.": "1.73M",
      "Change %": "2.06%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 19, 2021",
      "Price": 1372,
      "Open": 1258.1,
      "High": 1437.42,
      "Low": 1252.36,
      "Vol.": "2.27M",
      "Change %": "9.06%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 20, 2021",
      "Price": 1377.53,
      "Open": 1372,
      "High": 1406.56,
      "Low": 1237.27,
      "Vol.": "3.05M",
      "Change %": "0.40%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 21, 2021",
      "Price": 1117.33,
      "Open": 1377.63,
      "High": 1387.39,
      "Low": 1095.26,
      "Vol.": "2.76M",
      "Change %": "-18.89%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 22, 2021",
      "Price": 1234.58,
      "Open": 1118.01,
      "High": 1272.85,
      "Low": 1045.02,
      "Vol.": "2.94M",
      "Change %": "10.49%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 23, 2021",
      "Price": 1233.4,
      "Open": 1234.34,
      "High": 1271.65,
      "Low": 1196.94,
      "Vol.": "1.46M",
      "Change %": "-0.10%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 24, 2021",
      "Price": 1390.28,
      "Open": 1233.41,
      "High": 1398,
      "Low": 1222.14,
      "Vol.": "2.30M",
      "Change %": "12.72%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 25, 2021",
      "Price": 1317.9,
      "Open": 1390.69,
      "High": 1474.68,
      "Low": 1298.13,
      "Vol.": "2.77M",
      "Change %": "-5.21%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 26, 2021",
      "Price": 1366.27,
      "Open": 1317.67,
      "High": 1377.94,
      "Low": 1246.45,
      "Vol.": "2.56M",
      "Change %": "3.67%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 27, 2021",
      "Price": 1247.62,
      "Open": 1366.14,
      "High": 1372.31,
      "Low": 1210.4,
      "Vol.": "2.90M",
      "Change %": "-8.68%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 28, 2021",
      "Price": 1328.47,
      "Open": 1247.67,
      "High": 1359.51,
      "Low": 1221.15,
      "Vol.": "814.31K",
      "Change %": "6.48%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 29, 2021",
      "Price": 1379.3,
      "Open": 1329.16,
      "High": 1436.27,
      "Low": 1288.26,
      "Vol.": "3.33M",
      "Change %": "3.83%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 30, 2021",
      "Price": 1376.96,
      "Open": 1379.78,
      "High": 1405.78,
      "Low": 1327.66,
      "Vol.": "1.59M",
      "Change %": "-0.17%",
      "FIELD8": ""
    },
    {
      "Date": "Jan 31, 2021",
      "Price": 1312.73,
      "Open": 1377.05,
      "High": 1380.04,
      "Low": 1282.41,
      "Vol.": "1.54M",
      "Change %": "-4.67%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 01, 2021",
      "Price": 1373.4,
      "Open": 1312.69,
      "High": 1376.44,
      "Low": 1272.09,
      "Vol.": "1.65M",
      "Change %": "4.62%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 02, 2021",
      "Price": 1511.36,
      "Open": 1373.31,
      "High": 1546.88,
      "Low": 1361.63,
      "Vol.": "2.73M",
      "Change %": "10.04%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 03, 2021",
      "Price": 1664.34,
      "Open": 1511.96,
      "High": 1667.93,
      "Low": 1510.27,
      "Vol.": "2.27M",
      "Change %": "10.12%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 04, 2021",
      "Price": 1594,
      "Open": 1664.19,
      "High": 1693.64,
      "Low": 1570.45,
      "Vol.": "2.34M",
      "Change %": "-4.23%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 05, 2021",
      "Price": 1719.2,
      "Open": 1593.91,
      "High": 1760.09,
      "Low": 1589.28,
      "Vol.": "1.80M",
      "Change %": "7.85%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 06, 2021",
      "Price": 1676.63,
      "Open": 1719.11,
      "High": 1742.9,
      "Low": 1648.03,
      "Vol.": "1.78M",
      "Change %": "-2.48%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 07, 2021",
      "Price": 1612.99,
      "Open": 1676.62,
      "High": 1692.29,
      "Low": 1491.68,
      "Vol.": "1.94M",
      "Change %": "-3.80%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 08, 2021",
      "Price": 1750.18,
      "Open": 1612.98,
      "High": 1775.12,
      "Low": 1566.43,
      "Vol.": "2.17M",
      "Change %": "8.50%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 09, 2021",
      "Price": 1770.63,
      "Open": 1750.19,
      "High": 1818.94,
      "Low": 1711.4,
      "Vol.": "1.94M",
      "Change %": "1.17%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 10, 2021",
      "Price": 1742.09,
      "Open": 1770.81,
      "High": 1835.4,
      "Low": 1683.52,
      "Vol.": "2.01M",
      "Change %": "-1.61%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 11, 2021",
      "Price": 1786.35,
      "Open": 1742.11,
      "High": 1817.68,
      "Low": 1704.97,
      "Vol.": "1.56M",
      "Change %": "2.54%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 12, 2021",
      "Price": 1841.02,
      "Open": 1786.74,
      "High": 1862.17,
      "Low": 1741.04,
      "Vol.": "1.75M",
      "Change %": "3.06%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 13, 2021",
      "Price": 1815.49,
      "Open": 1840.9,
      "High": 1871.36,
      "Low": 1766.05,
      "Vol.": "1.44M",
      "Change %": "-1.39%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 14, 2021",
      "Price": 1801.78,
      "Open": 1815.44,
      "High": 1850,
      "Low": 1787.11,
      "Vol.": "1.43M",
      "Change %": "-0.76%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 15, 2021",
      "Price": 1778.82,
      "Open": 1800.6,
      "High": 1835.51,
      "Low": 1661.09,
      "Vol.": "1.94M",
      "Change %": "-1.27%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 16, 2021",
      "Price": 1781.69,
      "Open": 1778.63,
      "High": 1827.07,
      "Low": 1726.78,
      "Vol.": "1.48M",
      "Change %": "0.16%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 17, 2021",
      "Price": 1847.95,
      "Open": 1781.44,
      "High": 1854.03,
      "Low": 1734.15,
      "Vol.": "1.69M",
      "Change %": "3.72%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 18, 2021",
      "Price": 1934.16,
      "Open": 1849.95,
      "High": 1950.04,
      "Low": 1849.05,
      "Vol.": "881.87K",
      "Change %": "4.66%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 19, 2021",
      "Price": 1955.59,
      "Open": 1934.17,
      "High": 1968.93,
      "Low": 1892.7,
      "Vol.": "1.78M",
      "Change %": "1.11%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 20, 2021",
      "Price": 1913.88,
      "Open": 1955.54,
      "High": 2040.79,
      "Low": 1800,
      "Vol.": "2.29M",
      "Change %": "-2.13%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 21, 2021",
      "Price": 1933.45,
      "Open": 1912.97,
      "High": 1974.99,
      "Low": 1885.7,
      "Vol.": "1.47M",
      "Change %": "1.02%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 22, 2021",
      "Price": 1777.28,
      "Open": 1933.52,
      "High": 1935.04,
      "Low": 1561.68,
      "Vol.": "2.68M",
      "Change %": "-8.08%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 23, 2021",
      "Price": 1578.11,
      "Open": 1777.25,
      "High": 1781.44,
      "Low": 1370.45,
      "Vol.": "3.60M",
      "Change %": "-11.21%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 24, 2021",
      "Price": 1623.71,
      "Open": 1578.27,
      "High": 1711.16,
      "Low": 1505.79,
      "Vol.": "2.19M",
      "Change %": "2.89%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 25, 2021",
      "Price": 1476.15,
      "Open": 1623.76,
      "High": 1669.24,
      "Low": 1460.92,
      "Vol.": "1.75M",
      "Change %": "-9.09%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 26, 2021",
      "Price": 1445.44,
      "Open": 1476.77,
      "High": 1561.66,
      "Low": 1403.3,
      "Vol.": "2.13M",
      "Change %": "-2.08%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 27, 2021",
      "Price": 1458.93,
      "Open": 1445.69,
      "High": 1527.69,
      "Low": 1427.15,
      "Vol.": "1.56M",
      "Change %": "0.93%",
      "FIELD8": ""
    },
    {
      "Date": "Feb 28, 2021",
      "Price": 1418.76,
      "Open": 1458.84,
      "High": 1467.76,
      "Low": 1294.79,
      "Vol.": "2.07M",
      "Change %": "-2.75%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 01, 2021",
      "Price": 1570.03,
      "Open": 1418.91,
      "High": 1571.15,
      "Low": 1411.55,
      "Vol.": "1.92M",
      "Change %": "10.66%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 02, 2021",
      "Price": 1488.62,
      "Open": 1570,
      "High": 1602.13,
      "Low": 1457.22,
      "Vol.": "1.74M",
      "Change %": "-5.18%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 03, 2021",
      "Price": 1571.05,
      "Open": 1488.8,
      "High": 1653.04,
      "Low": 1477.72,
      "Vol.": "1.17M",
      "Change %": "5.54%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 04, 2021",
      "Price": 1538.61,
      "Open": 1567.84,
      "High": 1623.73,
      "Low": 1506.86,
      "Vol.": "1.70M",
      "Change %": "-2.06%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 05, 2021",
      "Price": 1530.29,
      "Open": 1539.73,
      "High": 1548.71,
      "Low": 1443.32,
      "Vol.": "1.67M",
      "Change %": "-0.54%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 06, 2021",
      "Price": 1649.19,
      "Open": 1530.24,
      "High": 1670.01,
      "Low": 1514.62,
      "Vol.": "2.07M",
      "Change %": "7.77%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 07, 2021",
      "Price": 1728.1,
      "Open": 1650.94,
      "High": 1732.84,
      "Low": 1634.73,
      "Vol.": "1.69M",
      "Change %": "4.78%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 08, 2021",
      "Price": 1831.49,
      "Open": 1727.17,
      "High": 1841.05,
      "Low": 1665.54,
      "Vol.": "1.97M",
      "Change %": "5.98%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 09, 2021",
      "Price": 1869.1,
      "Open": 1831.57,
      "High": 1869.1,
      "Low": 1801.29,
      "Vol.": "1.58M",
      "Change %": "2.05%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 10, 2021",
      "Price": 1794.14,
      "Open": 1869.32,
      "High": 1875.98,
      "Low": 1759.5,
      "Vol.": "1.66M",
      "Change %": "-4.01%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 11, 2021",
      "Price": 1825.79,
      "Open": 1794.28,
      "High": 1845.32,
      "Low": 1729.05,
      "Vol.": "1.58M",
      "Change %": "1.76%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 12, 2021",
      "Price": 1766.9,
      "Open": 1827.44,
      "High": 1841.19,
      "Low": 1723.18,
      "Vol.": "1.52M",
      "Change %": "-3.23%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 13, 2021",
      "Price": 1921.13,
      "Open": 1767.05,
      "High": 1943.36,
      "Low": 1730.46,
      "Vol.": "1.79M",
      "Change %": "8.73%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 14, 2021",
      "Price": 1849.06,
      "Open": 1921.29,
      "High": 1932.36,
      "Low": 1836.78,
      "Vol.": "671.56K",
      "Change %": "-3.75%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 15, 2021",
      "Price": 1792.38,
      "Open": 1848.18,
      "High": 1890.59,
      "Low": 1745.04,
      "Vol.": "1.70M",
      "Change %": "-3.07%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 16, 2021",
      "Price": 1804.85,
      "Open": 1792.08,
      "High": 1817.35,
      "Low": 1715.97,
      "Vol.": "1.81M",
      "Change %": "0.70%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 17, 2021",
      "Price": 1823.35,
      "Open": 1804.56,
      "High": 1837.88,
      "Low": 1743.62,
      "Vol.": "1.50M",
      "Change %": "1.03%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 18, 2021",
      "Price": 1776.08,
      "Open": 1823.72,
      "High": 1849.23,
      "Low": 1760.83,
      "Vol.": "1.53M",
      "Change %": "-2.59%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 19, 2021",
      "Price": 1809.64,
      "Open": 1775.87,
      "High": 1848.88,
      "Low": 1735.42,
      "Vol.": "1.20M",
      "Change %": "1.89%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 20, 2021",
      "Price": 1804.6,
      "Open": 1809.09,
      "High": 1868.09,
      "Low": 1801.6,
      "Vol.": "27.03K",
      "Change %": "-0.28%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 21, 2021",
      "Price": 1783.72,
      "Open": 1804.6,
      "High": 1815.85,
      "Low": 1748.47,
      "Vol.": "1.43M",
      "Change %": "-1.16%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 22, 2021",
      "Price": 1682.37,
      "Open": 1783.58,
      "High": 1806.62,
      "Low": 1659.28,
      "Vol.": "1.58M",
      "Change %": "-5.68%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 23, 2021",
      "Price": 1667.9,
      "Open": 1681.5,
      "High": 1720.01,
      "Low": 1654.14,
      "Vol.": "1.46M",
      "Change %": "-0.86%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 24, 2021",
      "Price": 1582.38,
      "Open": 1668.42,
      "High": 1739.82,
      "Low": 1546.48,
      "Vol.": "1.88M",
      "Change %": "-5.13%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 25, 2021",
      "Price": 1586.54,
      "Open": 1582.23,
      "High": 1621.32,
      "Low": 1550.11,
      "Vol.": "1.54M",
      "Change %": "0.26%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 26, 2021",
      "Price": 1698.6,
      "Open": 1586.36,
      "High": 1699.27,
      "Low": 1586.28,
      "Vol.": "1.64M",
      "Change %": "7.06%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 27, 2021",
      "Price": 1713.01,
      "Open": 1698.68,
      "High": 1731.73,
      "Low": 1667.12,
      "Vol.": "1.40M",
      "Change %": "0.85%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 28, 2021",
      "Price": 1686.8,
      "Open": 1712.89,
      "High": 1724.74,
      "Low": 1661.92,
      "Vol.": "1.31M",
      "Change %": "-1.53%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 29, 2021",
      "Price": 1816.69,
      "Open": 1686.88,
      "High": 1839.41,
      "Low": 1678.38,
      "Vol.": "1.94M",
      "Change %": "7.70%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 30, 2021",
      "Price": 1841.01,
      "Open": 1816.92,
      "High": 1857.65,
      "Low": 1788.6,
      "Vol.": "3.03M",
      "Change %": "1.34%",
      "FIELD8": ""
    },
    {
      "Date": "Mar 31, 2021",
      "Price": 1917.99,
      "Open": 1841.01,
      "High": 1945.4,
      "Low": 1774.66,
      "Vol.": "2.59M",
      "Change %": "4.18%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 01, 2021",
      "Price": 1967.96,
      "Open": 1918.82,
      "High": 1983.84,
      "Low": 1897.38,
      "Vol.": "2.08M",
      "Change %": "2.61%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 02, 2021",
      "Price": 2134.55,
      "Open": 1968.12,
      "High": 2144.11,
      "Low": 1949.99,
      "Vol.": "2.47M",
      "Change %": "8.47%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 03, 2021",
      "Price": 2008.59,
      "Open": 2134.66,
      "High": 2137.68,
      "Low": 2004.4,
      "Vol.": "2.01M",
      "Change %": "-5.90%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 04, 2021",
      "Price": 2075.94,
      "Open": 2007.82,
      "High": 2091.31,
      "Low": 1982,
      "Vol.": "1.59M",
      "Change %": "3.35%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 05, 2021",
      "Price": 2106.41,
      "Open": 2076.14,
      "High": 2127.89,
      "Low": 2004.05,
      "Vol.": "2.31M",
      "Change %": "1.47%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 06, 2021",
      "Price": 2111.53,
      "Open": 2108.81,
      "High": 2150.78,
      "Low": 2047.48,
      "Vol.": "1.93M",
      "Change %": "0.24%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 07, 2021",
      "Price": 1961.46,
      "Open": 2112.41,
      "High": 2128.25,
      "Low": 1939.64,
      "Vol.": "2.30M",
      "Change %": "-7.11%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 08, 2021",
      "Price": 2079.92,
      "Open": 1962.44,
      "High": 2084.08,
      "Low": 1951.83,
      "Vol.": "1.73M",
      "Change %": "6.04%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 09, 2021",
      "Price": 2066.93,
      "Open": 2080.2,
      "High": 2101.07,
      "Low": 2050.39,
      "Vol.": "2.47M",
      "Change %": "-0.62%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 10, 2021",
      "Price": 2133.79,
      "Open": 2067.26,
      "High": 2197.73,
      "Low": 2058.23,
      "Vol.": "2.09M",
      "Change %": "3.23%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 11, 2021",
      "Price": 2151.42,
      "Open": 2133.89,
      "High": 2164.76,
      "Low": 2114.55,
      "Vol.": "1.97M",
      "Change %": "0.83%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 12, 2021",
      "Price": 2137.81,
      "Open": 2150.79,
      "High": 2199.52,
      "Low": 2103.73,
      "Vol.": "2.16M",
      "Change %": "-0.63%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 13, 2021",
      "Price": 2299.93,
      "Open": 2137.55,
      "High": 2315.47,
      "Low": 2136.49,
      "Vol.": "2.38M",
      "Change %": "7.58%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 14, 2021",
      "Price": 2431.56,
      "Open": 2299.25,
      "High": 2445.4,
      "Low": 2281.49,
      "Vol.": "2.11M",
      "Change %": "5.72%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 15, 2021",
      "Price": 2514.22,
      "Open": 2432.9,
      "High": 2541.9,
      "Low": 2402.75,
      "Vol.": "1.91M",
      "Change %": "3.40%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 16, 2021",
      "Price": 2423.18,
      "Open": 2514.55,
      "High": 2544.54,
      "Low": 2302.3,
      "Vol.": "2.08M",
      "Change %": "-3.62%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 17, 2021",
      "Price": 2318.33,
      "Open": 2424.12,
      "High": 2493.93,
      "Low": 2314.12,
      "Vol.": "1.73M",
      "Change %": "-4.33%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 18, 2021",
      "Price": 2237.17,
      "Open": 2317.88,
      "High": 2338.53,
      "Low": 1948.93,
      "Vol.": "2.76M",
      "Change %": "-3.50%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 19, 2021",
      "Price": 2160.63,
      "Open": 2236.1,
      "High": 2275.87,
      "Low": 2081.3,
      "Vol.": "1.90M",
      "Change %": "-3.42%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 20, 2021",
      "Price": 2332.14,
      "Open": 2161.06,
      "High": 2345.18,
      "Low": 2058,
      "Vol.": "1.86M",
      "Change %": "7.94%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 21, 2021",
      "Price": 2360.81,
      "Open": 2331.84,
      "High": 2467.51,
      "Low": 2238.15,
      "Vol.": "2.10M",
      "Change %": "1.23%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 22, 2021",
      "Price": 2401.1,
      "Open": 2360.32,
      "High": 2642.99,
      "Low": 2313.46,
      "Vol.": "3.17M",
      "Change %": "1.71%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 23, 2021",
      "Price": 2367.31,
      "Open": 2398.95,
      "High": 2440.21,
      "Low": 2119.26,
      "Vol.": "3.46M",
      "Change %": "-1.41%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 24, 2021",
      "Price": 2215.93,
      "Open": 2367.35,
      "High": 2367.46,
      "Low": 2159.6,
      "Vol.": "1.61M",
      "Change %": "-6.39%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 25, 2021",
      "Price": 2316.48,
      "Open": 2217.23,
      "High": 2355.2,
      "Low": 2169.91,
      "Vol.": "1.02M",
      "Change %": "4.54%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 26, 2021",
      "Price": 2533.12,
      "Open": 2320.63,
      "High": 2539.8,
      "Low": 2305.97,
      "Vol.": "1.79M",
      "Change %": "9.35%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 27, 2021",
      "Price": 2665.24,
      "Open": 2531.07,
      "High": 2677.95,
      "Low": 2484.44,
      "Vol.": "1.45M",
      "Change %": "5.22%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 28, 2021",
      "Price": 2746.54,
      "Open": 2665.83,
      "High": 2759.03,
      "Low": 2562.74,
      "Vol.": "1.74M",
      "Change %": "3.05%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 29, 2021",
      "Price": 2757.36,
      "Open": 2746.51,
      "High": 2797.52,
      "Low": 2670.35,
      "Vol.": "1.65M",
      "Change %": "0.39%",
      "FIELD8": ""
    },
    {
      "Date": "Apr 30, 2021",
      "Price": 2772.78,
      "Open": 2757.02,
      "High": 2797.61,
      "Low": 2726.03,
      "Vol.": "1.52M",
      "Change %": "0.56%",
      "FIELD8": ""
    },
    {
      "Date": "May 01, 2021",
      "Price": 2944.66,
      "Open": 2772.27,
      "High": 2951.74,
      "Low": 2753.6,
      "Vol.": "1.51M",
      "Change %": "6.20%",
      "FIELD8": ""
    },
    {
      "Date": "May 02, 2021",
      "Price": 2950.33,
      "Open": 2945.04,
      "High": 2984.52,
      "Low": 2854.12,
      "Vol.": "1.30M",
      "Change %": "0.19%",
      "FIELD8": ""
    },
    {
      "Date": "May 03, 2021",
      "Price": 3429.37,
      "Open": 2950.07,
      "High": 3451.44,
      "Low": 2950.07,
      "Vol.": "2.32M",
      "Change %": "16.24%",
      "FIELD8": ""
    },
    {
      "Date": "May 04, 2021",
      "Price": 3286.71,
      "Open": 3429.48,
      "High": 3516.34,
      "Low": 3188.9,
      "Vol.": "2.74M",
      "Change %": "-4.16%",
      "FIELD8": ""
    },
    {
      "Date": "May 05, 2021",
      "Price": 3522.76,
      "Open": 3284.31,
      "High": 3540.78,
      "Low": 3228.86,
      "Vol.": "1.87M",
      "Change %": "7.18%",
      "FIELD8": ""
    },
    {
      "Date": "May 06, 2021",
      "Price": 3489.52,
      "Open": 3522.74,
      "High": 3601.59,
      "Low": 3380.6,
      "Vol.": "1.51M",
      "Change %": "-0.94%",
      "FIELD8": ""
    },
    {
      "Date": "May 07, 2021",
      "Price": 3481.22,
      "Open": 3490.83,
      "High": 3583.34,
      "Low": 3363.56,
      "Vol.": "1.35M",
      "Change %": "-0.24%",
      "FIELD8": ""
    },
    {
      "Date": "May 08, 2021",
      "Price": 3905.55,
      "Open": 3479.81,
      "High": 3952.88,
      "Low": 3453.37,
      "Vol.": "1.34M",
      "Change %": "12.19%",
      "FIELD8": ""
    },
    {
      "Date": "May 09, 2021",
      "Price": 3922.23,
      "Open": 3905.69,
      "High": 3979.77,
      "Low": 3734.44,
      "Vol.": "1.94M",
      "Change %": "0.43%",
      "FIELD8": ""
    },
    {
      "Date": "May 10, 2021",
      "Price": 3947.9,
      "Open": 3923.48,
      "High": 4203.98,
      "Low": 3669.84,
      "Vol.": "2.70M",
      "Change %": "0.65%",
      "FIELD8": ""
    },
    {
      "Date": "May 11, 2021",
      "Price": 4167.78,
      "Open": 3948.66,
      "High": 4177.53,
      "Low": 3781.86,
      "Vol.": "1.27M",
      "Change %": "5.57%",
      "FIELD8": ""
    },
    {
      "Date": "May 12, 2021",
      "Price": 3811.77,
      "Open": 4173.61,
      "High": 4366.1,
      "Low": 3794.15,
      "Vol.": "2.78M",
      "Change %": "-8.54%",
      "FIELD8": ""
    },
    {
      "Date": "May 13, 2021",
      "Price": 3719.62,
      "Open": 3807.5,
      "High": 4031.99,
      "Low": 3539.96,
      "Vol.": "3.21M",
      "Change %": "-2.42%",
      "FIELD8": ""
    },
    {
      "Date": "May 14, 2021",
      "Price": 4075.38,
      "Open": 3719.46,
      "High": 4171.76,
      "Low": 3694.54,
      "Vol.": "2.06M",
      "Change %": "9.56%",
      "FIELD8": ""
    },
    {
      "Date": "May 15, 2021",
      "Price": 3641.65,
      "Open": 4074.57,
      "High": 4129.99,
      "Low": 3639.12,
      "Vol.": "1.94M",
      "Change %": "-10.64%",
      "FIELD8": ""
    },
    {
      "Date": "May 16, 2021",
      "Price": 3582.12,
      "Open": 3643.67,
      "High": 3877.2,
      "Low": 3351.92,
      "Vol.": "2.28M",
      "Change %": "-1.63%",
      "FIELD8": ""
    },
    {
      "Date": "May 17, 2021",
      "Price": 3279.68,
      "Open": 3582.19,
      "High": 3582.27,
      "Low": 3130.12,
      "Vol.": "2.85M",
      "Change %": "-8.44%",
      "FIELD8": ""
    },
    {
      "Date": "May 18, 2021",
      "Price": 3377.55,
      "Open": 3280.5,
      "High": 3558.57,
      "Low": 3244.93,
      "Vol.": "2.30M",
      "Change %": "2.98%",
      "FIELD8": ""
    },
    {
      "Date": "May 19, 2021",
      "Price": 2435.69,
      "Open": 3376.22,
      "High": 3434.01,
      "Low": 1922.25,
      "Vol.": "6.42M",
      "Change %": "-27.89%",
      "FIELD8": ""
    },
    {
      "Date": "May 20, 2021",
      "Price": 2777.55,
      "Open": 2436.59,
      "High": 2988.52,
      "Low": 2163.4,
      "Vol.": "4.33M",
      "Change %": "14.04%",
      "FIELD8": ""
    },
    {
      "Date": "May 21, 2021",
      "Price": 2433.11,
      "Open": 2766.88,
      "High": 2931.66,
      "Low": 2111.42,
      "Vol.": "4.23M",
      "Change %": "-12.40%",
      "FIELD8": ""
    },
    {
      "Date": "May 22, 2021",
      "Price": 2291.6,
      "Open": 2433.09,
      "High": 2481.06,
      "Low": 2162.84,
      "Vol.": "2.82M",
      "Change %": "-5.82%",
      "FIELD8": ""
    },
    {
      "Date": "May 23, 2021",
      "Price": 2101.34,
      "Open": 2292.68,
      "High": 2379.89,
      "Low": 1739.91,
      "Vol.": "3.52M",
      "Change %": "-8.30%",
      "FIELD8": ""
    },
    {
      "Date": "May 24, 2021",
      "Price": 2646.79,
      "Open": 2101.3,
      "High": 2667.2,
      "Low": 2080.87,
      "Vol.": "3.24M",
      "Change %": "25.96%",
      "FIELD8": ""
    },
    {
      "Date": "May 25, 2021",
      "Price": 2705.09,
      "Open": 2647.27,
      "High": 2747.49,
      "Low": 2388.81,
      "Vol.": "3.28M",
      "Change %": "2.20%",
      "FIELD8": ""
    },
    {
      "Date": "May 26, 2021",
      "Price": 2884.66,
      "Open": 2705.69,
      "High": 2908.37,
      "Low": 2648.1,
      "Vol.": "2.66M",
      "Change %": "6.64%",
      "FIELD8": ""
    },
    {
      "Date": "May 27, 2021",
      "Price": 2735.88,
      "Open": 2885.02,
      "High": 2885.87,
      "Low": 2638.62,
      "Vol.": "2.39M",
      "Change %": "-5.16%",
      "FIELD8": ""
    },
    {
      "Date": "May 28, 2021",
      "Price": 2414.29,
      "Open": 2742.39,
      "High": 2760.17,
      "Low": 2332.43,
      "Vol.": "3.26M",
      "Change %": "-11.75%",
      "FIELD8": ""
    },
    {
      "Date": "May 29, 2021",
      "Price": 2276.07,
      "Open": 2411.68,
      "High": 2567.42,
      "Low": 2207.21,
      "Vol.": "2.94M",
      "Change %": "-5.73%",
      "FIELD8": ""
    },
    {
      "Date": "May 30, 2021",
      "Price": 2386.1,
      "Open": 2276.97,
      "High": 2465.84,
      "Low": 2181.93,
      "Vol.": "2.80M",
      "Change %": "4.83%",
      "FIELD8": ""
    },
    {
      "Date": "May 31, 2021",
      "Price": 2708.47,
      "Open": 2386.93,
      "High": 2713.98,
      "Low": 2279.42,
      "Vol.": "2.83M",
      "Change %": "13.51%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 01, 2021",
      "Price": 2633.67,
      "Open": 2707.94,
      "High": 2738.23,
      "Low": 2529.73,
      "Vol.": "2.45M",
      "Change %": "-2.76%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 02, 2021",
      "Price": 2706.1,
      "Open": 2633.74,
      "High": 2801,
      "Low": 2554.88,
      "Vol.": "2.60M",
      "Change %": "2.75%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 03, 2021",
      "Price": 2853.35,
      "Open": 2705.05,
      "High": 2889.19,
      "Low": 2666.39,
      "Vol.": "1.09M",
      "Change %": "5.44%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 04, 2021",
      "Price": 2686.5,
      "Open": 2856.63,
      "High": 2856.63,
      "Low": 2557.71,
      "Vol.": "2.47M",
      "Change %": "-5.85%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 05, 2021",
      "Price": 2628.98,
      "Open": 2688.75,
      "High": 2814.02,
      "Low": 2555.98,
      "Vol.": "2.55M",
      "Change %": "-2.14%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 06, 2021",
      "Price": 2713.66,
      "Open": 2628.43,
      "High": 2743.53,
      "Low": 2614.48,
      "Vol.": "756.36K",
      "Change %": "3.22%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 07, 2021",
      "Price": 2592.63,
      "Open": 2713.52,
      "High": 2842.88,
      "Low": 2581.24,
      "Vol.": "3.01M",
      "Change %": "-4.46%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 08, 2021",
      "Price": 2510.65,
      "Open": 2592.12,
      "High": 2618.7,
      "Low": 2320.64,
      "Vol.": "75.18K",
      "Change %": "-3.16%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 09, 2021",
      "Price": 2606.23,
      "Open": 2507.86,
      "High": 2620.74,
      "Low": 2408.37,
      "Vol.": "2.32M",
      "Change %": "3.81%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 10, 2021",
      "Price": 2469.97,
      "Open": 2607.45,
      "High": 2615.46,
      "Low": 2432.41,
      "Vol.": "1.29M",
      "Change %": "-5.23%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 11, 2021",
      "Price": 2351.45,
      "Open": 2470.04,
      "High": 2493.48,
      "Low": 2324.21,
      "Vol.": "587.18K",
      "Change %": "-4.80%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 12, 2021",
      "Price": 2368.47,
      "Open": 2351.45,
      "High": 2448.04,
      "Low": 2260.8,
      "Vol.": "1.80M",
      "Change %": "0.72%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 13, 2021",
      "Price": 2508.27,
      "Open": 2368.68,
      "High": 2547.9,
      "Low": 2311.96,
      "Vol.": "1.62M",
      "Change %": "5.90%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 14, 2021",
      "Price": 2581.48,
      "Open": 2508.49,
      "High": 2606.91,
      "Low": 2467.61,
      "Vol.": "1.79M",
      "Change %": "2.92%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 15, 2021",
      "Price": 2543.83,
      "Open": 2581.42,
      "High": 2637.9,
      "Low": 2512.39,
      "Vol.": "1.95M",
      "Change %": "-1.46%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 16, 2021",
      "Price": 2367.28,
      "Open": 2544.35,
      "High": 2552.12,
      "Low": 2353.24,
      "Vol.": "1.37M",
      "Change %": "-6.94%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 17, 2021",
      "Price": 2371.62,
      "Open": 2367.78,
      "High": 2459.11,
      "Low": 2309.08,
      "Vol.": "1.06M",
      "Change %": "0.18%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 18, 2021",
      "Price": 2229.53,
      "Open": 2372.1,
      "High": 2376.62,
      "Low": 2142.74,
      "Vol.": "778.79K",
      "Change %": "-5.99%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 19, 2021",
      "Price": 2166.91,
      "Open": 2229.53,
      "High": 2276.7,
      "Low": 2164.14,
      "Vol.": "1.08M",
      "Change %": "-2.81%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 20, 2021",
      "Price": 2243.86,
      "Open": 2166.3,
      "High": 2276.83,
      "Low": 2045.03,
      "Vol.": "1.42M",
      "Change %": "3.55%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 21, 2021",
      "Price": 1891.18,
      "Open": 2244.25,
      "High": 2257.86,
      "Low": 1868.32,
      "Vol.": "2.69M",
      "Change %": "-15.72%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 22, 2021",
      "Price": 1876.66,
      "Open": 1890.95,
      "High": 1994.32,
      "Low": 1707.24,
      "Vol.": "2.84M",
      "Change %": "-0.77%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 23, 2021",
      "Price": 1968.39,
      "Open": 1877.28,
      "High": 2043.1,
      "Low": 1823.57,
      "Vol.": "1.77M",
      "Change %": "4.89%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 24, 2021",
      "Price": 1989.14,
      "Open": 1968.76,
      "High": 2033.96,
      "Low": 1886.74,
      "Vol.": "1.64M",
      "Change %": "1.05%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 25, 2021",
      "Price": 1810.57,
      "Open": 1989.77,
      "High": 2017.47,
      "Low": 1793.47,
      "Vol.": "1.65M",
      "Change %": "-8.98%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 26, 2021",
      "Price": 1830.62,
      "Open": 1810.53,
      "High": 1850.4,
      "Low": 1719.32,
      "Vol.": "1.99M",
      "Change %": "1.11%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 27, 2021",
      "Price": 1979.88,
      "Open": 1830.42,
      "High": 1980.7,
      "Low": 1808.59,
      "Vol.": "1.87M",
      "Change %": "8.15%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 28, 2021",
      "Price": 2083.09,
      "Open": 1981.24,
      "High": 2142.84,
      "Low": 1962.89,
      "Vol.": "2.19M",
      "Change %": "5.21%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 29, 2021",
      "Price": 2158.71,
      "Open": 2083.48,
      "High": 2241.86,
      "Low": 2076.17,
      "Vol.": "898.06K",
      "Change %": "3.63%",
      "FIELD8": ""
    },
    {
      "Date": "Jun 30, 2021",
      "Price": 2273.84,
      "Open": 2158.32,
      "High": 2281.55,
      "Low": 2090.61,
      "Vol.": "1.90M",
      "Change %": "5.33%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 01, 2021",
      "Price": 2109.11,
      "Open": 2274.5,
      "High": 2274.63,
      "Low": 2077.56,
      "Vol.": "1.71M",
      "Change %": "-7.24%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 02, 2021",
      "Price": 2154.78,
      "Open": 2108.58,
      "High": 2158.7,
      "Low": 2019.75,
      "Vol.": "1.39M",
      "Change %": "2.17%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 03, 2021",
      "Price": 2224.7,
      "Open": 2154.53,
      "High": 2236.97,
      "Low": 2115.8,
      "Vol.": "1.28M",
      "Change %": "3.25%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 04, 2021",
      "Price": 2323.22,
      "Open": 2224.7,
      "High": 2386.2,
      "Low": 2222.95,
      "Vol.": "1.39M",
      "Change %": "4.43%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 05, 2021",
      "Price": 2196.16,
      "Open": 2322.6,
      "High": 2322.6,
      "Low": 2163.09,
      "Vol.": "822.95K",
      "Change %": "-5.47%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 06, 2021",
      "Price": 2322.72,
      "Open": 2196.25,
      "High": 2347.47,
      "Low": 2194.2,
      "Vol.": "1.78M",
      "Change %": "5.76%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 07, 2021",
      "Price": 2316.57,
      "Open": 2322.74,
      "High": 2402.68,
      "Low": 2296.43,
      "Vol.": "1.32M",
      "Change %": "-0.26%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 08, 2021",
      "Price": 2120.22,
      "Open": 2316.21,
      "High": 2322.47,
      "Low": 2095.92,
      "Vol.": "1.82M",
      "Change %": "-8.48%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 09, 2021",
      "Price": 2145.89,
      "Open": 2120.05,
      "High": 2185.62,
      "Low": 2066.09,
      "Vol.": "1.42M",
      "Change %": "1.21%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 10, 2021",
      "Price": 2111.12,
      "Open": 2146.15,
      "High": 2191.3,
      "Low": 2078.43,
      "Vol.": "929.32K",
      "Change %": "-1.62%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 11, 2021",
      "Price": 2139.35,
      "Open": 2110.9,
      "High": 2173.34,
      "Low": 2081.62,
      "Vol.": "724.84K",
      "Change %": "1.34%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 12, 2021",
      "Price": 2035.09,
      "Open": 2139.44,
      "High": 2167.6,
      "Low": 2008.66,
      "Vol.": "540.10K",
      "Change %": "-4.87%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 13, 2021",
      "Price": 1940.72,
      "Open": 2035.09,
      "High": 2042.61,
      "Low": 1920.62,
      "Vol.": "717.85K",
      "Change %": "-4.64%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 14, 2021",
      "Price": 1994.64,
      "Open": 1940.48,
      "High": 2017.99,
      "Low": 1868.45,
      "Vol.": "1.05M",
      "Change %": "2.78%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 15, 2021",
      "Price": 1917.21,
      "Open": 1994.73,
      "High": 2038.91,
      "Low": 1884.81,
      "Vol.": "645.06K",
      "Change %": "-3.88%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 16, 2021",
      "Price": 1878.2,
      "Open": 1917.21,
      "High": 1960.21,
      "Low": 1852.42,
      "Vol.": "619.62K",
      "Change %": "-2.03%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 17, 2021",
      "Price": 1897.98,
      "Open": 1877,
      "High": 1917.8,
      "Low": 1851.97,
      "Vol.": "623.52K",
      "Change %": "1.05%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 18, 2021",
      "Price": 1892.42,
      "Open": 1898.01,
      "High": 1988.24,
      "Low": 1881.6,
      "Vol.": "829.77K",
      "Change %": "-0.29%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 19, 2021",
      "Price": 1818.07,
      "Open": 1891.43,
      "High": 1915.15,
      "Low": 1807.19,
      "Vol.": "802.78K",
      "Change %": "-3.93%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 20, 2021",
      "Price": 1786.07,
      "Open": 1818.07,
      "High": 1840.36,
      "Low": 1720.7,
      "Vol.": "1.20M",
      "Change %": "-1.76%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 21, 2021",
      "Price": 1994.49,
      "Open": 1786.18,
      "High": 2029.51,
      "Low": 1758.64,
      "Vol.": "1.51M",
      "Change %": "11.67%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 22, 2021",
      "Price": 2024.58,
      "Open": 1994.61,
      "High": 2043.26,
      "Low": 1952.31,
      "Vol.": "1.02M",
      "Change %": "1.51%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 23, 2021",
      "Price": 2123.61,
      "Open": 2024.51,
      "High": 2129.66,
      "Low": 2000.27,
      "Vol.": "961.67K",
      "Change %": "4.89%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 24, 2021",
      "Price": 2151.85,
      "Open": 2124,
      "High": 2162.29,
      "Low": 2106.71,
      "Vol.": "907.11K",
      "Change %": "1.33%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 25, 2021",
      "Price": 2189.79,
      "Open": 2166.98,
      "High": 2195.03,
      "Low": 2108.74,
      "Vol.": "786.94K",
      "Change %": "1.76%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 26, 2021",
      "Price": 2229.53,
      "Open": 2189.74,
      "High": 2430.01,
      "Low": 2174.44,
      "Vol.": "1.89M",
      "Change %": "1.81%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 27, 2021",
      "Price": 2300.22,
      "Open": 2230.24,
      "High": 2318.68,
      "Low": 2152.92,
      "Vol.": "1.25M",
      "Change %": "3.17%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 28, 2021",
      "Price": 2299.11,
      "Open": 2300.21,
      "High": 2343.49,
      "Low": 2246.23,
      "Vol.": "968.94K",
      "Change %": "-0.05%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 29, 2021",
      "Price": 2380.93,
      "Open": 2299.46,
      "High": 2397.71,
      "Low": 2269.15,
      "Vol.": "642.75K",
      "Change %": "3.56%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 30, 2021",
      "Price": 2460.95,
      "Open": 2380.59,
      "High": 2467.4,
      "Low": 2320.8,
      "Vol.": "1.03M",
      "Change %": "3.36%",
      "FIELD8": ""
    },
    {
      "Date": "Jul 31, 2021",
      "Price": 2532.19,
      "Open": 2461.08,
      "High": 2551.68,
      "Low": 2421.7,
      "Vol.": "507.08K",
      "Change %": "2.89%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 01, 2021",
      "Price": 2556.23,
      "Open": 2530.94,
      "High": 2696.38,
      "Low": 2515.26,
      "Vol.": "1.20M",
      "Change %": "0.95%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 02, 2021",
      "Price": 2608.04,
      "Open": 2556.07,
      "High": 2664.73,
      "Low": 2513.51,
      "Vol.": "970.67K",
      "Change %": "2.03%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 03, 2021",
      "Price": 2506.65,
      "Open": 2608.01,
      "High": 2631.43,
      "Low": 2445.49,
      "Vol.": "158.45K",
      "Change %": "-3.89%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 04, 2021",
      "Price": 2725.29,
      "Open": 2506.5,
      "High": 2766.46,
      "Low": 2462.32,
      "Vol.": "1.23M",
      "Change %": "8.72%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 05, 2021",
      "Price": 2827.21,
      "Open": 2725.28,
      "High": 2842.95,
      "Low": 2533.51,
      "Vol.": "1.65M",
      "Change %": "3.74%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 06, 2021",
      "Price": 2889.43,
      "Open": 2827.23,
      "High": 2946.62,
      "Low": 2726.04,
      "Vol.": "1.06M",
      "Change %": "2.20%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 07, 2021",
      "Price": 3158,
      "Open": 2889.58,
      "High": 3169.74,
      "Low": 2867.58,
      "Vol.": "64.84K",
      "Change %": "9.29%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 08, 2021",
      "Price": 3012.07,
      "Open": 3158.3,
      "High": 3188.49,
      "Low": 2949.66,
      "Vol.": "1.25M",
      "Change %": "-4.62%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 09, 2021",
      "Price": 3162.93,
      "Open": 3011.88,
      "High": 3184.84,
      "Low": 2899.24,
      "Vol.": "1.44M",
      "Change %": "5.01%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 10, 2021",
      "Price": 3140.71,
      "Open": 3162.81,
      "High": 3232.02,
      "Low": 3057.84,
      "Vol.": "1.12M",
      "Change %": "-0.70%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 11, 2021",
      "Price": 3163.66,
      "Open": 3140.86,
      "High": 3269.7,
      "Low": 3122.67,
      "Vol.": "950.12K",
      "Change %": "0.73%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 12, 2021",
      "Price": 3043.61,
      "Open": 3160.17,
      "High": 3236.28,
      "Low": 2981.35,
      "Vol.": "965.63K",
      "Change %": "-3.79%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 13, 2021",
      "Price": 3322.43,
      "Open": 3043.2,
      "High": 3324.53,
      "Low": 3035.52,
      "Vol.": "795.54K",
      "Change %": "9.16%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 14, 2021",
      "Price": 3264.69,
      "Open": 3322.25,
      "High": 3328.38,
      "Low": 3209.45,
      "Vol.": "658.60K",
      "Change %": "-1.74%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 15, 2021",
      "Price": 3308.87,
      "Open": 3264.56,
      "High": 3318.61,
      "Low": 3115.34,
      "Vol.": "782.81K",
      "Change %": "1.35%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 16, 2021",
      "Price": 3147.65,
      "Open": 3307.96,
      "High": 3334.22,
      "Low": 3138.37,
      "Vol.": "859.09K",
      "Change %": "-4.87%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 17, 2021",
      "Price": 3014.58,
      "Open": 3147.67,
      "High": 3290.03,
      "Low": 2993.63,
      "Vol.": "1.06M",
      "Change %": "-4.23%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 18, 2021",
      "Price": 3016.91,
      "Open": 3012.62,
      "High": 3124.51,
      "Low": 2951.04,
      "Vol.": "750.74K",
      "Change %": "0.08%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 19, 2021",
      "Price": 3184.82,
      "Open": 3016.92,
      "High": 3185.51,
      "Low": 2962.04,
      "Vol.": "844.13K",
      "Change %": "5.57%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 20, 2021",
      "Price": 3284.21,
      "Open": 3184.83,
      "High": 3300.36,
      "Low": 3179.18,
      "Vol.": "739.32K",
      "Change %": "3.12%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 21, 2021",
      "Price": 3223.96,
      "Open": 3285.12,
      "High": 3307.33,
      "Low": 3200.19,
      "Vol.": "768.74K",
      "Change %": "-1.83%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 22, 2021",
      "Price": 3238.7,
      "Open": 3224.17,
      "High": 3271.94,
      "Low": 3128.98,
      "Vol.": "747.65K",
      "Change %": "0.46%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 23, 2021",
      "Price": 3319.49,
      "Open": 3238.41,
      "High": 3375.42,
      "Low": 3231.96,
      "Vol.": "1.09M",
      "Change %": "2.49%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 24, 2021",
      "Price": 3173.26,
      "Open": 3322.6,
      "High": 3357.99,
      "Low": 3150.75,
      "Vol.": "988.82K",
      "Change %": "-4.41%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 25, 2021",
      "Price": 3228.15,
      "Open": 3172.12,
      "High": 3247.43,
      "Low": 3080.7,
      "Vol.": "923.13K",
      "Change %": "1.73%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 26, 2021",
      "Price": 3093.54,
      "Open": 3228.03,
      "High": 3249.62,
      "Low": 3057.48,
      "Vol.": "118.44K",
      "Change %": "-4.17%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 27, 2021",
      "Price": 3273.58,
      "Open": 3093.78,
      "High": 3279.93,
      "Low": 3063.37,
      "Vol.": "839.54K",
      "Change %": "5.82%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 28, 2021",
      "Price": 3243.9,
      "Open": 3273.78,
      "High": 3284.58,
      "Low": 3212.24,
      "Vol.": "466.21K",
      "Change %": "-0.91%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 29, 2021",
      "Price": 3222.16,
      "Open": 3243.96,
      "High": 3282.21,
      "Low": 3155.31,
      "Vol.": "643.73K",
      "Change %": "-0.67%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 30, 2021",
      "Price": 3225.67,
      "Open": 3222.43,
      "High": 3345.72,
      "Low": 3145.53,
      "Vol.": "966.58K",
      "Change %": "0.11%",
      "FIELD8": ""
    },
    {
      "Date": "Aug 31, 2021",
      "Price": 3430.74,
      "Open": 3228.23,
      "High": 3467.42,
      "Low": 3191.34,
      "Vol.": "1.52M",
      "Change %": "6.36%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 01, 2021",
      "Price": 3832.73,
      "Open": 3429.65,
      "High": 3839.91,
      "Low": 3384.82,
      "Vol.": "1.48M",
      "Change %": "11.72%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 02, 2021",
      "Price": 3786.19,
      "Open": 3826.9,
      "High": 3833.89,
      "Low": 3723.42,
      "Vol.": "928.70K",
      "Change %": "-1.21%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 03, 2021",
      "Price": 3936.29,
      "Open": 3785.85,
      "High": 4024.89,
      "Low": 3715.97,
      "Vol.": "1.20M",
      "Change %": "3.96%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 04, 2021",
      "Price": 3884.97,
      "Open": 3938.45,
      "High": 3968.33,
      "Low": 3844.07,
      "Vol.": "672.53K",
      "Change %": "-1.30%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 05, 2021",
      "Price": 3950.62,
      "Open": 3885.4,
      "High": 3981.22,
      "Low": 3834.74,
      "Vol.": "714.16K",
      "Change %": "1.69%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 06, 2021",
      "Price": 3927.21,
      "Open": 3950.2,
      "High": 3968.2,
      "Low": 3867.55,
      "Vol.": "764.56K",
      "Change %": "-0.59%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 07, 2021",
      "Price": 3423.12,
      "Open": 3926.84,
      "High": 3945.79,
      "Low": 3061.3,
      "Vol.": "2.47M",
      "Change %": "-12.84%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 08, 2021",
      "Price": 3495.1,
      "Open": 3424.35,
      "High": 3557.67,
      "Low": 3221.6,
      "Vol.": "780.68K",
      "Change %": "2.10%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 09, 2021",
      "Price": 3423.51,
      "Open": 3498.92,
      "High": 3564.3,
      "Low": 3395.94,
      "Vol.": "1.09M",
      "Change %": "-2.05%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 10, 2021",
      "Price": 3207.27,
      "Open": 3423.87,
      "High": 3512.9,
      "Low": 3156.28,
      "Vol.": "1.21M",
      "Change %": "-6.32%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 11, 2021",
      "Price": 3267.33,
      "Open": 3209.37,
      "High": 3345.37,
      "Low": 3202.41,
      "Vol.": "732.95K",
      "Change %": "1.87%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 12, 2021",
      "Price": 3408.28,
      "Open": 3267.33,
      "High": 3469.5,
      "Low": 3231.87,
      "Vol.": "805.97K",
      "Change %": "4.31%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 13, 2021",
      "Price": 3284.52,
      "Open": 3408.17,
      "High": 3429.24,
      "Low": 3118.66,
      "Vol.": "1.34M",
      "Change %": "-3.63%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 14, 2021",
      "Price": 3428.87,
      "Open": 3284.65,
      "High": 3428.87,
      "Low": 3270.91,
      "Vol.": "720.34K",
      "Change %": "4.39%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 15, 2021",
      "Price": 3611.9,
      "Open": 3430.36,
      "High": 3612.29,
      "Low": 3361.63,
      "Vol.": "790.27K",
      "Change %": "5.34%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 16, 2021",
      "Price": 3569.43,
      "Open": 3612.23,
      "High": 3672.68,
      "Low": 3488.53,
      "Vol.": "195.79K",
      "Change %": "-1.18%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 17, 2021",
      "Price": 3398.65,
      "Open": 3569.92,
      "High": 3592.2,
      "Low": 3352.32,
      "Vol.": "748.10K",
      "Change %": "-4.78%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 18, 2021",
      "Price": 3435.97,
      "Open": 3398.55,
      "High": 3539.5,
      "Low": 3371.33,
      "Vol.": "600.19K",
      "Change %": "1.10%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 19, 2021",
      "Price": 3329.12,
      "Open": 3435.92,
      "High": 3455.67,
      "Low": 3282.85,
      "Vol.": "614.00K",
      "Change %": "-3.11%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 20, 2021",
      "Price": 2976.05,
      "Open": 3328.49,
      "High": 3344.04,
      "Low": 2931.64,
      "Vol.": "1.72M",
      "Change %": "-10.61%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 21, 2021",
      "Price": 2761.52,
      "Open": 2976.7,
      "High": 3101.88,
      "Low": 2659.71,
      "Vol.": "1.79M",
      "Change %": "-7.21%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 22, 2021",
      "Price": 3077.78,
      "Open": 2764.71,
      "High": 3087.97,
      "Low": 2740.58,
      "Vol.": "1.19M",
      "Change %": "11.45%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 23, 2021",
      "Price": 3152.92,
      "Open": 3077.8,
      "High": 3173,
      "Low": 3035.96,
      "Vol.": "841.54K",
      "Change %": "2.44%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 24, 2021",
      "Price": 2928.57,
      "Open": 3152.92,
      "High": 3158.38,
      "Low": 2740.06,
      "Vol.": "1.74M",
      "Change %": "-7.12%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 25, 2021",
      "Price": 2922.55,
      "Open": 2928.59,
      "High": 2965.48,
      "Low": 2812.7,
      "Vol.": "975.49K",
      "Change %": "-0.21%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 26, 2021",
      "Price": 3063.51,
      "Open": 2922.47,
      "High": 3113.65,
      "Low": 2740.12,
      "Vol.": "1.33M",
      "Change %": "4.82%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 27, 2021",
      "Price": 2926.24,
      "Open": 3061.86,
      "High": 3163.86,
      "Low": 2926.24,
      "Vol.": "865.30K",
      "Change %": "-4.48%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 28, 2021",
      "Price": 2807.28,
      "Open": 2926.04,
      "High": 2969.18,
      "Low": 2791.42,
      "Vol.": "896.28K",
      "Change %": "-4.07%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 29, 2021",
      "Price": 2851.5,
      "Open": 2807.15,
      "High": 2948.5,
      "Low": 2784.66,
      "Vol.": "728.86K",
      "Change %": "1.57%",
      "FIELD8": ""
    },
    {
      "Date": "Sep 30, 2021",
      "Price": 3000.59,
      "Open": 2851.06,
      "High": 3047.08,
      "Low": 2837.68,
      "Vol.": "968.23K",
      "Change %": "5.23%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 01, 2021",
      "Price": 3309.13,
      "Open": 2999.86,
      "High": 3329.32,
      "Low": 2972.75,
      "Vol.": "1.14M",
      "Change %": "10.28%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 02, 2021",
      "Price": 3388.97,
      "Open": 3309.14,
      "High": 3467.95,
      "Low": 3265.97,
      "Vol.": "778.15K",
      "Change %": "2.41%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 03, 2021",
      "Price": 3417.34,
      "Open": 3388.83,
      "High": 3485.48,
      "Low": 3346.63,
      "Vol.": "642.59K",
      "Change %": "0.84%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 04, 2021",
      "Price": 3382.9,
      "Open": 3417.26,
      "High": 3436.34,
      "Low": 3273.22,
      "Vol.": "826.83K",
      "Change %": "-1.01%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 05, 2021",
      "Price": 3517.26,
      "Open": 3383.32,
      "High": 3540.83,
      "Low": 3365.28,
      "Vol.": "663.88K",
      "Change %": "3.97%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 06, 2021",
      "Price": 3575.41,
      "Open": 3515.35,
      "High": 3627.19,
      "Low": 3345.56,
      "Vol.": "1.05M",
      "Change %": "1.65%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 07, 2021",
      "Price": 3586,
      "Open": 3575.43,
      "High": 3650.18,
      "Low": 3473.47,
      "Vol.": "826.29K",
      "Change %": "0.30%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 08, 2021",
      "Price": 3559.42,
      "Open": 3586.91,
      "High": 3668.35,
      "Low": 3537.24,
      "Vol.": "681.74K",
      "Change %": "-0.74%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 09, 2021",
      "Price": 3574.2,
      "Open": 3559.96,
      "High": 3626.11,
      "Low": 3541.4,
      "Vol.": "464.11K",
      "Change %": "0.42%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 10, 2021",
      "Price": 3415.03,
      "Open": 3574.52,
      "High": 3599.18,
      "Low": 3409.22,
      "Vol.": "767.49K",
      "Change %": "-4.45%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 11, 2021",
      "Price": 3545.06,
      "Open": 3414.93,
      "High": 3622.53,
      "Low": 3381.43,
      "Vol.": "683.24K",
      "Change %": "3.81%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 12, 2021",
      "Price": 3489.9,
      "Open": 3541.49,
      "High": 3545.35,
      "Low": 3404.49,
      "Vol.": "609.89K",
      "Change %": "-1.56%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 13, 2021",
      "Price": 3607.28,
      "Open": 3491.08,
      "High": 3612.04,
      "Low": 3416,
      "Vol.": "557.18K",
      "Change %": "3.36%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 14, 2021",
      "Price": 3790.41,
      "Open": 3607.36,
      "High": 3820.47,
      "Low": 3588.24,
      "Vol.": "697.09K",
      "Change %": "5.08%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 15, 2021",
      "Price": 3866.9,
      "Open": 3790.34,
      "High": 3904.91,
      "Low": 3735.21,
      "Vol.": "721.14K",
      "Change %": "2.02%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 16, 2021",
      "Price": 3827.55,
      "Open": 3869.05,
      "High": 3967.43,
      "Low": 3804.55,
      "Vol.": "527.61K",
      "Change %": "-1.02%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 17, 2021",
      "Price": 3845.47,
      "Open": 3827.55,
      "High": 3917.56,
      "Low": 3664.63,
      "Vol.": "543.52K",
      "Change %": "0.47%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 18, 2021",
      "Price": 3747.6,
      "Open": 3848.64,
      "High": 3892.01,
      "Low": 3685.82,
      "Vol.": "578.21K",
      "Change %": "-2.55%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 19, 2021",
      "Price": 3876.78,
      "Open": 3745.46,
      "High": 3884.34,
      "Low": 3733.78,
      "Vol.": "488.60K",
      "Change %": "3.45%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 20, 2021",
      "Price": 4159.89,
      "Open": 3876.76,
      "High": 4168.12,
      "Low": 3830.26,
      "Vol.": "752.03K",
      "Change %": "7.30%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 21, 2021",
      "Price": 4054.16,
      "Open": 4160.51,
      "High": 4366.91,
      "Low": 4029.48,
      "Vol.": "1.14M",
      "Change %": "-2.54%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 22, 2021",
      "Price": 3970.94,
      "Open": 4053.89,
      "High": 4164.11,
      "Low": 3896.4,
      "Vol.": "654.77K",
      "Change %": "-2.05%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 23, 2021",
      "Price": 4168.85,
      "Open": 3970.94,
      "High": 4169.33,
      "Low": 3938.79,
      "Vol.": "487.03K",
      "Change %": "4.98%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 24, 2021",
      "Price": 4082.8,
      "Open": 4168.8,
      "High": 4184,
      "Low": 3965.84,
      "Vol.": "507.63K",
      "Change %": "-2.06%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 25, 2021",
      "Price": 4219.92,
      "Open": 4082.68,
      "High": 4234.76,
      "Low": 4069.94,
      "Vol.": "481.41K",
      "Change %": "3.36%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 26, 2021",
      "Price": 4129.51,
      "Open": 4219.92,
      "High": 4291.98,
      "Low": 4098.19,
      "Vol.": "559.29K",
      "Change %": "-2.14%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 27, 2021",
      "Price": 3921.93,
      "Open": 4130.06,
      "High": 4299.61,
      "Low": 3914.06,
      "Vol.": "1.07M",
      "Change %": "-5.03%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 28, 2021",
      "Price": 4284.9,
      "Open": 3921.54,
      "High": 4289.8,
      "Low": 3896.33,
      "Vol.": "865.80K",
      "Change %": "9.25%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 29, 2021",
      "Price": 4413.7,
      "Open": 4284.9,
      "High": 4458.3,
      "Low": 4268.21,
      "Vol.": "781.57K",
      "Change %": "3.01%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 30, 2021",
      "Price": 4320.65,
      "Open": 4413.7,
      "High": 4428.41,
      "Low": 4250.24,
      "Vol.": "494.87K",
      "Change %": "-2.11%",
      "FIELD8": ""
    },
    {
      "Date": "Oct 31, 2021",
      "Price": 4287.56,
      "Open": 4322,
      "High": 4393.61,
      "Low": 4169.48,
      "Vol.": "555.32K",
      "Change %": "-0.77%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 01, 2021",
      "Price": 4320.85,
      "Open": 4287.41,
      "High": 4376.94,
      "Low": 4157.51,
      "Vol.": "574.26K",
      "Change %": "0.78%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 02, 2021",
      "Price": 4586.06,
      "Open": 4320.85,
      "High": 4598.38,
      "Low": 4287.36,
      "Vol.": "630.26K",
      "Change %": "6.14%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 03, 2021",
      "Price": 4602.21,
      "Open": 4586.96,
      "High": 4661.88,
      "Low": 4458.87,
      "Vol.": "634.68K",
      "Change %": "0.35%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 04, 2021",
      "Price": 4535.11,
      "Open": 4601.93,
      "High": 4604.83,
      "Low": 4421.87,
      "Vol.": "495.86K",
      "Change %": "-1.46%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 05, 2021",
      "Price": 4475,
      "Open": 4534.96,
      "High": 4569.31,
      "Low": 4439.67,
      "Vol.": "409.75K",
      "Change %": "-1.33%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 06, 2021",
      "Price": 4517.36,
      "Open": 4475,
      "High": 4526.75,
      "Low": 4330.29,
      "Vol.": "442.60K",
      "Change %": "0.95%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 07, 2021",
      "Price": 4612.06,
      "Open": 4517.27,
      "High": 4634.39,
      "Low": 4502.7,
      "Vol.": "337.81K",
      "Change %": "2.10%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 08, 2021",
      "Price": 4808.38,
      "Open": 4612.05,
      "High": 4822.97,
      "Low": 4612.05,
      "Vol.": "673.21K",
      "Change %": "4.26%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 09, 2021",
      "Price": 4731.83,
      "Open": 4808.34,
      "High": 4836.69,
      "Low": 4715.43,
      "Vol.": "437.41K",
      "Change %": "-1.59%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 10, 2021",
      "Price": 4634.03,
      "Open": 4731.83,
      "High": 4864.06,
      "Low": 4498.78,
      "Vol.": "761.90K",
      "Change %": "-2.07%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 11, 2021",
      "Price": 4720.87,
      "Open": 4633.98,
      "High": 4778.17,
      "Low": 4578.66,
      "Vol.": "418.61K",
      "Change %": "1.87%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 12, 2021",
      "Price": 4667.31,
      "Open": 4720.5,
      "High": 4807.16,
      "Low": 4511.96,
      "Vol.": "634.59K",
      "Change %": "-1.13%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 13, 2021",
      "Price": 4644.61,
      "Open": 4665.76,
      "High": 4705.02,
      "Low": 4585.37,
      "Vol.": "290.27K",
      "Change %": "-0.49%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 14, 2021",
      "Price": 4625.59,
      "Open": 4644.4,
      "High": 4692.76,
      "Low": 4514.95,
      "Vol.": "340.96K",
      "Change %": "-0.41%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 15, 2021",
      "Price": 4562.98,
      "Open": 4625.71,
      "High": 4769.38,
      "Low": 4543.47,
      "Vol.": "495.96K",
      "Change %": "-1.35%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 16, 2021",
      "Price": 4208.16,
      "Open": 4562.97,
      "High": 4562.97,
      "Low": 4115.31,
      "Vol.": "1.12M",
      "Change %": "-7.78%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 17, 2021",
      "Price": 4290.88,
      "Open": 4208.29,
      "High": 4298.3,
      "Low": 4071.01,
      "Vol.": "664.94K",
      "Change %": "1.97%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 18, 2021",
      "Price": 4001.87,
      "Open": 4290.31,
      "High": 4342.74,
      "Low": 3958.44,
      "Vol.": "792.38K",
      "Change %": "-6.74%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 19, 2021",
      "Price": 4295.43,
      "Open": 3996.29,
      "High": 4305.41,
      "Low": 3978.08,
      "Vol.": "571.96K",
      "Change %": "7.34%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 20, 2021",
      "Price": 4408.85,
      "Open": 4295.27,
      "High": 4434.27,
      "Low": 4206.75,
      "Vol.": "462.99K",
      "Change %": "2.64%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 21, 2021",
      "Price": 4268.08,
      "Open": 4409.02,
      "High": 4422.6,
      "Low": 4246.2,
      "Vol.": "446.23K",
      "Change %": "-3.19%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 22, 2021",
      "Price": 4086.95,
      "Open": 4268.07,
      "High": 4311.46,
      "Low": 4026.75,
      "Vol.": "717.08K",
      "Change %": "-4.24%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 23, 2021",
      "Price": 4340.23,
      "Open": 4086.73,
      "High": 4384.75,
      "Low": 4064.17,
      "Vol.": "684.35K",
      "Change %": "6.20%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 24, 2021",
      "Price": 4273.54,
      "Open": 4340.23,
      "High": 4372.83,
      "Low": 4172.19,
      "Vol.": "595.96K",
      "Change %": "-1.54%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 25, 2021",
      "Price": 4520.3,
      "Open": 4270.73,
      "High": 4549.74,
      "Low": 4248.9,
      "Vol.": "578.65K",
      "Change %": "5.77%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 26, 2021",
      "Price": 4034.53,
      "Open": 4520.3,
      "High": 4548.1,
      "Low": 3917.43,
      "Vol.": "1.00M",
      "Change %": "-10.75%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 27, 2021",
      "Price": 4094.8,
      "Open": 4037.06,
      "High": 4183.02,
      "Low": 4029.06,
      "Vol.": "370.73K",
      "Change %": "1.49%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 28, 2021",
      "Price": 4296.98,
      "Open": 4095.16,
      "High": 4297.63,
      "Low": 3980.24,
      "Vol.": "487.53K",
      "Change %": "4.94%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 29, 2021",
      "Price": 4443.22,
      "Open": 4296.98,
      "High": 4456.82,
      "Low": 4280.18,
      "Vol.": "532.66K",
      "Change %": "3.40%",
      "FIELD8": ""
    },
    {
      "Date": "Nov 30, 2021",
      "Price": 4628.9,
      "Open": 4443.22,
      "High": 4749.12,
      "Low": 4349.21,
      "Vol.": "973.46K",
      "Change %": "4.18%",
      "FIELD8": ""
    },
    {
      "Date": "Dec 01, 2021",
      "Price": 4583.28,
      "Open": 4628.72,
      "High": 4778.14,
      "Low": 4525.33,
      "Vol.": "669.18K",
      "Change %": "-0.99%",
      "FIELD8": ""
    },
    {
      "Date": "Dec 02, 2021",
      "Price": 4512.9,
      "Open": 4583.28,
      "High": 4629.75,
      "Low": 4437.53,
      "Vol.": "608.07K",
      "Change %": "-1.54%",
      "FIELD8": ""
    },
    {
      "Date": "Dec 03, 2021",
      "Price": 4219.3,
      "Open": 4512.9,
      "High": 4646.73,
      "Low": 4047.07,
      "Vol.": "942.77K",
      "Change %": "-6.51%",
      "FIELD8": ""
    },
    {
      "Date": "Dec 04, 2021",
      "Price": 4123.46,
      "Open": 4219.3,
      "High": 4237.56,
      "Low": 3533.02,
      "Vol.": "1.52M",
      "Change %": "-2.27%",
      "FIELD8": ""
    },
    {
      "Date": "Dec 05, 2021",
      "Price": 4194.8,
      "Open": 4118.27,
      "High": 4247.38,
      "Low": 4036,
      "Vol.": "707.69K",
      "Change %": "1.73%",
      "FIELD8": ""
    },
    {
      "Date": "Dec 06, 2021",
      "Price": 4353.31,
      "Open": 4194.95,
      "High": 4373.23,
      "Low": 3922.65,
      "Vol.": "993.79K",
      "Change %": "3.78%",
      "FIELD8": ""
    },
    {
      "Date": "Dec 07, 2021",
      "Price": 4307.08,
      "Open": 4351.36,
      "High": 4424.2,
      "Low": 4259.45,
      "Vol.": "550.78K",
      "Change %": "-1.06%",
      "FIELD8": ""
    },
    {
      "Date": "Dec 08, 2021",
      "Price": 4435.74,
      "Open": 4307.08,
      "High": 4449.69,
      "Low": 4229.63,
      "Vol.": "574.33K",
      "Change %": "2.99%",
      "FIELD8": ""
    },
    {
      "Date": "Dec 09, 2021",
      "Price": 4107.69,
      "Open": 4435.74,
      "High": 4482.89,
      "Low": 4078.14,
      "Vol.": "642.17K",
      "Change %": "-7.40%",
      "FIELD8": ""
    },
    {
      "Date": "Dec 10, 2021",
      "Price": 3903.48,
      "Open": 4107.2,
      "High": 4226.79,
      "Low": 3894.03,
      "Vol.": "798.12K",
      "Change %": "-4.97%",
      "FIELD8": ""
    },
    {
      "Date": "Dec 11, 2021",
      "Price": 4075.66,
      "Open": 3903.52,
      "High": 4094.92,
      "Low": 3836.92,
      "Vol.": "581.26K",
      "Change %": "4.41%",
      "FIELD8": ""
    },
    {
      "Date": "Dec 12, 2021",
      "Price": 4131.78,
      "Open": 4078.17,
      "High": 4173.21,
      "Low": 3988.29,
      "Vol.": "360.45K",
      "Change %": "1.38%",
      "FIELD8": ""
    },
    {
      "Date": "Dec 13, 2021",
      "Price": 3781.94,
      "Open": 4131.47,
      "High": 4141.27,
      "Low": 3673.19,
      "Vol.": "891.67K",
      "Change %": "-8.47%",
      "FIELD8": ""
    },
    {
      "Date": "Dec 14, 2021",
      "Price": 3861.55,
      "Open": 3782.12,
      "High": 3879.43,
      "Low": 3690.06,
      "Vol.": "577.61K",
      "Change %": "2.11%",
      "FIELD8": ""
    },
    {
      "Date": "Dec 15, 2021",
      "Price": 4019.24,
      "Open": 3860.51,
      "High": 4090.15,
      "Low": 3649.69,
      "Vol.": "821.22K",
      "Change %": "4.08%",
      "FIELD8": ""
    },
    {
      "Date": "Dec 16, 2021",
      "Price": 3956.62,
      "Open": 4019.57,
      "High": 4108.24,
      "Low": 3955.46,
      "Vol.": "512.12K",
      "Change %": "-1.56%",
      "FIELD8": ""
    },
    {
      "Date": "Dec 17, 2021",
      "Price": 3871.04,
      "Open": 3957.12,
      "High": 3993.87,
      "Low": 3702.33,
      "Vol.": "654.63K",
      "Change %": "-2.16%",
      "FIELD8": ""
    }
   ]

 
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
          dataKey="Price"
          stroke="#051b2d"
          activeDot={{ r: 8 }}
        />
         <Line
          type="monotone"
          dataKey="High"
          stroke="red"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="Low"
          stroke="green"
          activeDot={{ r: 8 }}
        />
        <Brush dataKey="Date" height={30} stroke="#8884d8" />
      </LineChart>
    </>
  );
};

export default Chart;
