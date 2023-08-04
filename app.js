import dotenv from "dotenv";
import express  from "express";
import appClientes from "./routers/clientes.js";
import appEmpleados from "./routers/empleado.js";
dotenv.config();
let app = express();

app.use(express.json());
app.use("/clientes", appClientes);
app.use("/empleados", appEmpleados)

let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});