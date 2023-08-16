import {getConection} from "./../database/database"



const getLinea = async (req, res) =>{
    try {
        const {id} = req.params
        const connection = await getConection();
        const result = await connection.query("SELECT COUNT(*) AS cuenta FROM conteo WHERE fecha = CURRENT_DATE() and idMeta = ?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    } 
};




const ObjetivosAdd = async (req, res) => {
    try {
        const {noProdructos,fechaInicio,fechaFinal,horaInicio,horaFinal,linea}=req.body;

        if(noProdructos === undefined || fechaInicio === undefined|| fechaFinal === undefined|| horaInicio === undefined || horaFinal === undefined || linea === undefined){
            res.status(400).json({message:"Bad request. please fill all field"})
        }

        const datos={noProdructos,fechaInicio,fechaFinal,horaInicio,horaFinal,linea};
        const connection = await getConection();
         const result = await connection.query("INSERT INTO Objetivos SET ?",datos);
        res.json({message:"Objetivo agregado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};




const getSemanal = async (req, res) => {
    try {
        const connection = await getConection();
        const result = await connection.query(
            "SELECT linea, date_format(fecha,'%d-%m-%Y') AS fecha, total FROM Semanal ORDER BY  fecha DESC, linea limit 14");
        res.json(result);
        var today = new Date();
 
        // obtener la hora
        const now = today.toLocaleTimeString('en-US');
        console.log(now);
        

       if (now >= ("8:38:00 PM")){
        const result1 = await connection.query("INSERT INTO Semanal (linea, fecha, total)SELECT linea, CURRENT_DATE(), noProdructos FROM Objetivos WHERE CURRENT_TIME() >= '18:50:00' AND CURRENT_DATE() >= fechaInicio OR CURRENT_DATE() <= fechaFinal;");
        console.log(result1);
        }
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods ={
    getLinea,
    ObjetivosAdd,
    getSemanal
};