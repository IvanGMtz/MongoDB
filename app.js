import dotenv from "dotenv";
import express  from "express";
import appClientes from "./routers/clientes.js";
import appEmpleados from "./routers/empleado.js";
import appAutomovil from "./routers/automovil.js";
import appContratos from "./routers/contrato.js";
dotenv.config();
let app = express();

app.use(express.json());
app.use("/clientes", appClientes);
app.use("/empleados", appEmpleados);
app.use("/automoviles", appAutomovil);
app.use("/contratos", appContratos);

let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});