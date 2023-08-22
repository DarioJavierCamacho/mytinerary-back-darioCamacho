import {Schema,model,Types} from "mongoose";

let colection = 'cities'

const schema = new Schema({
    country: {type: 'string',required: true},
    population: {type: 'number',required: false},
    foundation: {type: 'string', required: false},
    photo: {type: 'string',required: true},
    city: {type:'string',required: true},
    description: {type: 'string',required: true},
    smalldescription: {type:'string',required: false},
    featuredLocation: {type:'string',required: false}

},{timestamps:true})

const city = model('city',schema);

export default city;