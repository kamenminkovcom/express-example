import User from '../models/user.model';
import InvalidToken from '../models/invalidToken.model';
import {generateHashedPassword, generateSalt} from '../utils/encryption';

export const createUser = (req, res) => {
    const salt = generateSalt();
    const password = generateHashedPassword(req.body.password, salt);
    const userData = {
        salt,
        password,
        username: req.body.username
    };

    new User(userData)
        .save()
        .then(result => {
           res.status(201).json({message: 'success'});
        })
        .catch(err => {
            res.send(err)
        });
};

export const signIn = (req, res, next) => {
    const invalidCredentialsErrorMessage = 'Wrong username ot password!';

    User
        .findOne({username: req.body.username})
        .then(user => {
            if (!user || !user.authenticate(req.body.password)) {
                return res.status(401).json({message: invalidCredentialsErrorMessage});
            }

            req.user = user;
            next();
        })
        .catch(err => {
            res.send(err);
        });
};

export const logout = (req, res) => {
    res.json({message: 'Logout successful'});
};

