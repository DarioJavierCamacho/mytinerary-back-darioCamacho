import express from "express";
const router = express.Router();
import citiesRouter from "./cities.js";
import itinerariesRouter from "./itineraries.js";
import usersRouter from "./users.js";
import countriesRouter from "./countries.js";

router.use('/cities', citiesRouter);
router.use('/itineraries',itinerariesRouter);
router.use('/auth',usersRouter);
router.use('/countries',countriesRouter);


export default router;
