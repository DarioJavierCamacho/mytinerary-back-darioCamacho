import user from '../../models/users.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const usersController = {
    signUp: async (req, res, next) => {
        try {

            const passwordHash = bcrypt.hashSync(req.body.password, 10)
            console.log(passwordHash)

            let body = { ...req.body }
            body.password = passwordHash

            const newUser = await user.create(body)

            /*const equal = bcrypt.compareSync(req.body.password, passwordHash)
 
            console.log(equal);*/
            const token = jwt.sign({ email: newUser.email }, process.env.SECRET_KEY, { expiresIn: '1h' })
            return res.status(201).json({
                success: true,
                user: { usrName: newUser.usrName, usrSurname: newUser.usrSurname, email: newUser.email, pictureUrl: newUser.pictureUrl },
                token: token,
                message: 'Sign up successfully'
            })



        } catch (error) {
            console.log(error);
            next(error)
        }
    },
    signIn: async (req, res, next) => {
        try {
            const { email, password } = req.body

            const userInDB = await user.findOne({ email })

            if (!userInDB) {
                return res.json({ success: false, error: "Incorrect email or password" })
            }

            const validPassword = bcrypt.compareSync(password, userInDB.password)

            if (!validPassword) {
                return res.json({ success: false, error: "Incorrect email or password!" })
            }

            const userResponse = { email: userInDB.email, pictureUrl: userInDB.pictureUrl, name: userInDB.usrName, surname: userInDB.usrSurname, _id: userInDB._id }

            const token = jwt.sign({ email: userInDB.email }, process.env.SECRET_KEY)

            return res.status(200).json({ success: true, user: userResponse, token: token })

        } catch (error) {
            return res.json({ success: false, response: error })
        }

    },
    signInToken: (req, res, next) => {
        try {
            const userResponse = { email: req.user.email, pictureUrl: req.user.pictureUrl, usrName: req.user.usrName, usrSurname: req.user.usrSurname, _id: req.user._id }
            return res.status(200).json({ success: true, user: userResponse })
        }
        catch (e) {
            console.log(e)
            return res.status(500).json({ success: false, response: e });
        }
    }


}
export default usersController;
