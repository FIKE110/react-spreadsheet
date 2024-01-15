import {useEffect, useState} from 'react';
import DropdownMenu from './DropDownMenu';
import { Scatter } from 'react-chartjs-2';
import { genRandomColor } from '../Global';

const ScatterChart = (props) => {
  const defaultLabel=  ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];

  const [fill,setFill] = useState(false)
  const [data1,setData1] = useState([10,20,30,40,50])
  const [data2,setData2] = useState( [20,10,20,40,23])

  function plotPoints(data1,data2){
    let data=[]
    if(!(data1 && data2)){
      return []
    }
    if(data1.length==data2.length){
      for(let i=0;i<data1.length;i++){
        if(!isNaN(data1[i]) && !isNaN(data2[i])){
          data.push({x:data1[i],y:data2[i]})
        }
        else{
          return []
        }
      }
    }
    return data
  }
  // Sample data for the scatter plot
  const color=genRandomColor()
  const data = {
    datasets: [
      {
        label: props.name,
        data: plotPoints(data1,data2),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor:color,
        pointBorderColor: '#fff',
        pointRadius:5,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    // Customize your chart options here
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        type: 'linear',
        position: 'left',
      },
    },
  };

  useEffect(()=>{
    console.log(data1)
  })

  return (
    <div className='overlay-div'>
      <div>
        <p className='chart-title'>{props.chartname}</p>
      </div>
       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <DropdownMenu current='Data1(X)' setPieData={setData1} 
      setLabel={null} mainData={props.data} options={props.data[0]}/>
          
        <DropdownMenu current='Data2(Y)' setPieData={setData2} 
        setLabel={null} mainData={props.data} options={props.data[0]}/>
      </div>
      <Scatter data={data}  />
    </div>
  );
};

export default ScatterChart;
