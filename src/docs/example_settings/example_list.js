import React from "react";
import { Link } from "react-router-dom";

//import DotPlotRaw from "../components/DotPlotRaw";
//import BarLineRaw from "../components/BarLineRaw";

import DonutChartRaw from "../components/DonutChartRaw";

//import HeatMapRaw from "../components/HeatMapRaw";
//import JoyPlotRaw from "../components/JoyPlotRaw";

import AppleStockChartRaw from "../components/AppleStockChartRaw";
import {
  genericBarChart,
  genericLineChart,
  genericNetworkChart
} from "../components/GenericChartsRaw";

const exampos = [
  {
    label: "Pie/Donut/Nightingale",
    viz: DonutChartRaw({ kind: "pie" }),
    path: "donutchart"
  },



  { label: "XY Charts", viz: genericLineChart, path: "xyframe" },
  { label: "Ordinal Charts", viz: genericBarChart, path: "orframe" },
  { label: "Network Charts", viz: genericNetworkChart, path: "networkframe" },




  { label: "Annotations", viz: AppleStockChartRaw, path: "annotations" }
];

export const wrappedExamples = exampos.map(d => (
  <div key={d.path} className="example-wrapper">
    <Link to={`/${d.path}`}>
      <h1>{d.label}</h1>
      <div className="frame-cover" />
      {d.viz}
    </Link>
  </div>
));
