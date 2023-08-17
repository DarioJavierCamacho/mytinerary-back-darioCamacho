import express from "express";
const router = express.Router();
import create from "../controllers/api/create.js";
import read from "../controllers/api/read.js";
import update from "../controllers/api/update.js";

import findOne from "../controllers/api/readOne.js";
import _delete from "../controllers/api/delete.js";
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/',read) //obtener todo.find()
  
router.get('/:id',findOne) //obtener solo la city por id

router.post('/', create) //crear  ( .create())

router.put('/:id', update)//actualizar .findByIdAndUpdate()

router.delete('/:id', _delete) //borrar .findByIdAndDelete()



export default  router;
