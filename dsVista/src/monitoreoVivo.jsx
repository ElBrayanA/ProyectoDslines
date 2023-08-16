import './App.css'
import Dona1 from './dona1';
import Dona2 from './dona2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React, { useState, useEffect } from 'react'


function MonitoreoVivo() {

    ChartJS.register(ArcElement, Tooltip, Legend);

const porcent = () => {
    const [chart, setChart] = useState([])
  
    useEffect(() => {
      const fetchCoins = async () => {
        await fetch(`http://localhost:5000/api/1`, {
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
      fetchCoins()
    })

    const valor1  = chart.map(x => x.cuenta)
    var porciento = valor1 * 100
    var grafica = porciento / 200
    return grafica
}

const porcented = () => {
    const [chart, setChart] = useState([])
  
    useEffect(() => {
      const fetchCoins = async () => {
        await fetch(`http://localhost:5000/api/2`, {
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
      fetchCoins()
    })

    const valor1  = chart.map(x => x.cuenta)
    var porcientoo = valor1 * 100
    var grafica = porcientoo / 200
    return grafica
}


    return (
        <>
        <div className="container-fluid contenedor2">
            <div className="contenedor">

                {/* <!-- Titulo --> */}
                <div className="container-fluid">
                    <h1 className='titulo'>Monitoreo En Vivo</h1>
                </div>

                <div className="row">

                    {/* <!-- GRAFICA 1 --> */}
                    <div className="col-2 porcentajeAlign">

                        {/* <!-- PORCENTAJE ESCRITO --> */}
                        <div className="container-fluid">
                            <h1 className="porcentaje">Línea 1</h1>
                        </div>

                        <div className="container-fluid">
                            <h1 className="porcentaje">{porcent()}%</h1>
                        </div>

                    </div>
                    <div className="col-3 der">
                        <div className='dona'>
                            <Dona1 />
                        </div>
                    </div>


                    <div className="col-1">
                        {/* Vacio */}
                    </div>


                    {/* <!-- GRAFICA 2 --> */}
                    <div className="col-2 porcentajeAlign" >

                        {/* <!-- PORCENTAJE ESCRITO --> */}
                        <div className="container-fluid">
                            <h1 className="porcentaje">Línea 2</h1>
                        </div>

                        <div className="container-fluid">
                            <h1 className="porcentaje">{porcented()}%</h1>
                        </div>


                    </div>
                    <div className="col-3 izq" >
                        <div className='dona'>
                            <Dona2 />
                        </div>
                    </div>

                    <div className="col-1">
                        {/* Vacio */}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
    }


export default MonitoreoVivo;