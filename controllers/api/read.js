import city from "../../models/City.js";

export default async (req, res, next)=>{
    try{
        let all = await city.find();
        return res.status(200).json({cities:all});
    }
    catch(error){
        console.log(error);
        return next(error);
    }
}