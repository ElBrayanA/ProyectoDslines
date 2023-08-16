import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart } from 'chart.js/auto'
import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from 'react'


ChartJS.register(ArcElement, Tooltip, Legend);
   
const Grafica = () => {
    const [chart, setChart] = useState([])
    var baseUrl = "http://localhost:5000/api";
  
    useEffect(() => {
      const fetchCoins = async () => {
        await fetch(`${baseUrl}`, {
          method: 'GET',
        })
          .then((response) => {
            if (response.ok) {
              response.json().then((json) => {
                console.log(json); 
                setChart(json)
              });
            }
          }).catch((error) => {
            console.log(error);
          });
      };
      fetchCoins()
    })
    
    
    const valor1  = chart.map(x => x.fecha)
    const valor2  = chart.map(x => x.total)

    console.log(valor2)
    console.log(valor1)

    const fecha1 = valor1[12]
    const fecha2 = valor1[10]
    const fecha3 = valor1[8]
    const fecha4 = valor1[6]
    const fecha5 = valor1[4]
    const fecha6 = valor1[2]
    const fecha7 = valor1[0]

var xValues3 = [
  fecha1,
  fecha2,
  fecha3,
  fecha4,
  fecha5,
  fecha6,
  fecha7
];


var myData = {
    labels: xValues3,
    datasets: [{
        label: 'Linea 1',
        data: [valor2[12],valor2[10],valor2[8],valor2[6],valor2[4],valor2[2],valor2[0]],
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderColor: "#FF0000",
        fill: true
        
    }, {
        label: 'Linea 2',
        data: [valor2[13],valor2[11],valor2[9],valor2[7],valor2[5],valor2[3],valor2[1]],
        backgroundColor: 'rgba(102, 153, 255, 0.2)',
        borderColor: "#6699FF",
        fill: true
    }]
}

var myOptions = {
    scales: {
        y: {
            grid: {
                color: 'rgba(240, 248, 255, 0.5)'
            }
        },
        x: {
            grid: {
                color: 'rgba(0,0,0,0)'
            }
        }

    }

}


    return (
        <Line data={myData} options={myOptions} />
    );
}

export default Grafica;