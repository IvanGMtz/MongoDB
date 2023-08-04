import {con} from "../db/atlas.js";
import express from "express";
import {limitGet} from "../middlewares/limit.js";

const appSucursales = express.Router();

appSucursales.get("/", limitGet(),  async(req, res)=>{
    if (!req.rateLimit) return;
    let db = await con();
    let sucursal = db.collection("Sucursal");
    let result = await sucursal.find({},{_id:0}).toArray();
    res.send(result);
});

export default appSucursales;