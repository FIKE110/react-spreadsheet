import 'chart.js/auto'
import '../styles/chartpanel.css'
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { Link, useLocation } from 'react-router-dom';
import DonutChart from './DonutChart';
import PolarAreaChart from './PolarAreaChart';
import RadarChart from './RadarChart';
import ScatterChart from './ScatterChart';
import BarChart from './BarChart';
import ChartsTitle from './ChartsTitle';
import MathOperation from './MathsOperation';
import WarningPanel from './WarningPanel';
import BeautifulButton from './BeautifulButton';

export default function ChartsRoute(){
    const location=useLocation()
    const data=location.state?.data
    const nameOfTable=location.state?.tableName
    return(
        <div>
            {location.state ?( <div style={{backgroundColor:'#f4f4f4',paddingBottom:5}}>
                <div>
                   <ChartsTitle tableName={nameOfTable}/>
                </div>
                <BarChart data={data} name={nameOfTable} chartname='Bar Chart'/>
                <PieChart data={data} name={nameOfTable} chartname='Pie Chart'/>
                <DonutChart data={data} name={nameOfTable} chartname='Donut Chart'/>
                <LineChart data={data} name={nameOfTable} chartname='Line Graph' />
                <PolarAreaChart data={data} name={nameOfTable} chartname='PolarArea Chart'/>
                <RadarChart data={data} name={nameOfTable} chartname='Radar Chart'/>
                <ScatterChart data={data} name={nameOfTable} chartname='Scatter Graph'/>
                <MathOperation data={data} chartname='Maths Operations'/>
            </div>) :(
            <div style={{alignItems:'center',justifyContent:'center',width:'100%'}}>
                <WarningPanel message={"Table not configured properly"}/>
                <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Link to='/spreadsheet'><BeautifulButton value="Go Back To SpreadSheet"/></Link>
                </div>
            </div>
            )    
        }
        </div>
    )
}