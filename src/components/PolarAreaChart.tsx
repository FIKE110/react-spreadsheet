
import { PolarArea } from 'react-chartjs-2';
import DropdownMenu from './DropDownMenu';
import { useState } from 'react';

const PolarAreaChart = (props) => {
  const defaultLabel= ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']

  const [select,setSelect] = useState(true)
  const [dataLabel,setDataLabel] = useState(defaultLabel)
  const [mainPieData,setMainPieData] = useState([10, 20, 30, 40, 50])
  // Sample data for the polar area chart
  const data = {
    labels:dataLabel ,
    datasets: [
      {
        label: dataLabel,
        data: mainPieData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  const options = {
    // Customize your chart options here
  };

  return (
    <div className='overlay-div'>
       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           <DropdownMenu current='Label...' setPieData={null} setLabel={setDataLabel} mainData={props.data} options={props.data[0]}/>
            <DropdownMenu current='Data...' setPieData={setMainPieData} setLabel={null} mainData={props.data} options={props.data[0]}/>
          </div>
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default PolarAreaChart;
