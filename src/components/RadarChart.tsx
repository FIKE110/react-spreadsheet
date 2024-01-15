import {useState} from 'react';
import { Radar } from 'react-chartjs-2';
import DropdownMenu from './DropDownMenu';
import { genRandomColor } from '../Global';

const RadarChart = (props) => {
  const defaultLabel=  ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];

  const [fill,setFill] = useState(false)
  const [dataLabel,setDataLabel] = useState(defaultLabel)
  const [mainData,setMainData] = useState( [65, 59, 80, 81, 56])
  // Sample data for the radar chart
  const color= genRandomColor(0.3,true)
  const data = {
    labels:dataLabel,
    datasets: [
      {
        label: props.name,
        data: mainData,
        fill: fill,
        backgroundColor:color[0],
        borderColor: color[1],
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75,192,192,1)',
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
      <DropdownMenu current='Label...' setPieData={null} 
      setLabel={setDataLabel} mainData={props.data} options={props.data[0]}/>
          
        <DropdownMenu current='Data...' setPieData={setMainData} 
        setLabel={null} mainData={props.data} options={props.data[0]}/>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Fill</button>
        <input type='checkbox' onChange={()=>setFill(!fill)}/>
      </div>
      <Radar data={data} options={options} />
    </div>
  );
};

const styles={
  buttonContainer:{
    backgroundColor: '#4caf50',
    color: 'white',
    padding: 10,
    border: 0,
    margin: 8,
    width:80,
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: 16,
  }

  ,

  button:{
    backgroundColor: '#4caf50',
    color: 'white',
    padding: 10,
    border: 0,
    margin: 2,
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: 16,
  }
}

export default RadarChart;
