import joi from "joi";
import joiPwd from 'joi-password-complexity'

const complexityOptions = {
    min: 4,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 3,
};

const schema = joi.object({
    usrName: joi.string().min(3).max(15).required().messages({
        "string.min": "minimum is 3 characters",
        "any.required": "name is required",
        "string.empty": "name cannot be empty",
    }),
    usrSurname: joi.string().min(3).max(15).required().messages({
        "string.empty": "lastname cannot be empty",
        "any.required": "lastname is required",
    }),
    pictureUrl: joi.string().uri(),
    email: joi.string().email().required().messages({
        "string.empty": "Email cannot be empty",
        "any.required": "Email is required",
        "string.email": "email is not valid",
    }),
    password: joiPwd(complexityOptions),
    country: joi.string(),
    birth: joi.date().max(Date.now()),
    age: joi.number().min(0).max(60),
    phone: joi.number(),
    verified: joi.boolean(),
})

export default schema;