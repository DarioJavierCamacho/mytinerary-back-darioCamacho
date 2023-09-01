import express from "express";
import itinerariesController from "../controllers/itineraries/itinerariesController.js";

const itinerariesRouter = express.Router();
const {getAllItineraries,getOneItinerary,getItinerariesByCityID,createOneItinerary,updateItinerary,deleteItinerary}=itinerariesController

itinerariesRouter.get("/",getAllItineraries)
itinerariesRouter.get("/:id",getOneItinerary)
itinerariesRouter.post("/", createOneItinerary)
itinerariesRouter.get("/city/:id",getItinerariesByCityID)
itinerariesRouter.delete("/:id",deleteItinerary)
itinerariesRouter.put("/:id", updateItinerary)

export default itinerariesRouter;