import itinerary from "../../models/Itinerary.js";


const itinerariesController = {

    getAllItineraries: async (req, res, next) => {
        try {
            const itineraries = await itinerary.find().populate({ path: 'city' });
            return res.status(200).json({ response: itineraries })
        } catch (error) {
            return res.status(500).json({ error })
        }
    },
    getOneItinerary: async (req, res, next) => {
        try {
            const Itinerary = await itinerary.findOne({ _id: req.params.id })
            return res.status(200).json({ success: true, response: Itinerary })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ success: false, response: error })
        }
    },
    getItinerariesByCityID: async (req, res, next) => {
        try {
            let itinerariesByCity = await itinerary.find({ city: req.params.id })
            return res.status(200).json({ response: itinerariesByCity })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ response: error });
        }
    },
    createOneItinerary: async (req, res, next) => {
        try {
            let created = await itinerary.create(req.body);
            return res.status(201).json({ sucess: true, response: created })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error })
        }
    },
    updateItinerary: async (req, res, next) => {
        try {
            let updated = await itinerary.findOneAndUpdate({ _id: req.params.id },req.body,{new:true})
            return res.status(200).json({ sucess: true, message: "itinerary updated successfully", response: updated })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ success: false, response: error })
        }
    },
    deleteItinerary: async (req, res, next) => {
        try {
            let deleted = await itinerary.findByIdAndDelete({ _id: req.params.id })
            if (deleted) {
                return res.status(200).json({ sucess: true, message: "successfully deleted", response: deleted })
            } else {
                return res.status(404).json({ sucess: false, message: "not found", response: deleted })
            }

        } catch (error) {
            console.log(error);
            return res.status().json({ sucess: false, response: error })
        }
    }

}

export default itinerariesController;