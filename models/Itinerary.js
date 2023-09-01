import { Schema, model, Types } from "mongoose";

let colection = 'itineraries'

const schema = new Schema({
    name: { type: 'String', required: true },
    usrImg: { type: 'String', required: true },
    img: { type: 'String', required: true},
    usrName: { type: 'String', required: true },
    price: { type: 'Number', required: true },
    duration: { type: 'String', required: true },
    likes: { type: 'Number', default: 0, required: true },
    hashtags: [{ type: 'String', required: false }],
    comments: [{ type: 'String', required: false }],
    city: { type: Schema.ObjectId, ref: 'city', required: true }
}, { timestamps: true })

const itinerary = model('itinerary', schema);

export default itinerary;