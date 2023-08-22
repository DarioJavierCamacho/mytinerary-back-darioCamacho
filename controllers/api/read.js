import city from "../../models/City.js";

export default async (req, res, next)=>{
    try{
       
        let mySort = {city: 1}
        //if(req.query.id) queries.id = new RegExp(req.query.id,'i');
        //if(req.query.country) queries.country = new RegExp(req.query.country,'i');
        let found = await city.find().sort(mySort);//ordenados alfabeticamente por nombre de ciudad
        return res.status(200).json({cities:found,sucess:true});
    }
    catch(error){
        console.log(error);
        next(error);
    }
}
