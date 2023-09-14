import express from "express";
const usersRouter = express.Router();

import schema from '../schemas/usersSchema.js';
import validator from "../middlewares/usersValidator.js";
import usersController from "../controllers/users/usersController.js";
import { emailExists } from "../middlewares/emailExists.js";
import passport from "../middlewares/passport.js";
const {signUp,signIn,signInToken} = usersController



usersRouter.post('/signup',validator(schema),emailExists,signUp)
usersRouter.post('/signIn',signIn)
usersRouter.post('/signin/token', passport.authenticate( 'jwt', {session: false} ), signInToken )

export default usersRouter;
