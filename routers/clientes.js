import {con} from "../db/atlas.js";
import express from "express";
import {limitGet} from "../middlewares/limit.js";

const appClientes = express.Router();

appClientes.get("/", limitGet(),  async(req, res)=>{
    if (!req.rateLimit) return;
    let db = await con();
    let cliente = db.collection("Cliente");
    let result = await cliente.find({}).toArray();
    res.send(result);
});

export default appClientes;