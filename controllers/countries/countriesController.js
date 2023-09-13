import countries from "../../models/countries.js";

const countriesController = {
    getAllCountries: async (req, res, next) => {
        try {
            const allCountries = await countries.find();
            return res.status(200).json({ success: true, response: allCountries });
        } catch (error) {
            return res.status(500).json({ sucess: false, response: error })
        }
    },
    getOneCountry: async (req, res, next) => {
        try {
            const country = await countries.findOne({ _id: req.params.id })
            if (country) {
                 return res.status(200).json({ sucess: true, response: country })
            }
           return res.status(500).json({sucess: true, response: "Country Not found"})
        } catch (error) {
            return res.status(500).json({ sucess: false, response: error })
        }
    },
    createCountry: async (req, res, next) => {
        try {
            const country = await countries.create(req.body)
            return res.status(201).json({ sucess: true, response: country})
        } catch (error) {
            return res.status(500).json({ sucess: false, response: error })
        }
    },
    deleteCountry: async (req, res, next) => {
        try {
            const deleted = await countries.findByIdAndDelete( {_id : req.params.id})
            if(deleted){
                return res.status(200).json({success: true, message:"sucessfully deleted"})
            }
            return res.status(500).json({success: false, message:"Country not found"})
        } catch (error) {
            return res.status(500).json({success: false, response: error})
        }
    }
}

export default countriesController