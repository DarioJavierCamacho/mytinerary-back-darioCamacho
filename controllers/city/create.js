import city from "../../models/City.js";

export default async (req, res, next)=>{
    try{
       let created = await city.create(req.body);
       return res.status(201).json({
        success: true,
        response: created,
       })
    }catch(err){
        console.error(err);
        return res.status(500).json({
        success: false,
        message: "Error creating city"
       })
    }
}