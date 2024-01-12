import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarChart = () => {
  // Sample data for the radar chart
  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    datasets: [
      {
        label: 'Sample Radar Chart',
        data: [65, 59, 80, 81, 56],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
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
  };

  return (
    <div className='overlay-div' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
