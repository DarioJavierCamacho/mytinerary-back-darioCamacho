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
    
                const esIgual = bcrypt.compareSync(req.body.password, passwordHash)
    
                console.log(esIgual);
    
                return res.status(201).json({
                    success: true,
                    userData: newUser,
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
        
                const userInDB = await user.findOne( {email} ) 
        
                if( !userInDB ){
                    return res.json( { success: false, error: "Incorrect email or password" } )
                }
        
                const validPassword = bcrypt.compareSync( password, userInDB.password )
        
                if( !validPassword ){
                    return res.json( { success: false, error: "Incorrect email or password" } )
                }
        
                const userResponse = { email: userInDB.email, image: userInDB.usrImg, name: userInDB.usrName, _id: userInDB._id }
        
                const token = jwt.sign( {email: userInDB.email }, process.env.SECRET_KEY )
        
                return res.status(200).json( { success:true, user: userResponse, token : token } )
        
            } catch (error) {
                return res.json( {success:false, error: error} )
            }
        
        },
        signInToken:  (req, res, next) => {
        const userResponse = { email: req.user.email, image: req.user.image, name: req.user.name, _id: req.user._id }
        return res.status(200).json( { success: true , user : userResponse } )
    }


}
    export default usersController;
