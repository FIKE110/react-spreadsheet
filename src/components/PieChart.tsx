import { Pie } from "react-chartjs-2";
import DropdownMenu from "./DropDownMenu";
import { useState } from "react";
import {genMultipleRandomColors} from "../Global";

export default function PieChart(props){
  
  const defaultLabel= [
    'Red',
    'Blue',
    'Yellow'
  ];

  const [dataLabel,setDataLabel] = useState(defaultLabel)
  const [mainPieData,setMainPieData] = useState( [300, 50, 100])
  const pieData=()=>{
  let data = {
      labels: dataLabel,
      datasets: [{
        label: props.name,
        data: mainPieData,
        backgroundColor: genMultipleRandomColors(mainPieData.length),
        hoverOffset: 4
      }]
    };

   /* const config = {
      type: 'doughnut',
      data: data,
    };*/

    return data
  }

  const data=pieData()

    return(
        <div className="overlay-div" style={{justifyContent:'center',alignItems:'center'}}>
          <div>
        <p className='chart-title'>{props.chartname}</p>
      </div>
           <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           <DropdownMenu current='Label...' setPieData={null} setLabel={setDataLabel} mainData={props.data} options={props.data[0]}/>
            <DropdownMenu current='Data...' setPieData={setMainPieData} setLabel={null} mainData={props.data} options={props.data[0]}/>
           </div>
            <Pie data={data} options={{radius:'92%'}}></Pie>
        </div>
    )
}