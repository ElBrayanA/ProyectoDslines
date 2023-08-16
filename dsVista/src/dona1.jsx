import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React, { useState, useEffect } from 'react'
import { Doughnut } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);

const Dona1 = () => {
  const [chart, setChart] = useState([])
  var baseUrl = "http://localhost:5000/api/1"

  useEffect(() => {
    const fetchCoins = async () => {
      await fetch(`${baseUrl}`, {
        method: 'GET'
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
    fetchCoins();
    

  })
  const valor1  = chart.map(x => x.cuenta)
  const total = 200 - valor1
  

var yValues1 = [valor1,total];
var barColors1 = [
    "#FF0000",
    "#AAAAAA"
];

var myData = {
    datasets: [{
        backgroundColor: barColors1,
        data: yValues1,
        borderColor: "rgba(0,0,0,0)"
    }]
}


  return (
      <Doughnut data={myData} />
  );
}

export default Dona1;


