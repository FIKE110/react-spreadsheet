import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  // Sample data for the line chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sample Line Chart',
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: '#4CAF50',
        backgroundColor: '#4CAF50',
      },
    ],
  };

  const options = {
    // Customize your chart options here
  };

  return (
    <div className='overlay-div'>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
