import {con} from "../db/atlas.js";
import express from "express";
import {limitGet} from "../middlewares/limit.js";

const appContratos = express.Router();

appContratos.get("/", limitGet(),  async(req, res)=>{
    if (!req.rateLimit) return;
    let db = await con();
    let Contrato = db.collection("Contrato");
    let result = await Contrato.find({},{_id:0}).toArray();
    res.send(result);
});

export default appContratos;