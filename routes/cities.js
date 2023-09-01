import express from "express";
const citiesRouter = express.Router();

import create from "../controllers/city/create.js";
import read from "../controllers/city/read.js";
import update from "../controllers/city/update.js";

import findOne from "../controllers/city/readOne.js";
import _delete from "../controllers/city/delete.js";

citiesRouter.get('/',read) //obtener todo.find()
  
citiesRouter.get('/:id',findOne) //obtener solo la city por id

citiesRouter.post('/', create) //crear  ( .create())

citiesRouter.put('/:id', update)//actualizar .findByIdAndUpdate()

citiesRouter.delete('/:id', _delete) //borrar .findByIdAndDelete()

export default citiesRouter;