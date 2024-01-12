import { useEffect,useRef } from 'react';
import '../styles/chartpanel.css'
import Chart from 'chart.js/auto'

export default function ChartPanel(){
    const canvas=useRef(null)

    useEffect(()=> {
        const data = [
          { year: 2010, count: 10 },
          { year: 2011, count: 20 },
          { year: 2012, count: 15 },
          { year: 2013, count: 25 },
          { year: 2014, count: 22 },
          { year: 2015, count: 30 },
          { year: 2016, count: 28 },
        ];
        const ctx=canvas.current.getContext('2d');
        const existingChart=Chart.getChart(ctx)
        if(existingChart){
            existingChart.destroy()
        }

        new Chart(
          ctx,
          {
            type: 'bar',
            data: {
              labels: data.map(row => row.year),
              datasets: [
                {
                  label: 'Acquisitions by year',
                  data: data.map(row => row.count)
                }
              ]
            }
          }
        );
      })

    return(
        <div className="overlay-div">
            <div>
                <canvas ref={canvas} id='chart'></canvas>
            </div>
        </div>
    )
}