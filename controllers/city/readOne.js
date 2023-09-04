import city from "../../models/City.js";

export default async(req, res, next)=>{
    
    try{
        let one = await city.findOne({_id:req.params.id});
        return res.status(200).json({response:one,success:true});  
    }
    catch(error){
        console.log(error);
        return res.status(500).json({success:true , response:one});
    }
}
