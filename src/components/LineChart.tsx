import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import DropdownMenu from './DropDownMenu';
import { genRandomColor } from '../Global';


const LineChart = (props) => {
  const defaultLabel= ['January', 'February', 'March', 'April', 'May'];

  const [fill,setFill] = useState(false)
  const [dataLabel,setDataLabel] = useState(defaultLabel)
  const [mainData,setMainData] = useState( [65, 59, 80, 81, 56])

  const color=genRandomColor()
  const data = {
    labels:dataLabel,
    datasets: [
      {
        label: props.name ,
        data:mainData,
        fill: fill,
        borderColor: color,
        backgroundColor: color,
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
      <Line data={data} options={options} />
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
    backgroundColor: 'transparent',
    color: 'white',
    padding: 10,
    border: 0,
    margin: 2,
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: 16,
  }
}

export default LineChart;
