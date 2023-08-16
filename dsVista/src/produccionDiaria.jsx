import './App.css'
import Grafica from './grafica';

export function ProduccionDiaria() {
    return (

        <div className="container-fluid">
            <div className="contenedor2">

                <div className='contenedor'>

                    {/* <!-- Titulo --> */}
                    <div className="container-fluid titulo" >
                        <h1 className='titulo'>Producción Diaria</h1>
                    </div>

                    {/* <!-- Produccion Diaria --> */}
                    <div className="container-fluid centrar">
                        <div className='produccionDiaria'>
                            <Grafica/>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ProduccionDiaria;