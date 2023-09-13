import {Schema, model} from 'mongoose'

let collection = 'countries'

const schema = new Schema({
    name : { type: String, required: true },
    capital: { type: String, required: false }
})

const countries = model('countries', schema)

export default countries