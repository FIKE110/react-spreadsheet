
import { PolarArea } from 'react-chartjs-2';

const PolarAreaChart = () => {
  // Sample data for the polar area chart
  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    datasets: [
      {
        label: 'Polar Area Chart Example',
        data: [10, 20, 30, 40, 50],
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
    <div className='overlay-div' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default PolarAreaChart;
