
import { Doughnut } from 'react-chartjs-2';

const DonutChart = () => {
  // Sample data for the donut chart
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className='overlay-div' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Doughnut data={data} />
    </div>
  );
};

export default DonutChart;
