import 'chart.js/auto'
import '../styles/chartpanel.css'
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { useLocation } from 'react-router-dom';
import DonutChart from './DonutChart';
import PolarAreaChart from './PolarAreaChart';
import RadarChart from './RadarChart';
import ScatterChart from './ScatterChart';


export default function ChartsRoute(){
    const location=useLocation()
    const data=location.state.data
    return(
        <div>
            <div>
                <PieChart data={data} />
                <DonutChart data={data} />
                <LineChart data={data} />
                <PolarAreaChart data={data} />
                <RadarChart data={data}/>
                <ScatterChart />
            </div>
        </div>
    )
}