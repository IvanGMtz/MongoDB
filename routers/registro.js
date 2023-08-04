import {con} from "../db/atlas.js";
import express from "express";
import {limitGet} from "../middlewares/limit.js";

const appRegistros = express.Router();

appRegistros.get("/", limitGet(),  async(req, res)=>{
    if (!req.rateLimit) return;
    let db = await con();
    let Registro = db.collection("Registro");
    let result = await Registro.find({},{_id:0}).toArray();
    res.send(result);
});

export default appRegistros;