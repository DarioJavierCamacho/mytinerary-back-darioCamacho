import express from "express";
const countriesRouter = express.Router();
import countriesController from "../controllers/countries/countriesController.js";
const { getAllCountries,getOneCountry,createCountry, deleteCountry } = countriesController;;


countriesRouter.get('/',getAllCountries) 
countriesRouter.get('/:id',getOneCountry) 
countriesRouter.post('/',createCountry) 
countriesRouter.delete('/:id',deleteCountry) 

export default countriesRouter;