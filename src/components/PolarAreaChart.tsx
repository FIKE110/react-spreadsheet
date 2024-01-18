
import { PolarArea } from 'react-chartjs-2';
import DropdownMenu from './DropDownMenu';
import { useState } from 'react';
import { genMultipleRandomColors } from '../Global';

const PolarAreaChart = (props) => {
  const defaultLabel= ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']


  const [dataLabel,setDataLabel] = useState(defaultLabel)
  const [mainPieData,setMainPieData] = useState([10, 20, 30, 40, 50])
  // Sample data for the polar area chart
  const data = {
    labels:dataLabel ,
    datasets: [
      {
        label: props.name,
        data: mainPieData,
        backgroundColor:genMultipleRandomColors(mainPieData.length),
      },
    ],
  };

  const options = {
    // Customize your chart options here
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
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default PolarAreaChart;
