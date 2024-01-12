import { Pie } from "react-chartjs-2";
import { useRef } from "react";

export default function PieChart(){
    const canvasRef=useRef(null)

  //  useEffect(()=>{
        const data = {
            labels: [
              'Red',
              'Blue',
              'Yellow'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [300, 50, 100],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
            }]
          };

          const config = {
            type: 'doughnut',
            data: data,
          };

//    })

    return(
        <div className="overlay-div" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Pie data={data} ></Pie>
        </div>
    )
}