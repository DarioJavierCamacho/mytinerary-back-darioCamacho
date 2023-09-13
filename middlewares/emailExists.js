import user from "../models/users.js"

export const emailExists = async (req, res, next) => {

    const exists = await user.findOne({ email: req.body.email })
    if (!exists) {
        return next()
    }

    return res.status(400).json({
        success: false,
        message: 'This email is already registered'
    })
}