import React from 'react';
import { Scatter } from 'react-chartjs-2';

const ScatterChart = () => {

  function plotPoints(data1,data2){
    let data=[]
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
  const data = {
    datasets: [
      {
        label: 'Scatter Plot Example',
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 35 },
          { x: 25, y: 45 },
          { x: 30, y: 25 },
          { x: 40, y: 60 },
        ],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: '#fff',
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

  return (
    <div className='overlay-div'>
      <Scatter data={data}  />
    </div>
  );
};

export default ScatterChart;
