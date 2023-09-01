import city from "../../models/City.js";

export default async (req, res, next)=>{
    try{
        let mySort = {city: 1}
        let found = await city.find().sort(mySort).populate({path: 'itineraries',
        select : 'name usrImg -_id'});//ordenados alfabeticamente por nombre de ciudad
        return res.status(200).json({cities:found,sucess:true});
    }
    catch(error){
        console.log(error);
        next(error);
    }
}
