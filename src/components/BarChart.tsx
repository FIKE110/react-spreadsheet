import { useState} from 'react';
import '../styles/chartpanel.css'
import DropdownMenu from './DropDownMenu';

import { Bar } from 'react-chartjs-2';
import { genRandomColor } from '../Global';

const BarChart = (props) => {
  const defaultLabel= [
    'Red',
    'Blue',
    'Yellow'
  ];
  const [select,setSelect] = useState(true)
  const [dataLabel,setDataLabel] = useState(defaultLabel)
  const [mainPieData,setMainPieData] = useState( [300, 50, 100])

  const color=genRandomColor(0.3,true)
  const chartData = {
    labels: dataLabel,
    datasets: [
      {
        label: props.name,
        data: mainPieData,
        backgroundColor: color[0],
        borderColor: color[1],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='overlay-div'>
      <div>
        <p className='chart-title'>{props.chartname}</p>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           <DropdownMenu current='Label...' setPieData={null} setLabel={setDataLabel} mainData={props.data} options={props.data[0]}/>
            <DropdownMenu current='Data...' setPieData={setMainPieData} setLabel={null} mainData={props.data} options={props.data[0]}/>
          </div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  )
};

export default BarChart;
