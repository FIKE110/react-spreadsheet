import 'chart.js/auto'
import '../styles/chartpanel.css'
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { useLocation } from 'react-router-dom';
import DonutChart from './DonutChart';
import PolarAreaChart from './PolarAreaChart';
import RadarChart from './RadarChart';
import ScatterChart from './ScatterChart';
import BarChart from './BarChart';

export default function ChartsRoute(){
    const location=useLocation()
    const data=location.state.data
    const nameOfTable=location.state.tableName
    return(
        <div>
            <div>
                <div>
                    <h1>Charts for table {nameOfTable}</h1>
                </div>
                <BarChart data={data} name={nameOfTable}/>
                <PieChart data={data} name={nameOfTable} />
                <DonutChart data={data} name={nameOfTable} />
                <LineChart data={data} name={nameOfTable} />
                <PolarAreaChart data={data} name={nameOfTable}/>
                <RadarChart data={data} name={nameOfTable}/>
                <ScatterChart data={data} anem={nameOfTable}/>
            </div>
        </div>
    )
}