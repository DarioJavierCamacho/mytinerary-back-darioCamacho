import city from "../../models/City.js";

export default async(req, res, next)=>{
    
    try{
        let one = await city.findOne({_id:req.params.id});
        if(one) return res.status(200).json({response:one,success:true});
        else return res.status(404).json({message:"City not found"});     
    }
    catch(error){
        console.log(error);
        next(error);
    }
}
