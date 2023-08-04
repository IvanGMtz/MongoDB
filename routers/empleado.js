import {con} from "../db/atlas.js";
import express from "express";
import {limitGet} from "../middlewares/limit.js";

const appEmpleados = express.Router();

appEmpleados.get("/", limitGet(),  async(req, res)=>{
    if (!req.rateLimit) return; 
    let db = await con();
    let Empleado = db.collection("Empleado");
    let result = await Empleado.find({}, { _id:0 }).toArray();
    res.send(result);
});

export default appEmpleados;