import './App.css'

export function ObjetivosTutorial() {
 
/*         var baseUrl = "http://localhost:5000/api";
        var datos = {
            Numero:document.getElementById('cantidad1'),
            FechaI: document.getElementById('FI1'),
            FechaF: document.getElementById('FF1'),
            HoraI :document.getElementById('HI1'),
            HoraF : document.getElementById('HF1'),
            linea1 : 1
        }

            function creacion1(){ fetch(`${baseUrl}`, {
                method: "POST",
                body: JSON.stringify(datos),
                headers: {
                  "Content-Type": "application/json",
                },
              })
              .then((res) => res.json())
              .catch((error) => console.error("Error:", error))
              .then((response) => console.log("Success:", response)); 
            } 
 */

   /* const Creacion2 = (linea2) => {
    
    const [text, setTEXT] = useState([])
    const datos = {
        id:document.getElementById('cantidad1')
    }
    var baseUrl = "http://localhost:4000/api/1"
  
    useEffect(() => {
      const fetchCoins = async () => {
        await fetch(`${baseUrl}`, {
          method: 'POST'
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
} */
    return (
        

        <div className="container-fluid contenedor2">

            <div className="row">

                {/* Grid de Objetivos  */}
                <div className="col-8">

                    {/* Titulo Objetivos */}
                    <div className="contenedor">
                        <h1 className="titulo">Objetivos</h1>


                        {/* Form de Objetivos */}
                        <form>

                            <div className='row saltoInput'>

                                <div className="col-3">

                                </div>
                                <div className='col-4 inputLinea'>
                                    <h3 className='h3Blanco'>Línea 1</h3>
                                </div>

                                <div className='col-4 inputLinea'>
                                    <h3 className='h3Blanco'>Línea 2</h3>
                                </div>
                            </div>

                            <div className='row saltoInput'>

                                <div className='col-3 nombreCampo'>
                                    <h5>No. Productos</h5>
                                </div>
                                <div className="col-4">
                                    <input className="form-control" type="number" name=""  id="cantidad1" />
                                </div>

                                <div className="col-4">
                                    <input className="form-control" type="number" name="" id="cantidad2" />
                                </div>
                            </div>

                            <div className='row saltoInput'>
                                <div className='col-3 nombreCampo' id='FI'>
                                    <h5>Fecha de Inicio</h5>
                                </div>
                                <div className="col-4">
                                    <input className="form-control" type="date" name="" id="FI1" />
                                </div>

                                <div className="col-4">
                                    <input className="form-control" type="date" name="" id="FI2" />
                                </div>
                            </div>

                            <div className='row saltoInput'>
                                <div className='col-3 nombreCampo' id='FF'>
                                    <h5>Fecha Final</h5>
                                </div>
                                <div className="col-4">
                                    <input className="form-control" type="date" name="" id="FF1" />
                                </div>

                                <div className="col-4">
                                    <input className="form-control" type="date" name="" id="FF2" />
                                </div>
                            </div>

                            <div className='row saltoInput'>
                                <div className='col-3 nombreCampo' id='HI'>
                                    <h5>Hora Inicial</h5>
                                </div>
                                <div className="col-4">
                                    <input className="form-control" type="time" name="" id="HI1" />
                                </div>

                                <div className="col-4">
                                    <input className="form-control" type="time" name="" id="HI2" />
                                </div>
                            </div>

                            <div className='row saltoInput'>
                                <div className='col-3 nombreCampo' id='HF'>
                                    <h5>Hora Final</h5>
                                </div>
                                <div className="col-4">
                                    <input className="form-control" type="time" name="" id="HF1" />
                                </div>

                                <div className="col-4">
                                    <input className="form-control" type="time" name="" id="HF2" />
                                </div>
                            </div>

                            <div className='row saltoInput3'>
                                <div className="col-3">

                                </div>
                                <div className='col-4 centrar'>
                                    <button type='submit' className="btn rojo"  /* onClick={creacion1()} */>Crear Objetivo</button>
                                </div>

                                <div className='col-4 centrar'>
                                    <button className="btn azul">Crear Objetivo</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

                {/* Grid de Tutorial */}
                <div className="col-4">
                    <div className='contenedor centrarTexto'>

                        {/* Titulo Tutorial */}
                        <div className="container-fluid">
                            <h1 className='titulo'>Tutorial</h1>
                        </div>

                        <h2>¿Necesitas Ayuda?</h2>
                        <h2 className='h3Blanco'>Si tienes problemas</h2>
                        <h2 className='h3Blanco'>Para usar la aplicación web</h2>
                        <h2 className='h3Blanco'>¡Haz Clic Aquí!</h2>
                        <h4>Para ver el tutorial</h4>

                        <div className='container-fluid'>
                            <a type="button" className='btn btnTutorial'
                                href="https://www.youtube.com/watch?v=HJqlA_HTEU8&list=RDHJqlA_HTEU8&start_radio=1"
                                target='_blank'>

                                <h3>&#9654; Ver Tutorial</h3>

                            </a>
                        </div>



                        {/* Target= _blank es para abrir el tutorial en una nueva pestana */}


                    </div>
                </div>
            </div>
        </div >
    );
    }


export default ObjetivosTutorial;