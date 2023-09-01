import itinerary from "../../models/Itinerary.js";


const itinerariesController = {

    getAllItineraries: async (req, res, next) => {
        try {
            const itineraries = await itinerary.find().populate({ path: 'city' });
            res.status(200).json({ response: itineraries })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    getOneItinerary: async (req, res, next) => {
        try {
            const Itinerary = await itinerary.findOne({ _id: req.params.id })
            res.status(200).json({ success: true, response: Itinerary })
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, response: error })
        }
    },
    getItinerariesByCityID: async (req, res, next) => {
        try {
            let itinerariesByCity = await itinerary.find({ city: req.params.id })
            res.status(200).json({ response: itinerariesByCity })
        } catch (error) {
            console.log(error);
            res.status(500).json({ response: error });
        }
    },
    createOneItinerary: async (req, res, next) => {
        try {
            let created = await itinerary.create(req.body);
            res.status(201).json({ sucess: true, response: created })
        } catch (error) {
            console.log(error);
            res.status(500).json({ error })
        }
    },
    updateItinerary: async (req, res, next) => {
        try {
            let updated = await itinerary.findOneAndUpdate({ _id: req.params.id },req.body,{new:true})
            res.status(200).json({ sucess: true, message: "itinerary updated successfully", response: updated })
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, response: error })
        }
    },
    deleteItinerary: async (req, res, next) => {
        try {
            let deleted = await itinerary.findByIdAndDelete({ _id: req.params.id })
            if (deleted) {
                res.status(200).json({ sucess: true, message: "successfully deleted", response: deleted })
            } else {
                res.status(404).json({ sucess: false, message: "not found", response: deleted })
            }

        } catch (error) {
            console.log(error);
            res.status().json({ sucess: false, response: error })
        }
    }

}

export default itinerariesController;