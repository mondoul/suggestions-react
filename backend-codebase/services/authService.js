import jwt from 'express-jwt';
import { getConfig } from '../config';
var config = getConfig();

export const authCheck = jwt({
    secret: new Buffer(config.auth0Secret, 'base64'),
    audience: config.auth0ClientId
});
