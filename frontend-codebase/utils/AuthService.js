import { isTokenExpired } from './jwtHelpers';
import Auth0 from 'auth0-js';

class AuthService {
    constructor(clientId, domain, callbackUrl) {

        // Configure Auth0
        this.auth0 = new Auth0({
            clientID: clientId,
            domain: domain,
            responseType: 'token',
            callbackURL: callbackUrl
        });

        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }

    login(params, onError){
        localStorage.setItem('returnUrl', window.location.pathname);
        params.scope = 'openid email'; // adding the email to the JWT
        this.auth0.login(params, onError);
    }

    signup(params, onError){
        params.scope = 'openid email'; // adding the email to the JWT
        this.auth0.signup(params, onError);
    }

    parseHash(hash, callback){
        const authResult = this.auth0.parseHash(hash);
        if (authResult && authResult.idToken) {
            this.setToken(authResult.idToken);
            this.auth0.getProfile(authResult.idToken, (error, profile) => {
                if (error) {
                    console.log('Error loading the Profile', error);
                } else {
                    this.setProfile(profile);
                    callback(profile);
                }
            });
            return localStorage.getItem('returnUrl');
        }
        else {
            return '/';
        }
    }

    loggedIn(){
        // Checks if there is a saved token and it's still valid
        const token = this.getToken();
        return !!token && !isTokenExpired(token);
    }

    setProfile(profile){
        // Saves profile data to localStorage
        localStorage.setItem('profile', JSON.stringify(profile));
    }

    getProfile(){
        // Retrieves the profile data from localStorage
        const profile = localStorage.getItem('profile');
        return profile ? JSON.parse(localStorage.profile) : {}
    }

    setToken(idToken){
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken);
    }

    getToken(){
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token');
    }

    logout(){
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    }
}

export default AuthService;