module.exports = {
    database: 'localhost/suggestions',
    callbackUrl: process.env.HOME_URL || 'http://localhost:3000',
    auth0Secret: process.env.AUTH0_SECRET || 'xIOzOMRQX8tBgDKds9iEZLMWb72H2qovgDzUldgDanmaHes3vzancY9-zz58O4Bw',
    auth0ClientId: process.env.AUTH0_CLIENTID || 'ClohFBYJyM7q0Nc6y9tY5blht98wjaBw'
};