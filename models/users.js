import { Schema , model } from "mongoose";


let collection = 'users'

const schema = new Schema ({
    usrName:{type: String, required: true},
    usrSurname:{type: String, required: true},
    pictureUrl: { type: String, required: false,default: "https://winaero.com/blog/wp-content/uploads/2017/12/User-icon-256-blue.png"},
    email: { type: String, required: true},
    password: { type: String, required: true},
    country: { type: String, required: false,default: 'United States'},
    birth: { type: Date },
    age: { type: Number },
    phone: { type: Number },
    verified: { type: Boolean, default: false }

},{timestamps: true})

const user = model('users', schema)

export default user