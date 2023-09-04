import city from "../../models/City.js";

export default async (req, res, next)=>{
    try{
        let mySort = {city: 1}
        let found = await city.find().sort(mySort);//ordenados alfabeticamente por nombre de ciudad
        return res.status(200).json({cities:found,success:true});
    }
    catch(error){
        console.log(error);
        return res.status(500).json({success:false , response: error})
    }
}
