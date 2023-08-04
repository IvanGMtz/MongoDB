import {con} from "../db/atlas.js";
import express from "express";
import {limitGet} from "../middlewares/limit.js";

const appAutomovil = express.Router();

appAutomovil.get("/", limitGet(),  async(req, res)=>{
    if (!req.rateLimit) return;
    let db = await con();
    let automovil = db.collection("Automovil");
    let result = await automovil.find({}).toArray();
    res.send(result);
});

export default appAutomovil;