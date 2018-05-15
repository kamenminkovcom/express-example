import {Router} from 'express';
import passport from 'passport';
import * as UserController from '../controllers/user.controller';
import {generateRefreshToken, validateRefreshToken} from '../middlewares/refreshToken';
import {generateAccessToken} from '../middlewares/accessToken';
import {sendTokens} from '../middlewares/respond';
import {createInvalidToken} from '../middlewares/invalidToken';

const userRouter = new Router();

userRouter.post('/signup', UserController.createUser);

userRouter.post('/signin', UserController.signIn, generateRefreshToken, generateAccessToken, sendTokens);

userRouter.post('/logout', passport.authenticate('jwt', {session: false}), createInvalidToken, UserController.logout);

userRouter.post('/token', validateRefreshToken, generateAccessToken, sendTokens);

export default userRouter;