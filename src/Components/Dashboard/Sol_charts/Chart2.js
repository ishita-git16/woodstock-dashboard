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
  // var min1 = Infinity ;
  // var max1 = 0;
  // const date_ = moment(new Date()).format("YYYY-MM-DD");
  // const dates = convert(date_);
  const [ethData, setEthData] = useState([]);
  // const [newdata, setNewdata] = useState([]);  
  // const [rangeStart, setRangeStart] = React.useState(new Date)
  // const defaultEndDate = new Date()
  // defaultEndDate.setDate(defaultEndDate.getDate() + 7)
  // const [rangeEnd, setRangeEnd] = React.useState(defaultEndDate)
  // const today = new Date()
  const data = [
    {
      "Date": "Jan 01, 2021",
      "Price": 1.84,
      "Open": 1.514,
      "High": 1.837,
      "Low": 1.507,
      "Vol.": "-",
      "Change %": "21.34%",
      "Helper": 329
    },
    {
      "Date": "Jan 02, 2021",
      "Price": 1.8,
      "Open": 1.837,
      "High": 1.986,
      "Low": 1.733,
      "Vol.": "-",
      "Change %": "-2.22%",
      "Helper": 328
    },
    {
      "Date": "Jan 03, 2021",
      "Price": 2.16,
      "Open": 1.796,
      "High": 2.295,
      "Low": 1.796,
      "Vol.": "-",
      "Change %": "20.27%",
      "Helper": 327
    },
    {
      "Date": "Jan 04, 2021",
      "Price": 2.49,
      "Open": 2.161,
      "High": 2.489,
      "Low": 1.945,
      "Vol.": "-",
      "Change %": "15.18%",
      "Helper": 326
    },
    {
      "Date": "Jan 05, 2021",
      "Price": 2.16,
      "Open": 2.489,
      "High": 2.489,
      "Low": 2.093,
      "Vol.": "-",
      "Change %": "-13.39%",
      "Helper": 325
    },
    {
      "Date": "Jan 06, 2021",
      "Price": 1.93,
      "Open": 2.155,
      "High": 2.165,
      "Low": 1.934,
      "Vol.": "-",
      "Change %": "-10.29%",
      "Helper": 324
    },
    {
      "Date": "Jan 07, 2021",
      "Price": 2.36,
      "Open": 1.934,
      "High": 2.412,
      "Low": 1.934,
      "Vol.": "-",
      "Change %": "22.00%",
      "Helper": 323
    },
    {
      "Date": "Jan 08, 2021",
      "Price": 3.89,
      "Open": 2.359,
      "High": 3.889,
      "Low": 2.184,
      "Vol.": "-",
      "Change %": "64.83%",
      "Helper": 322
    },
    {
      "Date": "Jan 09, 2021",
      "Price": 3,
      "Open": 3.889,
      "High": 3.889,
      "Low": 2.9,
      "Vol.": "-",
      "Change %": "-22.85%",
      "Helper": 321
    },
    {
      "Date": "Jan 10, 2021",
      "Price": 3.05,
      "Open": 3,
      "High": 3.7,
      "Low": 3,
      "Vol.": "-",
      "Change %": "1.76%",
      "Helper": 320
    },
    {
      "Date": "Jan 11, 2021",
      "Price": 3.11,
      "Open": 3.053,
      "High": 3.154,
      "Low": 2.616,
      "Vol.": "-",
      "Change %": "1.77%",
      "Helper": 319
    },
    {
      "Date": "Jan 12, 2021",
      "Price": 3.63,
      "Open": 3.107,
      "High": 3.831,
      "Low": 3.088,
      "Vol.": "-",
      "Change %": "16.88%",
      "Helper": 318
    },
    {
      "Date": "Jan 13, 2021",
      "Price": 3.52,
      "Open": 3.631,
      "High": 3.631,
      "Low": 3.313,
      "Vol.": "-",
      "Change %": "-3.14%",
      "Helper": 317
    },
    {
      "Date": "Jan 14, 2021",
      "Price": 3.28,
      "Open": 3.517,
      "High": 3.543,
      "Low": 3.208,
      "Vol.": "-",
      "Change %": "-6.63%",
      "Helper": 316
    },
    {
      "Date": "Jan 15, 2021",
      "Price": 3.3,
      "Open": 3.284,
      "High": 3.425,
      "Low": 3,
      "Vol.": "-",
      "Change %": "0.48%",
      "Helper": 315
    },
    {
      "Date": "Jan 16, 2021",
      "Price": 3.45,
      "Open": 3.3,
      "High": 3.68,
      "Low": 3.3,
      "Vol.": "-",
      "Change %": "4.50%",
      "Helper": 314
    },
    {
      "Date": "Jan 17, 2021",
      "Price": 3.83,
      "Open": 3.449,
      "High": 3.963,
      "Low": 3.362,
      "Vol.": "-",
      "Change %": "10.99%",
      "Helper": 313
    },
    {
      "Date": "Jan 18, 2021",
      "Price": 3.78,
      "Open": 3.827,
      "High": 4.111,
      "Low": 3.02,
      "Vol.": "-",
      "Change %": "-1.13%",
      "Helper": 312
    },
    {
      "Date": "Jan 19, 2021",
      "Price": 3.65,
      "Open": 3.784,
      "High": 3.996,
      "Low": 3.622,
      "Vol.": "-",
      "Change %": "-3.62%",
      "Helper": 311
    },
    {
      "Date": "Jan 20, 2021",
      "Price": 3.72,
      "Open": 3.647,
      "High": 3.726,
      "Low": 3.382,
      "Vol.": "-",
      "Change %": "2.08%",
      "Helper": 310
    },
    {
      "Date": "Jan 21, 2021",
      "Price": 2.99,
      "Open": 3.723,
      "High": 3.723,
      "Low": 2.985,
      "Vol.": "-",
      "Change %": "-19.83%",
      "Helper": 309
    },
    {
      "Date": "Jan 22, 2021",
      "Price": 3.34,
      "Open": 2.985,
      "High": 3.485,
      "Low": 2.661,
      "Vol.": "-",
      "Change %": "11.87%",
      "Helper": 308
    },
    {
      "Date": "Jan 23, 2021",
      "Price": 3.5,
      "Open": 3.339,
      "High": 3.583,
      "Low": 3.328,
      "Vol.": "-",
      "Change %": "4.85%",
      "Helper": 307
    },
    {
      "Date": "Jan 24, 2021",
      "Price": 3.62,
      "Open": 3.501,
      "High": 3.78,
      "Low": 3.501,
      "Vol.": "-",
      "Change %": "3.51%",
      "Helper": 306
    },
    {
      "Date": "Jan 25, 2021",
      "Price": 3.72,
      "Open": 3.624,
      "High": 3.953,
      "Low": 3.473,
      "Vol.": "-",
      "Change %": "2.64%",
      "Helper": 305
    },
    {
      "Date": "Jan 26, 2021",
      "Price": 4.04,
      "Open": 3.72,
      "High": 4.062,
      "Low": 3.714,
      "Vol.": "-",
      "Change %": "8.53%",
      "Helper": 304
    },
    {
      "Date": "Jan 27, 2021",
      "Price": 3.69,
      "Open": 4.037,
      "High": 4.037,
      "Low": 3.652,
      "Vol.": "-",
      "Change %": "-8.64%",
      "Helper": 303
    },
    {
      "Date": "Jan 28, 2021",
      "Price": 3.82,
      "Open": 3.688,
      "High": 3.907,
      "Low": 3.62,
      "Vol.": "-",
      "Change %": "3.54%",
      "Helper": 302
    },
    {
      "Date": "Jan 29, 2021",
      "Price": 3.84,
      "Open": 3.819,
      "High": 3.871,
      "Low": 3.638,
      "Vol.": "-",
      "Change %": "0.60%",
      "Helper": 301
    },
    {
      "Date": "Jan 30, 2021",
      "Price": 4.23,
      "Open": 3.842,
      "High": 4.271,
      "Low": 3.797,
      "Vol.": "-",
      "Change %": "10.15%",
      "Helper": 300
    },
    {
      "Date": "Jan 31, 2021",
      "Price": 4.27,
      "Open": 4.232,
      "High": 4.781,
      "Low": 4.197,
      "Vol.": "-",
      "Change %": "0.86%",
      "Helper": 299
    },
    {
      "Date": "Feb 01, 2021",
      "Price": 4.62,
      "Open": 4.268,
      "High": 4.622,
      "Low": 4.128,
      "Vol.": "-",
      "Change %": "8.29%",
      "Helper": 298
    },
    {
      "Date": "Feb 02, 2021",
      "Price": 5.26,
      "Open": 4.622,
      "High": 5.335,
      "Low": 4.489,
      "Vol.": "-",
      "Change %": "13.75%",
      "Helper": 297
    },
    {
      "Date": "Feb 03, 2021",
      "Price": 5.72,
      "Open": 5.257,
      "High": 5.77,
      "Low": 5.097,
      "Vol.": "-",
      "Change %": "8.77%",
      "Helper": 296
    },
    {
      "Date": "Feb 04, 2021",
      "Price": 6.42,
      "Open": 5.722,
      "High": 6.511,
      "Low": 5.61,
      "Vol.": "-",
      "Change %": "12.26%",
      "Helper": 295
    },
    {
      "Date": "Feb 05, 2021",
      "Price": 6.5,
      "Open": 6.421,
      "High": 7.077,
      "Low": 4.848,
      "Vol.": "-",
      "Change %": "1.25%",
      "Helper": 294
    },
    {
      "Date": "Feb 06, 2021",
      "Price": 6.12,
      "Open": 6.5,
      "High": 6.89,
      "Low": 5.788,
      "Vol.": "-",
      "Change %": "-5.85%",
      "Helper": 293
    },
    {
      "Date": "Feb 07, 2021",
      "Price": 6.7,
      "Open": 6.12,
      "High": 6.846,
      "Low": 5.817,
      "Vol.": "-",
      "Change %": "9.54%",
      "Helper": 292
    },
    {
      "Date": "Feb 08, 2021",
      "Price": 7.88,
      "Open": 6.704,
      "High": 8.039,
      "Low": 6.498,
      "Vol.": "-",
      "Change %": "17.53%",
      "Helper": 291
    },
    {
      "Date": "Feb 09, 2021",
      "Price": 7.84,
      "Open": 7.879,
      "High": 8.444,
      "Low": 7.654,
      "Vol.": "-",
      "Change %": "-0.54%",
      "Helper": 290
    },
    {
      "Date": "Feb 10, 2021",
      "Price": 8.95,
      "Open": 7.836,
      "High": 9.06,
      "Low": 7.557,
      "Vol.": "-",
      "Change %": "14.21%",
      "Helper": 289
    },
    {
      "Date": "Feb 11, 2021",
      "Price": 9.19,
      "Open": 8.95,
      "High": 10.1,
      "Low": 8.875,
      "Vol.": "-",
      "Change %": "2.63%",
      "Helper": 288
    },
    {
      "Date": "Feb 12, 2021",
      "Price": 9.21,
      "Open": 9.185,
      "High": 9.914,
      "Low": 9.08,
      "Vol.": "-",
      "Change %": "0.27%",
      "Helper": 287
    },
    {
      "Date": "Feb 13, 2021",
      "Price": 8.67,
      "Open": 9.21,
      "High": 9.488,
      "Low": 8.669,
      "Vol.": "-",
      "Change %": "-5.87%",
      "Helper": 286
    },
    {
      "Date": "Feb 14, 2021",
      "Price": 8.74,
      "Open": 8.669,
      "High": 9.116,
      "Low": 8.604,
      "Vol.": "-",
      "Change %": "0.76%",
      "Helper": 285
    },
    {
      "Date": "Feb 15, 2021",
      "Price": 8.85,
      "Open": 8.735,
      "High": 9.29,
      "Low": 7.904,
      "Vol.": "-",
      "Change %": "1.27%",
      "Helper": 284
    },
    {
      "Date": "Feb 16, 2021",
      "Price": 8.3,
      "Open": 8.846,
      "High": 8.899,
      "Low": 8.081,
      "Vol.": "-",
      "Change %": "-6.17%",
      "Helper": 283
    },
    {
      "Date": "Feb 17, 2021",
      "Price": 8.24,
      "Open": 8.3,
      "High": 8.41,
      "Low": 7.634,
      "Vol.": "-",
      "Change %": "-0.77%",
      "Helper": 282
    },
    {
      "Date": "Feb 18, 2021",
      "Price": 8.98,
      "Open": 8.236,
      "High": 9.17,
      "Low": 8.236,
      "Vol.": "-",
      "Change %": "9.09%",
      "Helper": 281
    },
    {
      "Date": "Feb 19, 2021",
      "Price": 11.44,
      "Open": 8.984,
      "High": 11.499,
      "Low": 8.644,
      "Vol.": "-",
      "Change %": "27.38%",
      "Helper": 280
    },
    {
      "Date": "Feb 20, 2021",
      "Price": 10.01,
      "Open": 11.444,
      "High": 11.444,
      "Low": 9.924,
      "Vol.": "-",
      "Change %": "-12.57%",
      "Helper": 279
    },
    {
      "Date": "Feb 21, 2021",
      "Price": 11.07,
      "Open": 10.005,
      "High": 11.495,
      "Low": 10.005,
      "Vol.": "-",
      "Change %": "10.68%",
      "Helper": 278
    },
    {
      "Date": "Feb 22, 2021",
      "Price": 14.51,
      "Open": 11.074,
      "High": 14.512,
      "Low": 9.78,
      "Vol.": "-",
      "Change %": "31.05%",
      "Helper": 277
    },
    {
      "Date": "Feb 23, 2021",
      "Price": 15.09,
      "Open": 14.512,
      "High": 16.11,
      "Low": 12.003,
      "Vol.": "-",
      "Change %": "3.97%",
      "Helper": 276
    },
    {
      "Date": "Feb 24, 2021",
      "Price": 17.17,
      "Open": 15.089,
      "High": 20,
      "Low": 14,
      "Vol.": "-",
      "Change %": "13.77%",
      "Helper": 275
    },
    {
      "Date": "Feb 25, 2021",
      "Price": 14,
      "Open": 17.167,
      "High": 17.616,
      "Low": 14,
      "Vol.": "-",
      "Change %": "-18.45%",
      "Helper": 274
    },
    {
      "Date": "Feb 26, 2021",
      "Price": 13.58,
      "Open": 14,
      "High": 15.352,
      "Low": 13.368,
      "Vol.": "-",
      "Change %": "-3.03%",
      "Helper": 273
    },
    {
      "Date": "Feb 27, 2021",
      "Price": 13.22,
      "Open": 13.576,
      "High": 14.45,
      "Low": 13.157,
      "Vol.": "-",
      "Change %": "-2.66%",
      "Helper": 272
    },
    {
      "Date": "Feb 28, 2021",
      "Price": 13.06,
      "Open": 13.215,
      "High": 13.658,
      "Low": 11.572,
      "Vol.": "-",
      "Change %": "-1.15%",
      "Helper": 271
    },
    {
      "Date": "Mar 01, 2021",
      "Price": 14.98,
      "Open": 13.063,
      "High": 15.378,
      "Low": 13.063,
      "Vol.": "-",
      "Change %": "14.70%",
      "Helper": 270
    },
    {
      "Date": "Mar 02, 2021",
      "Price": 13.97,
      "Open": 14.983,
      "High": 15.182,
      "Low": 13.522,
      "Vol.": "-",
      "Change %": "-6.73%",
      "Helper": 269
    },
    {
      "Date": "Mar 03, 2021",
      "Price": 14.13,
      "Open": 13.975,
      "High": 14.562,
      "Low": 13.846,
      "Vol.": "-",
      "Change %": "1.12%",
      "Helper": 268
    },
    {
      "Date": "Mar 04, 2021",
      "Price": 13.11,
      "Open": 14.131,
      "High": 14.142,
      "Low": 12.806,
      "Vol.": "-",
      "Change %": "-7.21%",
      "Helper": 267
    },
    {
      "Date": "Mar 05, 2021",
      "Price": 12.57,
      "Open": 13.112,
      "High": 13.112,
      "Low": 12.218,
      "Vol.": "-",
      "Change %": "-4.12%",
      "Helper": 266
    },
    {
      "Date": "Mar 06, 2021",
      "Price": 12.92,
      "Open": 12.572,
      "High": 13.162,
      "Low": 11.99,
      "Vol.": "-",
      "Change %": "2.80%",
      "Helper": 265
    },
    {
      "Date": "Mar 07, 2021",
      "Price": 13.79,
      "Open": 12.924,
      "High": 13.949,
      "Low": 12.717,
      "Vol.": "-",
      "Change %": "6.71%",
      "Helper": 264
    },
    {
      "Date": "Mar 08, 2021",
      "Price": 13.6,
      "Open": 13.791,
      "High": 13.837,
      "Low": 13.072,
      "Vol.": "-",
      "Change %": "-1.40%",
      "Helper": 263
    },
    {
      "Date": "Mar 09, 2021",
      "Price": 14.86,
      "Open": 13.598,
      "High": 14.973,
      "Low": 13.361,
      "Vol.": "-",
      "Change %": "9.29%",
      "Helper": 262
    },
    {
      "Date": "Mar 10, 2021",
      "Price": 14.24,
      "Open": 14.86,
      "High": 14.86,
      "Low": 14.134,
      "Vol.": "-",
      "Change %": "-4.21%",
      "Helper": 261
    },
    {
      "Date": "Mar 11, 2021",
      "Price": 15.99,
      "Open": 14.235,
      "High": 16.339,
      "Low": 13.74,
      "Vol.": "-",
      "Change %": "12.31%",
      "Helper": 260
    },
    {
      "Date": "Mar 12, 2021",
      "Price": 14.55,
      "Open": 15.987,
      "High": 16.454,
      "Low": 14.36,
      "Vol.": "-",
      "Change %": "-8.98%",
      "Helper": 259
    },
    {
      "Date": "Mar 13, 2021",
      "Price": 15.37,
      "Open": 14.552,
      "High": 15.37,
      "Low": 13.896,
      "Vol.": "-",
      "Change %": "5.62%",
      "Helper": 258
    },
    {
      "Date": "Mar 14, 2021",
      "Price": 14.56,
      "Open": 15.37,
      "High": 15.37,
      "Low": 14.38,
      "Vol.": "-",
      "Change %": "-5.31%",
      "Helper": 257
    },
    {
      "Date": "Mar 15, 2021",
      "Price": 14.28,
      "Open": 14.555,
      "High": 14.7,
      "Low": 13.808,
      "Vol.": "-",
      "Change %": "-1.89%",
      "Helper": 256
    },
    {
      "Date": "Mar 16, 2021",
      "Price": 13.81,
      "Open": 14.28,
      "High": 14.28,
      "Low": 13.3,
      "Vol.": "-",
      "Change %": "-3.33%",
      "Helper": 255
    },
    {
      "Date": "Mar 17, 2021",
      "Price": 13.99,
      "Open": 13.805,
      "High": 14.2,
      "Low": 13.367,
      "Vol.": "-",
      "Change %": "1.34%",
      "Helper": 254
    },
    {
      "Date": "Mar 18, 2021",
      "Price": 14.33,
      "Open": 13.99,
      "High": 14.703,
      "Low": 13.99,
      "Vol.": "-",
      "Change %": "2.41%",
      "Helper": 253
    },
    {
      "Date": "Mar 19, 2021",
      "Price": 14.29,
      "Open": 14.328,
      "High": 14.437,
      "Low": 14.034,
      "Vol.": "-",
      "Change %": "-0.28%",
      "Helper": 252
    },
    {
      "Date": "Mar 20, 2021",
      "Price": 14.27,
      "Open": 14.287,
      "High": 14.838,
      "Low": 14.202,
      "Vol.": "-",
      "Change %": "-0.12%",
      "Helper": 251
    },
    {
      "Date": "Mar 21, 2021",
      "Price": 14.18,
      "Open": 14.27,
      "High": 14.3,
      "Low": 13.714,
      "Vol.": "-",
      "Change %": "-0.63%",
      "Helper": 250
    },
    {
      "Date": "Mar 22, 2021",
      "Price": 14.89,
      "Open": 14.18,
      "High": 16.54,
      "Low": 14.18,
      "Vol.": "-",
      "Change %": "5.00%",
      "Helper": 249
    },
    {
      "Date": "Mar 23, 2021",
      "Price": 14.19,
      "Open": 14.888,
      "High": 15.194,
      "Low": 14.193,
      "Vol.": "-",
      "Change %": "-4.67%",
      "Helper": 248
    },
    {
      "Date": "Mar 24, 2021",
      "Price": 13.63,
      "Open": 14.184,
      "High": 15.257,
      "Low": 13.628,
      "Vol.": "-",
      "Change %": "-3.98%",
      "Helper": 247
    },
    {
      "Date": "Mar 25, 2021",
      "Price": 12.99,
      "Open": 13.629,
      "High": 13.629,
      "Low": 12.679,
      "Vol.": "-",
      "Change %": "-4.70%",
      "Helper": 246
    },
    {
      "Date": "Mar 26, 2021",
      "Price": 14.75,
      "Open": 12.988,
      "High": 14.75,
      "Low": 12.422,
      "Vol.": "-",
      "Change %": "13.56%",
      "Helper": 245
    },
    {
      "Date": "Mar 27, 2021",
      "Price": 16.51,
      "Open": 14.75,
      "High": 16.527,
      "Low": 14.75,
      "Vol.": "-",
      "Change %": "11.91%",
      "Helper": 244
    },
    {
      "Date": "Mar 28, 2021",
      "Price": 18.22,
      "Open": 16.506,
      "High": 24.4,
      "Low": 16.347,
      "Vol.": "-",
      "Change %": "10.38%",
      "Helper": 243
    },
    {
      "Date": "Mar 29, 2021",
      "Price": 18.88,
      "Open": 18.22,
      "High": 18.909,
      "Low": 17.715,
      "Vol.": "-",
      "Change %": "3.61%",
      "Helper": 242
    },
    {
      "Date": "Mar 30, 2021",
      "Price": 19.16,
      "Open": 18.878,
      "High": 21.4,
      "Low": 18.878,
      "Vol.": "-",
      "Change %": "1.47%",
      "Helper": 241
    },
    {
      "Date": "Mar 31, 2021",
      "Price": 19.44,
      "Open": 19.156,
      "High": 19.677,
      "Low": 18.534,
      "Vol.": "-",
      "Change %": "1.47%",
      "Helper": 240
    },
    {
      "Date": "Apr 01, 2021",
      "Price": 19.07,
      "Open": 19.437,
      "High": 20.6,
      "Low": 18.66,
      "Vol.": "-",
      "Change %": "-1.89%",
      "Helper": 239
    },
    {
      "Date": "Apr 02, 2021",
      "Price": 19.75,
      "Open": 19.07,
      "High": 19.749,
      "Low": 18.612,
      "Vol.": "-",
      "Change %": "3.56%",
      "Helper": 238
    },
    {
      "Date": "Apr 03, 2021",
      "Price": 22.47,
      "Open": 19.749,
      "High": 23.397,
      "Low": 19.749,
      "Vol.": "-",
      "Change %": "13.75%",
      "Helper": 237
    },
    {
      "Date": "Apr 04, 2021",
      "Price": 23.88,
      "Open": 22.466,
      "High": 25.308,
      "Low": 22.278,
      "Vol.": "-",
      "Change %": "6.28%",
      "Helper": 236
    },
    {
      "Date": "Apr 05, 2021",
      "Price": 22.96,
      "Open": 23.876,
      "High": 24.463,
      "Low": 22.906,
      "Vol.": "-",
      "Change %": "-3.85%",
      "Helper": 235
    },
    {
      "Date": "Apr 06, 2021",
      "Price": 24.97,
      "Open": 22.957,
      "High": 24.994,
      "Low": 21.913,
      "Vol.": "-",
      "Change %": "8.77%",
      "Helper": 234
    },
    {
      "Date": "Apr 07, 2021",
      "Price": 26.48,
      "Open": 24.971,
      "High": 27.304,
      "Low": 23.364,
      "Vol.": "-",
      "Change %": "6.04%",
      "Helper": 233
    },
    {
      "Date": "Apr 08, 2021",
      "Price": 27.72,
      "Open": 26.478,
      "High": 29,
      "Low": 23.5,
      "Vol.": "-",
      "Change %": "4.70%",
      "Helper": 232
    },
    {
      "Date": "Apr 10, 2021",
      "Price": 26.79,
      "Open": 27.377,
      "High": 27.377,
      "Low": 26.046,
      "Vol.": "-",
      "Change %": "-3.37%",
      "Helper": 231
    },
    {
      "Date": "Apr 11, 2021",
      "Price": 27.81,
      "Open": 26.79,
      "High": 28.471,
      "Low": 25.726,
      "Vol.": "-",
      "Change %": "3.81%",
      "Helper": 230
    },
    {
      "Date": "Apr 12, 2021",
      "Price": 28.55,
      "Open": 27.812,
      "High": 29.45,
      "Low": 27.043,
      "Vol.": "-",
      "Change %": "2.64%",
      "Helper": 229
    },
    {
      "Date": "Apr 13, 2021",
      "Price": 27.75,
      "Open": 28.547,
      "High": 29.5,
      "Low": 25.274,
      "Vol.": "-",
      "Change %": "-2.79%",
      "Helper": 228
    },
    {
      "Date": "Apr 14, 2021",
      "Price": 26.47,
      "Open": 27.75,
      "High": 31,
      "Low": 24.962,
      "Vol.": "-",
      "Change %": "-4.63%",
      "Helper": 227
    },
    {
      "Date": "Apr 15, 2021",
      "Price": 27,
      "Open": 26.465,
      "High": 27.626,
      "Low": 25.4,
      "Vol.": "-",
      "Change %": "2.03%",
      "Helper": 226
    },
    {
      "Date": "Apr 16, 2021",
      "Price": 25.34,
      "Open": 27.001,
      "High": 27.891,
      "Low": 25.096,
      "Vol.": "-",
      "Change %": "-6.15%",
      "Helper": 225
    },
    {
      "Date": "Apr 17, 2021",
      "Price": 25.1,
      "Open": 25.342,
      "High": 26.497,
      "Low": 25.096,
      "Vol.": "-",
      "Change %": "-0.97%",
      "Helper": 224
    },
    {
      "Date": "Apr 18, 2021",
      "Price": 28.3,
      "Open": 25.096,
      "High": 32.98,
      "Low": 22.698,
      "Vol.": "-",
      "Change %": "12.77%",
      "Helper": 223
    },
    {
      "Date": "Apr 19, 2021",
      "Price": 28.8,
      "Open": 28.3,
      "High": 35.497,
      "Low": 28.3,
      "Vol.": "-",
      "Change %": "1.77%",
      "Helper": 222
    },
    {
      "Date": "Apr 20, 2021",
      "Price": 31.75,
      "Open": 28.8,
      "High": 32.232,
      "Low": 26,
      "Vol.": "-",
      "Change %": "10.25%",
      "Helper": 221
    },
    {
      "Date": "Apr 21, 2021",
      "Price": 32.54,
      "Open": 31.752,
      "High": 34.819,
      "Low": 30.549,
      "Vol.": "-",
      "Change %": "2.47%",
      "Helper": 220
    },
    {
      "Date": "Apr 22, 2021",
      "Price": 39.02,
      "Open": 32.536,
      "High": 40.262,
      "Low": 32.536,
      "Vol.": "-",
      "Change %": "19.91%",
      "Helper": 219
    },
    {
      "Date": "Apr 23, 2021",
      "Price": 36.01,
      "Open": 39.015,
      "High": 41,
      "Low": 31,
      "Vol.": "-",
      "Change %": "-7.71%",
      "Helper": 218
    },
    {
      "Date": "Apr 24, 2021",
      "Price": 40.85,
      "Open": 36.006,
      "High": 42.06,
      "Low": 35.135,
      "Vol.": "-",
      "Change %": "13.45%",
      "Helper": 217
    },
    {
      "Date": "Apr 25, 2021",
      "Price": 47.47,
      "Open": 40.849,
      "High": 48.085,
      "Low": 40,
      "Vol.": "-",
      "Change %": "16.20%",
      "Helper": 216
    },
    {
      "Date": "Apr 26, 2021",
      "Price": 44.5,
      "Open": 47.466,
      "High": 48.36,
      "Low": 43.504,
      "Vol.": "-",
      "Change %": "-6.25%",
      "Helper": 215
    },
    {
      "Date": "Apr 27, 2021",
      "Price": 43.25,
      "Open": 44.5,
      "High": 46.167,
      "Low": 42.83,
      "Vol.": "-",
      "Change %": "-2.80%",
      "Helper": 214
    },
    {
      "Date": "Apr 28, 2021",
      "Price": 44.97,
      "Open": 43.253,
      "High": 46.245,
      "Low": 41.448,
      "Vol.": "-",
      "Change %": "3.97%",
      "Helper": 213
    },
    {
      "Date": "Apr 29, 2021",
      "Price": 42.64,
      "Open": 44.97,
      "High": 45.365,
      "Low": 41.762,
      "Vol.": "-",
      "Change %": "-5.19%",
      "Helper": 212
    },
    {
      "Date": "Apr 30, 2021",
      "Price": 42.59,
      "Open": 42.614,
      "High": 42.614,
      "Low": 42.586,
      "Vol.": "-",
      "Change %": "-0.12%",
      "Helper": 211
    },
    {
      "Date": "May 23, 2021",
      "Price": 24.61,
      "Open": 23.7,
      "High": 25.854,
      "Low": 19.8,
      "Vol.": "-",
      "Change %": "-42.21%",
      "Helper": 210
    },
    {
      "Date": "May 24, 2021",
      "Price": 30.64,
      "Open": 24.611,
      "High": 32.08,
      "Low": 24.611,
      "Vol.": "-",
      "Change %": "24.48%",
      "Helper": 209
    },
    {
      "Date": "May 25, 2021",
      "Price": 29.94,
      "Open": 30.637,
      "High": 32.604,
      "Low": 26.383,
      "Vol.": "-",
      "Change %": "-2.26%",
      "Helper": 208
    },
    {
      "Date": "May 26, 2021",
      "Price": 35.5,
      "Open": 29.944,
      "High": 36.311,
      "Low": 29.45,
      "Vol.": "-",
      "Change %": "18.55%",
      "Helper": 207
    },
    {
      "Date": "May 27, 2021",
      "Price": 33.52,
      "Open": 35.5,
      "High": 35.5,
      "Low": 31.526,
      "Vol.": "-",
      "Change %": "-5.59%",
      "Helper": 206
    },
    {
      "Date": "May 28, 2021",
      "Price": 29.09,
      "Open": 33.517,
      "High": 34.075,
      "Low": 28.513,
      "Vol.": "-",
      "Change %": "-13.22%",
      "Helper": 205
    },
    {
      "Date": "May 29, 2021",
      "Price": 26.9,
      "Open": 29.087,
      "High": 29.677,
      "Low": 25.873,
      "Vol.": "-",
      "Change %": "-7.52%",
      "Helper": 204
    },
    {
      "Date": "May 30, 2021",
      "Price": 28.52,
      "Open": 26.9,
      "High": 29.485,
      "Low": 25.825,
      "Vol.": "-",
      "Change %": "6.02%",
      "Helper": 203
    },
    {
      "Date": "May 31, 2021",
      "Price": 32.72,
      "Open": 28.519,
      "High": 32.812,
      "Low": 27,
      "Vol.": "-",
      "Change %": "14.74%",
      "Helper": 202
    },
    {
      "Date": "Jun 01, 2021",
      "Price": 31,
      "Open": 32.724,
      "High": 32.741,
      "Low": 30.246,
      "Vol.": "-",
      "Change %": "-5.26%",
      "Helper": 201
    },
    {
      "Date": "Jun 02, 2021",
      "Price": 34.01,
      "Open": 31.002,
      "High": 34.486,
      "Low": 30.552,
      "Vol.": "-",
      "Change %": "9.70%",
      "Helper": 200
    },
    {
      "Date": "Jun 03, 2021",
      "Price": 39.46,
      "Open": 34.009,
      "High": 40.993,
      "Low": 34.009,
      "Vol.": "-",
      "Change %": "16.03%",
      "Helper": 199
    },
    {
      "Date": "Jun 04, 2021",
      "Price": 37.44,
      "Open": 39.461,
      "High": 39.461,
      "Low": 34.661,
      "Vol.": "-",
      "Change %": "-5.13%",
      "Helper": 198
    },
    {
      "Date": "Jun 05, 2021",
      "Price": 39.56,
      "Open": 37.435,
      "High": 42.252,
      "Low": 37.435,
      "Vol.": "-",
      "Change %": "5.67%",
      "Helper": 197
    },
    {
      "Date": "Jun 06, 2021",
      "Price": 42.21,
      "Open": 39.559,
      "High": 43.208,
      "Low": 39.092,
      "Vol.": "-",
      "Change %": "6.70%",
      "Helper": 196
    },
    {
      "Date": "Jun 07, 2021",
      "Price": 38.27,
      "Open": 42.209,
      "High": 43.91,
      "Low": 38.272,
      "Vol.": "-",
      "Change %": "-9.33%",
      "Helper": 195
    },
    {
      "Date": "Jun 08, 2021",
      "Price": 41.34,
      "Open": 38.272,
      "High": 42.287,
      "Low": 33.824,
      "Vol.": "-",
      "Change %": "8.02%",
      "Helper": 194
    },
    {
      "Date": "Jun 09, 2021",
      "Price": 42.04,
      "Open": 41.34,
      "High": 43.864,
      "Low": 39.668,
      "Vol.": "-",
      "Change %": "1.70%",
      "Helper": 193
    },
    {
      "Date": "Jun 10, 2021",
      "Price": 41.12,
      "Open": 42.041,
      "High": 42.901,
      "Low": 39.869,
      "Vol.": "-",
      "Change %": "-2.18%",
      "Helper": 192
    },
    {
      "Date": "Jun 11, 2021",
      "Price": 36.01,
      "Open": 41.124,
      "High": 41.124,
      "Low": 35.5,
      "Vol.": "-",
      "Change %": "-12.43%",
      "Helper": 191
    },
    {
      "Date": "Jun 12, 2021",
      "Price": 36.4,
      "Open": 36.012,
      "High": 37.5,
      "Low": 34.453,
      "Vol.": "-",
      "Change %": "1.08%",
      "Helper": 190
    },
    {
      "Date": "Jun 13, 2021",
      "Price": 38.81,
      "Open": 36.402,
      "High": 39.18,
      "Low": 35.316,
      "Vol.": "-",
      "Change %": "6.60%",
      "Helper": 189
    },
    {
      "Date": "Jun 14, 2021",
      "Price": 39.7,
      "Open": 38.806,
      "High": 40.168,
      "Low": 36.931,
      "Vol.": "-",
      "Change %": "2.31%",
      "Helper": 188
    },
    {
      "Date": "Jun 15, 2021",
      "Price": 39.59,
      "Open": 39.703,
      "High": 41.339,
      "Low": 39.554,
      "Vol.": "-",
      "Change %": "-0.28%",
      "Helper": 187
    },
    {
      "Date": "Jun 16, 2021",
      "Price": 39.33,
      "Open": 39.592,
      "High": 40.925,
      "Low": 37.78,
      "Vol.": "-",
      "Change %": "-0.65%",
      "Helper": 186
    },
    {
      "Date": "Jun 17, 2021",
      "Price": 39.4,
      "Open": 39.334,
      "High": 41.317,
      "Low": 38.472,
      "Vol.": "-",
      "Change %": "0.17%",
      "Helper": 185
    },
    {
      "Date": "Jun 18, 2021",
      "Price": 36.65,
      "Open": 38.824,
      "High": 39.216,
      "Low": 35.515,
      "Vol.": "-",
      "Change %": "-6.98%",
      "Helper": 184
    },
    {
      "Date": "Jun 19, 2021",
      "Price": 35.28,
      "Open": 36.65,
      "High": 37.062,
      "Low": 35.097,
      "Vol.": "-",
      "Change %": "-3.73%",
      "Helper": 183
    },
    {
      "Date": "Jun 20, 2021",
      "Price": 35.32,
      "Open": 35.283,
      "High": 35.701,
      "Low": 31.5,
      "Vol.": "-",
      "Change %": "0.10%",
      "Helper": 182
    },
    {
      "Date": "Jun 21, 2021",
      "Price": 26.6,
      "Open": 35.32,
      "High": 35.799,
      "Low": 26.08,
      "Vol.": "-",
      "Change %": "-24.69%",
      "Helper": 181
    },
    {
      "Date": "Jun 22, 2021",
      "Price": 26.69,
      "Open": 26.601,
      "High": 28.233,
      "Low": 20.472,
      "Vol.": "-",
      "Change %": "0.32%",
      "Helper": 180
    },
    {
      "Date": "Jun 23, 2021",
      "Price": 30.86,
      "Open": 26.685,
      "High": 32.09,
      "Low": 26.042,
      "Vol.": "-",
      "Change %": "15.63%",
      "Helper": 179
    },
    {
      "Date": "Jun 24, 2021",
      "Price": 31.25,
      "Open": 30.855,
      "High": 32.446,
      "Low": 28.678,
      "Vol.": "-",
      "Change %": "1.26%",
      "Helper": 178
    },
    {
      "Date": "Jun 25, 2021",
      "Price": 28.8,
      "Open": 31.245,
      "High": 32.684,
      "Low": 28.53,
      "Vol.": "-",
      "Change %": "-7.83%",
      "Helper": 177
    },
    {
      "Date": "Jun 26, 2021",
      "Price": 29.55,
      "Open": 28.797,
      "High": 29.878,
      "Low": 26.998,
      "Vol.": "-",
      "Change %": "2.63%",
      "Helper": 176
    },
    {
      "Date": "Jun 27, 2021",
      "Price": 31.82,
      "Open": 29.554,
      "High": 31.821,
      "Low": 29.428,
      "Vol.": "-",
      "Change %": "7.67%",
      "Helper": 175
    },
    {
      "Date": "Jun 28, 2021",
      "Price": 32.99,
      "Open": 31.821,
      "High": 33.745,
      "Low": 31.155,
      "Vol.": "-",
      "Change %": "3.67%",
      "Helper": 174
    },
    {
      "Date": "Jun 29, 2021",
      "Price": 33.89,
      "Open": 32.99,
      "High": 35.5,
      "Low": 32.834,
      "Vol.": "-",
      "Change %": "2.71%",
      "Helper": 173
    },
    {
      "Date": "Jun 30, 2021",
      "Price": 35.54,
      "Open": 33.885,
      "High": 35.861,
      "Low": 31.315,
      "Vol.": "-",
      "Change %": "4.87%",
      "Helper": 172
    },
    {
      "Date": "Jul 01, 2021",
      "Price": 33.38,
      "Open": 35.536,
      "High": 36.115,
      "Low": 32,
      "Vol.": "-",
      "Change %": "-6.08%",
      "Helper": 171
    },
    {
      "Date": "Jul 02, 2021",
      "Price": 34,
      "Open": 33.375,
      "High": 34,
      "Low": 31.655,
      "Vol.": "-",
      "Change %": "1.87%",
      "Helper": 170
    },
    {
      "Date": "Jul 03, 2021",
      "Price": 34.8,
      "Open": 34,
      "High": 35.261,
      "Low": 33.357,
      "Vol.": "-",
      "Change %": "2.36%",
      "Helper": 169
    },
    {
      "Date": "Jul 04, 2021",
      "Price": 34.36,
      "Open": 35.055,
      "High": 35.295,
      "Low": 34.299,
      "Vol.": "-",
      "Change %": "-1.27%",
      "Helper": 168
    },
    {
      "Date": "Jul 05, 2021",
      "Price": 32.97,
      "Open": 34.36,
      "High": 34.36,
      "Low": 32.594,
      "Vol.": "-",
      "Change %": "-4.06%",
      "Helper": 167
    },
    {
      "Date": "Jul 06, 2021",
      "Price": 33.64,
      "Open": 32.966,
      "High": 34.443,
      "Low": 32.966,
      "Vol.": "-",
      "Change %": "2.05%",
      "Helper": 166
    },
    {
      "Date": "Jul 07, 2021",
      "Price": 36.54,
      "Open": 34.196,
      "High": 37.904,
      "Low": 34.196,
      "Vol.": "-",
      "Change %": "8.60%",
      "Helper": 165
    },
    {
      "Date": "Jul 08, 2021",
      "Price": 32.9,
      "Open": 36.537,
      "High": 36.772,
      "Low": 32.864,
      "Vol.": "-",
      "Change %": "-9.95%",
      "Helper": 164
    },
    {
      "Date": "Jul 09, 2021",
      "Price": 33.36,
      "Open": 33.258,
      "High": 34.381,
      "Low": 32.287,
      "Vol.": "-",
      "Change %": "1.40%",
      "Helper": 163
    },
    {
      "Date": "Jul 10, 2021",
      "Price": 31.73,
      "Open": 33.364,
      "High": 34.192,
      "Low": 31.1,
      "Vol.": "-",
      "Change %": "-4.90%",
      "Helper": 162
    },
    {
      "Date": "Jul 11, 2021",
      "Price": 32.12,
      "Open": 31.73,
      "High": 32.454,
      "Low": 31.464,
      "Vol.": "-",
      "Change %": "1.21%",
      "Helper": 161
    },
    {
      "Date": "Jul 12, 2021",
      "Price": 30.88,
      "Open": 32.115,
      "High": 32.6,
      "Low": 30.102,
      "Vol.": "-",
      "Change %": "-3.85%",
      "Helper": 160
    },
    {
      "Date": "Jul 13, 2021",
      "Price": 29.05,
      "Open": 30.88,
      "High": 30.995,
      "Low": 29,
      "Vol.": "-",
      "Change %": "-5.92%",
      "Helper": 159
    },
    {
      "Date": "Jul 14, 2021",
      "Price": 31.26,
      "Open": 29.052,
      "High": 31.393,
      "Low": 27.513,
      "Vol.": "-",
      "Change %": "7.60%",
      "Helper": 158
    },
    {
      "Date": "Jul 15, 2021",
      "Price": 28.46,
      "Open": 31.259,
      "High": 31.426,
      "Low": 28.08,
      "Vol.": "-",
      "Change %": "-8.97%",
      "Helper": 157
    },
    {
      "Date": "Jul 16, 2021",
      "Price": 26.31,
      "Open": 28.456,
      "High": 29.401,
      "Low": 26.274,
      "Vol.": "-",
      "Change %": "-7.55%",
      "Helper": 156
    },
    {
      "Date": "Jul 17, 2021",
      "Price": 26.72,
      "Open": 26.307,
      "High": 27.745,
      "Low": 26.035,
      "Vol.": "-",
      "Change %": "1.55%",
      "Helper": 155
    },
    {
      "Date": "Jul 18, 2021",
      "Price": 26.73,
      "Open": 26.715,
      "High": 27.725,
      "Low": 26.34,
      "Vol.": "-",
      "Change %": "0.04%",
      "Helper": 154
    },
    {
      "Date": "Jul 19, 2021",
      "Price": 24.5,
      "Open": 26.726,
      "High": 26.726,
      "Low": 24.059,
      "Vol.": "-",
      "Change %": "-8.35%",
      "Helper": 153
    },
    {
      "Date": "Jul 20, 2021",
      "Price": 23.48,
      "Open": 24.495,
      "High": 24.912,
      "Low": 22.23,
      "Vol.": "-",
      "Change %": "-4.14%",
      "Helper": 152
    },
    {
      "Date": "Jul 21, 2021",
      "Price": 26.64,
      "Open": 23.482,
      "High": 27.353,
      "Low": 22.846,
      "Vol.": "-",
      "Change %": "13.45%",
      "Helper": 151
    },
    {
      "Date": "Jul 22, 2021",
      "Price": 27.75,
      "Open": 26.641,
      "High": 28.05,
      "Low": 26.003,
      "Vol.": "-",
      "Change %": "4.16%",
      "Helper": 150
    },
    {
      "Date": "Jul 23, 2021",
      "Price": 28.47,
      "Open": 27.748,
      "High": 28.655,
      "Low": 26.42,
      "Vol.": "-",
      "Change %": "2.60%",
      "Helper": 149
    },
    {
      "Date": "Jul 24, 2021",
      "Price": 28.72,
      "Open": 28.47,
      "High": 29.4,
      "Low": 28.328,
      "Vol.": "-",
      "Change %": "0.88%",
      "Helper": 148
    },
    {
      "Date": "Jul 25, 2021",
      "Price": 28.13,
      "Open": 27.868,
      "High": 28.133,
      "Low": 26.595,
      "Vol.": "-",
      "Change %": "-2.04%",
      "Helper": 147
    },
    {
      "Date": "Jul 26, 2021",
      "Price": 28.25,
      "Open": 28.133,
      "High": 31.039,
      "Low": 27.952,
      "Vol.": "-",
      "Change %": "0.42%",
      "Helper": 146
    },
    {
      "Date": "Jul 27, 2021",
      "Price": 28.02,
      "Open": 28.251,
      "High": 28.886,
      "Low": 27,
      "Vol.": "-",
      "Change %": "-0.82%",
      "Helper": 145
    },
    {
      "Date": "Jul 28, 2021",
      "Price": 27.86,
      "Open": 28.018,
      "High": 28.62,
      "Low": 27.5,
      "Vol.": "-",
      "Change %": "-0.57%",
      "Helper": 144
    },
    {
      "Date": "Jul 29, 2021",
      "Price": 31.27,
      "Open": 27.857,
      "High": 31.912,
      "Low": 27.374,
      "Vol.": "-",
      "Change %": "12.24%",
      "Helper": 143
    },
    {
      "Date": "Jul 30, 2021",
      "Price": 32.36,
      "Open": 31.268,
      "High": 33.009,
      "Low": 30.086,
      "Vol.": "-",
      "Change %": "3.48%",
      "Helper": 142
    },
    {
      "Date": "Jul 31, 2021",
      "Price": 36.71,
      "Open": 32.356,
      "High": 36.796,
      "Low": 31.8,
      "Vol.": "-",
      "Change %": "13.45%",
      "Helper": 141
    },
    {
      "Date": "Aug 01, 2021",
      "Price": 34.28,
      "Open": 36.709,
      "High": 36.752,
      "Low": 33.5,
      "Vol.": "-",
      "Change %": "-6.63%",
      "Helper": 140
    },
    {
      "Date": "Aug 02, 2021",
      "Price": 33.17,
      "Open": 34.276,
      "High": 35.837,
      "Low": 33.098,
      "Vol.": "-",
      "Change %": "-3.23%",
      "Helper": 139
    },
    {
      "Date": "Aug 03, 2021",
      "Price": 33.96,
      "Open": 33.169,
      "High": 35.762,
      "Low": 32.2,
      "Vol.": "-",
      "Change %": "2.38%",
      "Helper": 138
    },
    {
      "Date": "Aug 04, 2021",
      "Price": 35.71,
      "Open": 33.96,
      "High": 36.6,
      "Low": 33.326,
      "Vol.": "-",
      "Change %": "5.14%",
      "Helper": 137
    },
    {
      "Date": "Aug 05, 2021",
      "Price": 37.41,
      "Open": 35.706,
      "High": 38.169,
      "Low": 35.596,
      "Vol.": "-",
      "Change %": "4.77%",
      "Helper": 136
    },
    {
      "Date": "Aug 06, 2021",
      "Price": 39.5,
      "Open": 37.408,
      "High": 40.362,
      "Low": 35.75,
      "Vol.": "-",
      "Change %": "5.58%",
      "Helper": 135
    },
    {
      "Date": "Aug 07, 2021",
      "Price": 39.43,
      "Open": 39.497,
      "High": 40.405,
      "Low": 37.633,
      "Vol.": "-",
      "Change %": "-0.18%",
      "Helper": 134
    },
    {
      "Date": "Aug 08, 2021",
      "Price": 37.67,
      "Open": 39.426,
      "High": 39.494,
      "Low": 36.972,
      "Vol.": "-",
      "Change %": "-4.46%",
      "Helper": 133
    },
    {
      "Date": "Aug 09, 2021",
      "Price": 38.72,
      "Open": 37.668,
      "High": 39.925,
      "Low": 36.304,
      "Vol.": "-",
      "Change %": "2.80%",
      "Helper": 132
    },
    {
      "Date": "Aug 10, 2021",
      "Price": 40.6,
      "Open": 38.722,
      "High": 41.686,
      "Low": 38.278,
      "Vol.": "-",
      "Change %": "4.84%",
      "Helper": 131
    },
    {
      "Date": "Aug 11, 2021",
      "Price": 41.79,
      "Open": 40.596,
      "High": 43.631,
      "Low": 40.596,
      "Vol.": "-",
      "Change %": "2.95%",
      "Helper": 130
    },
    {
      "Date": "Aug 12, 2021",
      "Price": 41.1,
      "Open": 41.792,
      "High": 43.323,
      "Low": 39.433,
      "Vol.": "-",
      "Change %": "-1.66%",
      "Helper": 129
    },
    {
      "Date": "Aug 13, 2021",
      "Price": 44.82,
      "Open": 41.1,
      "High": 44.821,
      "Low": 40.785,
      "Vol.": "-",
      "Change %": "9.05%",
      "Helper": 128
    },
    {
      "Date": "Aug 14, 2021",
      "Price": 44.04,
      "Open": 44.821,
      "High": 44.821,
      "Low": 42.828,
      "Vol.": "-",
      "Change %": "-1.74%",
      "Helper": 127
    },
    {
      "Date": "Aug 15, 2021",
      "Price": 53.71,
      "Open": 44.043,
      "High": 54.59,
      "Low": 43.462,
      "Vol.": "-",
      "Change %": "21.96%",
      "Helper": 126
    },
    {
      "Date": "Aug 16, 2021",
      "Price": 62.14,
      "Open": 53.714,
      "High": 68.743,
      "Low": 52.451,
      "Vol.": "-",
      "Change %": "15.68%",
      "Helper": 125
    },
    {
      "Date": "Aug 17, 2021",
      "Price": 64,
      "Open": 62.137,
      "High": 100,
      "Low": 59.998,
      "Vol.": "-",
      "Change %": "3.00%",
      "Helper": 124
    },
    {
      "Date": "Aug 18, 2021",
      "Price": 72.58,
      "Open": 64,
      "High": 80.483,
      "Low": 60.019,
      "Vol.": "-",
      "Change %": "13.40%",
      "Helper": 123
    },
    {
      "Date": "Aug 19, 2021",
      "Price": 72.7,
      "Open": 72.578,
      "High": 75.307,
      "Low": 68.771,
      "Vol.": "-",
      "Change %": "0.17%",
      "Helper": 122
    },
    {
      "Date": "Aug 20, 2021",
      "Price": 78.71,
      "Open": 72.7,
      "High": 79.9,
      "Low": 70.987,
      "Vol.": "-",
      "Change %": "8.27%",
      "Helper": 121
    },
    {
      "Date": "Aug 21, 2021",
      "Price": 73.91,
      "Open": 78.714,
      "High": 81.953,
      "Low": 72.715,
      "Vol.": "-",
      "Change %": "-6.11%",
      "Helper": 120
    },
    {
      "Date": "Aug 22, 2021",
      "Price": 72.85,
      "Open": 73.907,
      "High": 77.507,
      "Low": 71.54,
      "Vol.": "-",
      "Change %": "-1.44%",
      "Helper": 119
    },
    {
      "Date": "Aug 23, 2021",
      "Price": 75.55,
      "Open": 72.846,
      "High": 77.846,
      "Low": 71.719,
      "Vol.": "-",
      "Change %": "3.72%",
      "Helper": 118
    },
    {
      "Date": "Aug 24, 2021",
      "Price": 70.67,
      "Open": 75.553,
      "High": 79.343,
      "Low": 68.486,
      "Vol.": "-",
      "Change %": "-6.46%",
      "Helper": 117
    },
    {
      "Date": "Aug 25, 2021",
      "Price": 72.06,
      "Open": 70.671,
      "High": 72.535,
      "Low": 66.35,
      "Vol.": "-",
      "Change %": "1.96%",
      "Helper": 116
    },
    {
      "Date": "Aug 26, 2021",
      "Price": 75.17,
      "Open": 72.056,
      "High": 78.051,
      "Low": 66.372,
      "Vol.": "-",
      "Change %": "4.32%",
      "Helper": 115
    },
    {
      "Date": "Aug 27, 2021",
      "Price": 87.97,
      "Open": 75.169,
      "High": 88.76,
      "Low": 73.179,
      "Vol.": "-",
      "Change %": "17.03%",
      "Helper": 114
    },
    {
      "Date": "Aug 28, 2021",
      "Price": 96.72,
      "Open": 87.97,
      "High": 97.71,
      "Low": 85.731,
      "Vol.": "-",
      "Change %": "9.95%",
      "Helper": 113
    },
    {
      "Date": "Aug 29, 2021",
      "Price": 94.2,
      "Open": 96.72,
      "High": 97.84,
      "Low": 90.623,
      "Vol.": "-",
      "Change %": "-2.61%",
      "Helper": 112
    },
    {
      "Date": "Aug 30, 2021",
      "Price": 110.24,
      "Open": 94.2,
      "High": 116.25,
      "Low": 93.8,
      "Vol.": "-",
      "Change %": "17.03%",
      "Helper": 111
    },
    {
      "Date": "Aug 31, 2021",
      "Price": 108.32,
      "Open": 110.241,
      "High": 130.03,
      "Low": 103.58,
      "Vol.": "-",
      "Change %": "-1.74%",
      "Helper": 110
    },
    {
      "Date": "Sep 01, 2021",
      "Price": 111.06,
      "Open": 108.32,
      "High": 119.5,
      "Low": 106.18,
      "Vol.": "-",
      "Change %": "2.53%",
      "Helper": 109
    },
    {
      "Date": "Sep 02, 2021",
      "Price": 128.07,
      "Open": 111.06,
      "High": 131.8,
      "Low": 109.67,
      "Vol.": "-",
      "Change %": "15.32%",
      "Helper": 108
    },
    {
      "Date": "Sep 03, 2021",
      "Price": 146.14,
      "Open": 128.071,
      "High": 148.89,
      "Low": 128.071,
      "Vol.": "-",
      "Change %": "14.11%",
      "Helper": 107
    },
    {
      "Date": "Sep 04, 2021",
      "Price": 139.09,
      "Open": 146.14,
      "High": 150.67,
      "Low": 136.12,
      "Vol.": "-",
      "Change %": "-4.82%",
      "Helper": 106
    },
    {
      "Date": "Sep 05, 2021",
      "Price": 142.13,
      "Open": 139.09,
      "High": 145.14,
      "Low": 135.14,
      "Vol.": "-",
      "Change %": "2.19%",
      "Helper": 105
    },
    {
      "Date": "Sep 06, 2021",
      "Price": 164.17,
      "Open": 142.13,
      "High": 165.859,
      "Low": 137.39,
      "Vol.": "-",
      "Change %": "15.51%",
      "Helper": 104
    },
    {
      "Date": "Sep 07, 2021",
      "Price": 173.03,
      "Open": 164.59,
      "High": 195,
      "Low": 130,
      "Vol.": "-",
      "Change %": "5.40%",
      "Helper": 103
    },
    {
      "Date": "Sep 08, 2021",
      "Price": 190.69,
      "Open": 173.03,
      "High": 198.04,
      "Low": 146.53,
      "Vol.": "-",
      "Change %": "10.21%",
      "Helper": 102
    },
    {
      "Date": "Sep 09, 2021",
      "Price": 192.1,
      "Open": 190.69,
      "High": 215.511,
      "Low": 182,
      "Vol.": "-",
      "Change %": "0.74%",
      "Helper": 101
    },
    {
      "Date": "Sep 10, 2021",
      "Price": 179.15,
      "Open": 192.1,
      "High": 197.1,
      "Low": 170,
      "Vol.": "-",
      "Change %": "-6.74%",
      "Helper": 100
    },
    {
      "Date": "Sep 11, 2021",
      "Price": 178.35,
      "Open": 179.15,
      "High": 192.93,
      "Low": 175.551,
      "Vol.": "-",
      "Change %": "-0.45%",
      "Helper": 99
    },
    {
      "Date": "Sep 12, 2021",
      "Price": 174.37,
      "Open": 178.35,
      "High": 181.5,
      "Low": 170.81,
      "Vol.": "-",
      "Change %": "-2.23%",
      "Helper": 98
    },
    {
      "Date": "Sep 13, 2021",
      "Price": 169.47,
      "Open": 174.37,
      "High": 175,
      "Low": 150.54,
      "Vol.": "12.52",
      "Change %": "-2.81%",
      "Helper": 97
    },
    {
      "Date": "Sep 14, 2021",
      "Price": 158,
      "Open": 169.47,
      "High": 171.54,
      "Low": 143.2,
      "Vol.": "12.22",
      "Change %": "-6.77%",
      "Helper": 96
    },
    {
      "Date": "Sep 15, 2021",
      "Price": 158.62,
      "Open": 158.507,
      "High": 166.246,
      "Low": 154.057,
      "Vol.": "8.72",
      "Change %": "0.39%",
      "Helper": 95
    },
    {
      "Date": "Sep 16, 2021",
      "Price": 152.21,
      "Open": 158.648,
      "High": 163.008,
      "Low": 147.493,
      "Vol.": "6.8",
      "Change %": "-4.04%",
      "Helper": 94
    },
    {
      "Date": "Sep 17, 2021",
      "Price": 147.42,
      "Open": 152.215,
      "High": 153.253,
      "Low": 134.717,
      "Vol.": "11.39",
      "Change %": "-3.15%",
      "Helper": 93
    },
    {
      "Date": "Sep 18, 2021",
      "Price": 169.4,
      "Open": 147.447,
      "High": 171.309,
      "Low": 144.269,
      "Vol.": "12.19",
      "Change %": "14.91%",
      "Helper": 92
    },
    {
      "Date": "Sep 19, 2021",
      "Price": 152.7,
      "Open": 169.289,
      "High": 170.852,
      "Low": 150.914,
      "Vol.": "7.32",
      "Change %": "-9.86%",
      "Helper": 91
    },
    {
      "Date": "Sep 20, 2021",
      "Price": 132.5,
      "Open": 152.742,
      "High": 153.305,
      "Low": 131.023,
      "Vol.": "14.72",
      "Change %": "-13.23%",
      "Helper": 90
    },
    {
      "Date": "Sep 21, 2021",
      "Price": 123.88,
      "Open": 132.701,
      "High": 144.496,
      "Low": 116.135,
      "Vol.": "14.26",
      "Change %": "-6.51%",
      "Helper": 89
    },
    {
      "Date": "Sep 22, 2021",
      "Price": 148.05,
      "Open": 123.967,
      "High": 151.446,
      "Low": 122.272,
      "Vol.": "12.06",
      "Change %": "19.51%",
      "Helper": 88
    },
    {
      "Date": "Sep 23, 2021",
      "Price": 149.87,
      "Open": 148.013,
      "High": 152.31,
      "Low": 143.083,
      "Vol.": "7.4",
      "Change %": "1.23%",
      "Helper": 87
    },
    {
      "Date": "Sep 24, 2021",
      "Price": 139.27,
      "Open": 149.945,
      "High": 151.009,
      "Low": 128.404,
      "Vol.": "9.67",
      "Change %": "-7.07%",
      "Helper": 86
    },
    {
      "Date": "Sep 25, 2021",
      "Price": 136.09,
      "Open": 139.257,
      "High": 143.961,
      "Low": 133.589,
      "Vol.": "4.38",
      "Change %": "-2.28%",
      "Helper": 85
    },
    {
      "Date": "Sep 26, 2021",
      "Price": 135.75,
      "Open": 136.075,
      "High": 140.609,
      "Low": 124.982,
      "Vol.": "5.83",
      "Change %": "-0.25%",
      "Helper": 84
    },
    {
      "Date": "Sep 27, 2021",
      "Price": 136.37,
      "Open": 135.724,
      "High": 148.787,
      "Low": 133.766,
      "Vol.": "6.92",
      "Change %": "0.46%",
      "Helper": 83
    },
    {
      "Date": "Sep 28, 2021",
      "Price": 132.1,
      "Open": 136.372,
      "High": 139.386,
      "Low": 128.21,
      "Vol.": "5.25",
      "Change %": "-3.13%",
      "Helper": 82
    },
    {
      "Date": "Sep 29, 2021",
      "Price": 135.28,
      "Open": 132.222,
      "High": 140.002,
      "Low": 131.232,
      "Vol.": "5.31",
      "Change %": "2.41%",
      "Helper": 81
    },
    {
      "Date": "Sep 30, 2021",
      "Price": 141.36,
      "Open": 135.294,
      "High": 142.798,
      "Low": 134.131,
      "Vol.": "4.83",
      "Change %": "4.49%",
      "Helper": 80
    },
    {
      "Date": "Oct 01, 2021",
      "Price": 161.62,
      "Open": 141.366,
      "High": 164.871,
      "Low": 138.352,
      "Vol.": "8.96",
      "Change %": "14.33%",
      "Helper": 79
    },
    {
      "Date": "Oct 02, 2021",
      "Price": 169.08,
      "Open": 161.623,
      "High": 174.889,
      "Low": 156.773,
      "Vol.": "6.76",
      "Change %": "4.61%",
      "Helper": 78
    },
    {
      "Date": "Oct 03, 2021",
      "Price": 172.75,
      "Open": 169.074,
      "High": 177.359,
      "Low": 165.891,
      "Vol.": "5.56",
      "Change %": "2.17%",
      "Helper": 77
    },
    {
      "Date": "Oct 04, 2021",
      "Price": 167.12,
      "Open": 173.021,
      "High": 173.021,
      "Low": 162.503,
      "Vol.": "5.75",
      "Change %": "-3.26%",
      "Helper": 76
    },
    {
      "Date": "Oct 05, 2021",
      "Price": 164.62,
      "Open": 167.121,
      "High": 170.109,
      "Low": 160.188,
      "Vol.": "4.88",
      "Change %": "-1.49%",
      "Helper": 75
    },
    {
      "Date": "Oct 06, 2021",
      "Price": 153.9,
      "Open": 164.617,
      "High": 165.357,
      "Low": 150.266,
      "Vol.": "6.64",
      "Change %": "-6.51%",
      "Helper": 74
    },
    {
      "Date": "Oct 07, 2021",
      "Price": 154.21,
      "Open": 153.883,
      "High": 161.162,
      "Low": 150.53,
      "Vol.": "4.96",
      "Change %": "0.20%",
      "Helper": 73
    },
    {
      "Date": "Oct 08, 2021",
      "Price": 158.59,
      "Open": 154.215,
      "High": 168.79,
      "Low": 152.576,
      "Vol.": "5.41",
      "Change %": "2.84%",
      "Helper": 72
    },
    {
      "Date": "Oct 09, 2021",
      "Price": 156.76,
      "Open": 158.631,
      "High": 161.41,
      "Low": 154.685,
      "Vol.": "2.87",
      "Change %": "-1.16%",
      "Helper": 71
    },
    {
      "Date": "Oct 10, 2021",
      "Price": 147.74,
      "Open": 156.778,
      "High": 158.478,
      "Low": 145.953,
      "Vol.": "2.91",
      "Change %": "-5.75%",
      "Helper": 70
    },
    {
      "Date": "Oct 11, 2021",
      "Price": 144.89,
      "Open": 147.698,
      "High": 153.983,
      "Low": 140.464,
      "Vol.": "3.59",
      "Change %": "-1.93%",
      "Helper": 69
    },
    {
      "Date": "Oct 12, 2021",
      "Price": 152.52,
      "Open": 144.858,
      "High": 153.403,
      "Low": 137.73,
      "Vol.": "5.65",
      "Change %": "5.27%",
      "Helper": 68
    },
    {
      "Date": "Oct 13, 2021",
      "Price": 148.13,
      "Open": 152.496,
      "High": 155.406,
      "Low": 144.419,
      "Vol.": "3.93",
      "Change %": "-2.88%",
      "Helper": 67
    },
    {
      "Date": "Oct 14, 2021",
      "Price": 149.98,
      "Open": 148.056,
      "High": 155.501,
      "Low": 147.308,
      "Vol.": "3.8",
      "Change %": "1.25%",
      "Helper": 66
    },
    {
      "Date": "Oct 15, 2021",
      "Price": 163.17,
      "Open": 150.02,
      "High": 165.347,
      "Low": 146.991,
      "Vol.": "7.13",
      "Change %": "8.79%",
      "Helper": 65
    },
    {
      "Date": "Oct 16, 2021",
      "Price": 157.4,
      "Open": 163.157,
      "High": 164.702,
      "Low": 156.736,
      "Vol.": "2.65",
      "Change %": "-3.53%",
      "Helper": 64
    },
    {
      "Date": "Oct 17, 2021",
      "Price": 160.08,
      "Open": 157.416,
      "High": 167.492,
      "Low": 153.364,
      "Vol.": "4",
      "Change %": "1.70%",
      "Helper": 63
    },
    {
      "Date": "Oct 18, 2021",
      "Price": 157.22,
      "Open": 160.097,
      "High": 162.92,
      "Low": 155.015,
      "Vol.": "3.01",
      "Change %": "-1.79%",
      "Helper": 62
    },
    {
      "Date": "Oct 19, 2021",
      "Price": 155.86,
      "Open": 157.189,
      "High": 159.393,
      "Low": 153.148,
      "Vol.": "2.52",
      "Change %": "-0.87%",
      "Helper": 61
    },
    {
      "Date": "Oct 20, 2021",
      "Price": 176.81,
      "Open": 155.857,
      "High": 176.81,
      "Low": 155.21,
      "Vol.": "5.43",
      "Change %": "13.44%",
      "Helper": 60
    },
    {
      "Date": "Oct 21, 2021",
      "Price": 190.43,
      "Open": 176.805,
      "High": 193.871,
      "Low": 176.805,
      "Vol.": "11.01",
      "Change %": "7.70%",
      "Helper": 59
    },
    {
      "Date": "Oct 22, 2021",
      "Price": 196.17,
      "Open": 190.428,
      "High": 214.972,
      "Low": 188.115,
      "Vol.": "11.75",
      "Change %": "3.02%",
      "Helper": 58
    },
    {
      "Date": "Oct 23, 2021",
      "Price": 197.78,
      "Open": 196.267,
      "High": 205.692,
      "Low": 192.486,
      "Vol.": "4.62",
      "Change %": "0.82%",
      "Helper": 57
    },
    {
      "Date": "Oct 24, 2021",
      "Price": 202.39,
      "Open": 197.765,
      "High": 204.825,
      "Low": 185.385,
      "Vol.": "5.12",
      "Change %": "2.34%",
      "Helper": 56
    },
    {
      "Date": "Oct 25, 2021",
      "Price": 209.7,
      "Open": 202.259,
      "High": 218.939,
      "Low": 198.189,
      "Vol.": "6.89",
      "Change %": "3.61%",
      "Helper": 55
    },
    {
      "Date": "Oct 26, 2021",
      "Price": 199.74,
      "Open": 209.714,
      "High": 213.993,
      "Low": 196.706,
      "Vol.": "4.86",
      "Change %": "-4.75%",
      "Helper": 54
    },
    {
      "Date": "Oct 27, 2021",
      "Price": 184.4,
      "Open": 199.866,
      "High": 205.465,
      "Low": 178.226,
      "Vol.": "7.41",
      "Change %": "-7.68%",
      "Helper": 53
    },
    {
      "Date": "Oct 28, 2021",
      "Price": 194.66,
      "Open": 184.451,
      "High": 201.385,
      "Low": 181.906,
      "Vol.": "5.36",
      "Change %": "5.57%",
      "Helper": 52
    },
    {
      "Date": "Oct 29, 2021",
      "Price": 200.22,
      "Open": 194.795,
      "High": 204.975,
      "Low": 194.684,
      "Vol.": "3.75",
      "Change %": "2.86%",
      "Helper": 51
    },
    {
      "Date": "Oct 30, 2021",
      "Price": 195.81,
      "Open": 200.262,
      "High": 200.489,
      "Low": 187.531,
      "Vol.": "2.5",
      "Change %": "-2.20%",
      "Helper": 50
    },
    {
      "Date": "Oct 31, 2021",
      "Price": 202.57,
      "Open": 195.806,
      "High": 204.991,
      "Low": 185.688,
      "Vol.": "3.64",
      "Change %": "3.45%",
      "Helper": 49
    },
    {
      "Date": "Nov 01, 2021",
      "Price": 203.45,
      "Open": 202.565,
      "High": 211.495,
      "Low": 198.093,
      "Vol.": "4.78",
      "Change %": "0.44%",
      "Helper": 48
    },
    {
      "Date": "Nov 02, 2021",
      "Price": 220.68,
      "Open": 203.471,
      "High": 222.222,
      "Low": 201.147,
      "Vol.": "4.46",
      "Change %": "8.47%",
      "Helper": 47
    },
    {
      "Date": "Nov 03, 2021",
      "Price": 243.27,
      "Open": 220.764,
      "High": 246.379,
      "Low": 216.067,
      "Vol.": "7.93",
      "Change %": "10.24%",
      "Helper": 46
    },
    {
      "Date": "Nov 04, 2021",
      "Price": 247.14,
      "Open": 243.113,
      "High": 250.208,
      "Low": 234.909,
      "Vol.": "5.46",
      "Change %": "1.59%",
      "Helper": 45
    },
    {
      "Date": "Nov 05, 2021",
      "Price": 236.15,
      "Open": 247.15,
      "High": 248.256,
      "Low": 230.598,
      "Vol.": "3.43",
      "Change %": "-4.45%",
      "Helper": 44
    },
    {
      "Date": "Nov 06, 2021",
      "Price": 258.48,
      "Open": 236.119,
      "High": 259.861,
      "Low": 234.879,
      "Vol.": "4.44",
      "Change %": "9.46%",
      "Helper": 43
    },
    {
      "Date": "Nov 07, 2021",
      "Price": 249.64,
      "Open": 258.48,
      "High": 258.581,
      "Low": 245.752,
      "Vol.": "2.96",
      "Change %": "-3.42%",
      "Helper": 42
    },
    {
      "Date": "Nov 08, 2021",
      "Price": 248.42,
      "Open": 249.673,
      "High": 253.269,
      "Low": 240.742,
      "Vol.": "3.75",
      "Change %": "-0.49%",
      "Helper": 41
    },
    {
      "Date": "Nov 09, 2021",
      "Price": 239.03,
      "Open": 248.376,
      "High": 253.164,
      "Low": 237.809,
      "Vol.": "3.52",
      "Change %": "-3.78%",
      "Helper": 40
    },
    {
      "Date": "Nov 10, 2021",
      "Price": 233.69,
      "Open": 239.041,
      "High": 247.956,
      "Low": 217.998,
      "Vol.": "4.79",
      "Change %": "-2.23%",
      "Helper": 39
    },
    {
      "Date": "Nov 11, 2021",
      "Price": 233.58,
      "Open": 233.635,
      "High": 246.427,
      "Low": 229.543,
      "Vol.": "3.19",
      "Change %": "-0.05%",
      "Helper": 38
    },
    {
      "Date": "Nov 12, 2021",
      "Price": 228.55,
      "Open": 233.498,
      "High": 238.996,
      "Low": 220.997,
      "Vol.": "3.36",
      "Change %": "-2.15%",
      "Helper": 37
    },
    {
      "Date": "Nov 13, 2021",
      "Price": 241.68,
      "Open": 228.551,
      "High": 241.939,
      "Low": 225.006,
      "Vol.": "2.43",
      "Change %": "5.75%",
      "Helper": 36
    },
    {
      "Date": "Nov 14, 2021",
      "Price": 238.67,
      "Open": 241.659,
      "High": 241.925,
      "Low": 230.506,
      "Vol.": "1.96",
      "Change %": "-1.25%",
      "Helper": 35
    },
    {
      "Date": "Nov 15, 2021",
      "Price": 238.19,
      "Open": 238.679,
      "High": 246.211,
      "Low": 234.454,
      "Vol.": "3.03",
      "Change %": "-0.20%",
      "Helper": 34
    },
    {
      "Date": "Nov 16, 2021",
      "Price": 219.06,
      "Open": 238.213,
      "High": 238.213,
      "Low": 214.824,
      "Vol.": "4.3",
      "Change %": "-8.03%",
      "Helper": 33
    },
    {
      "Date": "Nov 17, 2021",
      "Price": 218.92,
      "Open": 219.048,
      "High": 221.947,
      "Low": 210.105,
      "Vol.": "3.63",
      "Change %": "-0.07%",
      "Helper": 32
    },
    {
      "Date": "Nov 18, 2021",
      "Price": 195.16,
      "Open": 218.932,
      "High": 222.755,
      "Low": 187.176,
      "Vol.": "5.62",
      "Change %": "-10.85%",
      "Helper": 31
    },
    {
      "Date": "Nov 19, 2021",
      "Price": 215.27,
      "Open": 195.145,
      "High": 219.691,
      "Low": 189.571,
      "Vol.": "4.45",
      "Change %": "10.30%",
      "Helper": 30
    },
    {
      "Date": "Nov 20, 2021",
      "Price": 217.83,
      "Open": 215.282,
      "High": 221.152,
      "Low": 206.068,
      "Vol.": "2.47",
      "Change %": "1.19%",
      "Helper": 29
    },
    {
      "Date": "Nov 21, 2021",
      "Price": 231.41,
      "Open": 217.824,
      "High": 235.389,
      "Low": 210.695,
      "Vol.": "3.15",
      "Change %": "6.23%",
      "Helper": 28
    },
    {
      "Date": "Nov 22, 2021",
      "Price": 215.85,
      "Open": 231.41,
      "High": 231.983,
      "Low": 211.95,
      "Vol.": "3.97",
      "Change %": "-6.72%",
      "Helper": 27
    },
    {
      "Date": "Nov 23, 2021",
      "Price": 221.89,
      "Open": 215.839,
      "High": 226.021,
      "Low": 211.232,
      "Vol.": "2.65",
      "Change %": "2.79%",
      "Helper": 26
    },
    {
      "Date": "Nov 24, 2021",
      "Price": 205.88,
      "Open": 221.837,
      "High": 222.244,
      "Low": 200.225,
      "Vol.": "3.12",
      "Change %": "-7.21%",
      "Helper": 25
    },
    {
      "Date": "Nov 25, 2021",
      "Price": 209.95,
      "Open": 205.854,
      "High": 216.366,
      "Low": 202.028,
      "Vol.": "2.9",
      "Change %": "1.98%",
      "Helper": 24
    },
    {
      "Date": "Nov 26, 2021",
      "Price": 191.99,
      "Open": 210.017,
      "High": 210.417,
      "Low": 183.084,
      "Vol.": "4.57",
      "Change %": "-8.55%",
      "Helper": 23
    },
    {
      "Date": "Nov 27, 2021",
      "Price": 193.06,
      "Open": 192.184,
      "High": 199.403,
      "Low": 190.811,
      "Vol.": "1.93",
      "Change %": "0.56%",
      "Helper": 22
    },
    {
      "Date": "Nov 28, 2021",
      "Price": 200.85,
      "Open": 192.976,
      "High": 201.979,
      "Low": 181.285,
      "Vol.": "2.67",
      "Change %": "4.04%",
      "Helper": 21
    },
    {
      "Date": "Nov 29, 2021",
      "Price": 204.14,
      "Open": 200.85,
      "High": 212.787,
      "Low": 199.789,
      "Vol.": "2.82",
      "Change %": "1.63%",
      "Helper": 20
    },
    {
      "Date": "Nov 30, 2021",
      "Price": 208.42,
      "Open": 204.139,
      "High": 218.252,
      "Low": 199.78,
      "Vol.": "3.65",
      "Change %": "2.10%",
      "Helper": 19
    },
    {
      "Date": "Dec 01, 2021",
      "Price": 229.83,
      "Open": 208.486,
      "High": 232.452,
      "Low": 207.999,
      "Vol.": "4.5",
      "Change %": "10.27%",
      "Helper": 18
    },
    {
      "Date": "Dec 02, 2021",
      "Price": 233.79,
      "Open": 229.862,
      "High": 243.069,
      "Low": 220.15,
      "Vol.": "4.76",
      "Change %": "1.72%",
      "Helper": 17
    },
    {
      "Date": "Dec 03, 2021",
      "Price": 212.05,
      "Open": 233.765,
      "High": 239.426,
      "Low": 205.628,
      "Vol.": "4.84",
      "Change %": "-9.30%",
      "Helper": 16
    },
    {
      "Date": "Dec 04, 2021",
      "Price": 201.09,
      "Open": 211.854,
      "High": 212.584,
      "Low": 175.186,
      "Vol.": "6.98",
      "Change %": "-5.17%",
      "Helper": 15
    },
    {
      "Date": "Dec 05, 2021",
      "Price": 196.44,
      "Open": 201.093,
      "High": 204.309,
      "Low": 182.027,
      "Vol.": "4.19",
      "Change %": "-2.31%",
      "Helper": 14
    },
    {
      "Date": "Dec 06, 2021",
      "Price": 193.96,
      "Open": 196.475,
      "High": 197.646,
      "Low": 176.649,
      "Vol.": "4.88",
      "Change %": "-1.26%",
      "Helper": 13
    },
    {
      "Date": "Dec 07, 2021",
      "Price": 190.24,
      "Open": 193.874,
      "High": 204.025,
      "Low": 187.958,
      "Vol.": "3.68",
      "Change %": "-1.92%",
      "Helper": 12
    },
    {
      "Date": "Dec 08, 2021",
      "Price": 194.6,
      "Open": 190.226,
      "High": 196.235,
      "Low": 184.001,
      "Vol.": "3.38",
      "Change %": "2.29%",
      "Helper": 11
    },
    {
      "Date": "Dec 09, 2021",
      "Price": 181.36,
      "Open": 194.624,
      "High": 196.636,
      "Low": 178.746,
      "Vol.": "3.01",
      "Change %": "-6.80%",
      "Helper": 10
    },
    {
      "Date": "Dec 10, 2021",
      "Price": 167.6,
      "Open": 181.267,
      "High": 184.44,
      "Low": 167.446,
      "Vol.": "3.2",
      "Change %": "-7.59%",
      "Helper": 9
    },
    {
      "Date": "Dec 11, 2021",
      "Price": 171.73,
      "Open": 167.475,
      "High": 173.801,
      "Low": 161.587,
      "Vol.": "2.8",
      "Change %": "2.47%",
      "Helper": 8
    },
    {
      "Date": "Dec 12, 2021",
      "Price": 172.92,
      "Open": 172.204,
      "High": 176.854,
      "Low": 167.728,
      "Vol.": "1.77",
      "Change %": "0.70%",
      "Helper": 7
    },
    {
      "Date": "Dec 13, 2021",
      "Price": 155.2,
      "Open": 172.906,
      "High": 172.951,
      "Low": 148.384,
      "Vol.": "4.69",
      "Change %": "-10.25%",
      "Helper": 6
    },
    {
      "Date": "Dec 14, 2021",
      "Price": 161.3,
      "Open": 155.259,
      "High": 162.906,
      "Low": 149.821,
      "Vol.": "3.91",
      "Change %": "3.93%",
      "Helper": 5
    },
    {
      "Date": "Dec 15, 2021",
      "Price": 178.51,
      "Open": 161.303,
      "High": 182.59,
      "Low": 157.183,
      "Vol.": "5.55",
      "Change %": "10.67%",
      "Helper": 4
    },
    {
      "Date": "Dec 16, 2021",
      "Price": 176.9,
      "Open": 178.522,
      "High": 189.008,
      "Low": 174.478,
      "Vol.": "3.94",
      "Change %": "-0.90%",
      "Helper": 3
    },
    {
      "Date": "Dec 17, 2021",
      "Price": 175.59,
      "Open": 176.926,
      "High": 182.357,
      "Low": 168.149,
      "Vol.": "3.77",
      "Change %": "-0.75%",
      "Helper": 2
    },
    {
      "Date": "Dec 18, 2021",
      "Price": 181.81,
      "Open": 175.562,
      "High": 183.391,
      "Low": 171.065,
      "Vol.": "2.34",
      "Change %": "3.54%",
      "Helper": 1
    }
   ]
  

   for(var i =0; i <data.length; i++){
     const json = [];
     json.push({Date: `${data[i].Date}`, High: `${data[i].High}`})
    //  console.log(json)
    // setEthData(json);
   }
   

 
  return (
    <>
      {/* <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={selectDateHandler}
        minDate={today}
        todayButton={"Today"}
      /> */}

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
          dataKey="Vol."
          stroke="#051b2d"
          activeDot={{ r: 8 }}
        />
         <Brush dataKey="Date" height={30} stroke="#8884d8" />
    
      </LineChart>
    </>
  );
};

export default Chart2;
