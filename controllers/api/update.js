import city from "../../models/City.js";

export default async(req,res,next) => {
    try{
       let updated = await city.findOneAndUpdate({ _id: req.params.id},req.body, {new:true})
       if(updated){
        return res.status(200).json({
           success: true,
           message: "City updated successfully",
           data: updated
       })
       } 
       
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success: false,
            message: err
        }).next(err);
    }
}
