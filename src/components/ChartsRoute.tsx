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
import ChartsTitle from './ChartsTitle';
import MathOperation from './MathsOperation';

export default function ChartsRoute(){
    const location=useLocation()
    const data=location.state.data
    const nameOfTable=location.state.tableName
    return(
        <div>
            <div style={{backgroundColor:'#f4f4f4',paddingBottom:5}}>
                <div>
                   <ChartsTitle />
                </div>
                <BarChart data={data} name={nameOfTable} chartname='Bar Chart'/>
                <PieChart data={data} name={nameOfTable} chartname='Pie Chart'/>
                <DonutChart data={data} name={nameOfTable} chartname='Donut Chart'/>
                <LineChart data={data} name={nameOfTable} chartname='Line Graph' />
                <PolarAreaChart data={data} name={nameOfTable} chartname='PolarArea Chart'/>
                <RadarChart data={data} name={nameOfTable} chartname='Radar Chart'/>
                <ScatterChart data={data} name={nameOfTable} chartname='Scatter Graph'/>
                <MathOperation data={data} chartname='Maths Operations'/>
            </div>
        </div>
    )
}