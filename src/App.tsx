import { useState , useRef, useEffect } from "react"
import './styles/table.css'
import plusIcon from './assets/plus.png'
import { act } from "react-dom/test-utils"
import { Table } from "./components/Table"
import ChartPanel from "./components/ChartPanel"
import PieChart from "./components/PieChart"
import DonutChart from "./components/DonutChart"
import LineChart from "./components/LineChart"
import RadarChart from "./components/RadarChart"
import ScatterChart from "./components/ScatterChart"
import PolarAreaChart from "./components/PolarAreaChart"
import WarningPanel from "./components/WarningPanel"
import { SpreadSheet } from "./components/SpreadSheet"

type tableMatrixType = {
  row:number,
  column:number
}

export function App(){
  
return (
  <div>
    <SpreadSheet />
  </div>
)
}
const styles={
  inputStyle:{outline:'none',border:'none',padding:'14px',width:'140px',height:23}
}