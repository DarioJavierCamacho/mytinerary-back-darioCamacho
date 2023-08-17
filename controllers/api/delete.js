import city from "../../models/City.js";

export default async (req,res,next) => {
    try{
        let destroyed = await city.findByIdAndDelete(req.params.id)
        if(destroyed){
            return res.status(200).json({
                success: true,
                message: "City deleted successfully",
                response: destroyed
            })
        }else{
            return res.status(404).json({
                success: false,
                response: 'not found'
            })}
    }catch(err){
        console.log(err);
        next(err);
    }
}