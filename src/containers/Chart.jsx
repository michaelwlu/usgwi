import React, {useState, useEffect} from "react";
import "../stylesheets/chart.css";

import { Line } from "react-chartjs-2";



 const Chart=() => {
     const [tempData, setTempDate] = useState([33, 53, 85, 41, 44, 65])
     const [precpData, setPrecpDate] = useState([33, 25, 35, 51, 54, 76])

     const info = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Temperature",
            data: tempData,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Precipitation",
            data: precpData,
            fill: false,
            borderColor: "#742774"
          }
        ]
      };

      useEffect(() => {
          console.log('Temp Data',tempData)
          console.log('Precp Data',precpData)
          
      }, [tempData, precpData])
  return (
    <div className="chart">
      <Line data={info} />
      <button onClick={()=> setTempDate(tempData.map(item => item * 2))}> Change Temp</button>
      <button onClick={()=> setPrecpDate(precpData.map(item => item * 3))}> Change Precipitation</button>
      
    </div>
  );
}

export default Chart;
