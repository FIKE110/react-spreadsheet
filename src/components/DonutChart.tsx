
import { Doughnut } from 'react-chartjs-2';
import { useState } from 'react';
import DropdownMenu from './DropDownMenu';

const DonutChart = (props) => {
  // Sample data for the donut chart

  const defaultLabel= [
    'Red',
    'Blue',
    'Yellow'
  ];
  const [select,setSelect] = useState(true)
  const [dataLabel,setDataLabel] = useState( defaultLabel)
  const [mainPieData,setMainPieData] = useState( [300, 50, 100])
  const pieData=()=>{
  let data = {
      labels: select ? dataLabel:defaultLabel,
      datasets: [{
        label: 'My First Dataset',
        data: mainPieData,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
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

  return (
    <div className='overlay-div' style={{justifyContent:'center',alignItems:'center'}}>
       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           <DropdownMenu current='Label...' setPieData={null} setLabel={setDataLabel} mainData={props.data} options={props.data[0]}/>
            <DropdownMenu current='Data...' setPieData={setMainPieData} setLabel={null} mainData={props.data} options={props.data[0]}/>
          </div>
      <Doughnut data={data} />
    </div>
  );
};

export default DonutChart;
