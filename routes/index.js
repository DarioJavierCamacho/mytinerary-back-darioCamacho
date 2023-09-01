import express from "express";
const router = express.Router();
import citiesRouter from "./cities.js";
import itinerariesRouter from "./itineraries.js";


router.use('/cities', citiesRouter);
router.use('/itineraries',itinerariesRouter);



export default router;
