import mongoose, {Schema,model,Types} from "mongoose";

let colection = 'cities'

const schema = new Schema({
    country: {type: 'String',required: true},
    population: {type: 'Number',required: false},
    foundation: {type: 'String', required: false},
    photo: {type: 'String',required: true},
    city: { type: 'String',required: true},
    description: {type: 'String',required: true},
    smalldescription: {type:'String',required: false},
    featuredLocation: {type:'String',required: false},
},{timestamps:true})

const city = model('city',schema);

export default city;