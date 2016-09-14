import AuthService from './AuthService';
import config from '../config';

export const auth = new AuthService(config.auth0ClientId, config.auth0Domain, config.callbackUrl);
