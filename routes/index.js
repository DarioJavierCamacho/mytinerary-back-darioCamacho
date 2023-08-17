import express from "express";
const router = express.Router();
import create from "../controllers/api/create.js";
import read from "../controllers/api/read.js";
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/',read) //obtener todo.find()
  


router.post('/', create) //crear  ( .create())


router.put('/:id', (req, res, next) =>{ //actualizar .findByIdAndUpdate()
})

router.delete('/:id', (req, res, next)=>{ //borrar .findByIdAndDelete()

})

export default  router;
