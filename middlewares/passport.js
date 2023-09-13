import passport from "passport";
import User from "../models/users.js";
import { Strategy, ExtractJwt } from "passport-jwt";

const opt = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}

const fn = async (payload, next) => {
    try{
        const user = await User.findOne( { email: payload.email } )

        if( !user ){
            next( null, false )
        }
        next( null, user )

    }catch(err){
        next( err, false )
    }
}

export default passport.use(new Strategy( opt , fn ))