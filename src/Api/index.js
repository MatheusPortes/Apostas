const axios = require('axios').default;


const api = axios.create({
    baseURL: 'https://fierce-thicket-14025.herokuapp.com/https://api.betfair.com/exchange/betting/rest/v1.0',
    headers:{
        'X-Application': 'aw2zoyrswiSyR7pq',
        'X-Authentication': 'jkh/feJUO0m2FB5DL7PwZ1N7ZmQbn8khu9QwdLSWyv0=',
        'accept': 'application/json',
        'content-type': 'application/json',
    }
});

const api_login = axios.create({
    baseURL: 'https://fierce-thicket-14025.herokuapp.com/https://identitysso.betfair.com/api',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'X-application': 'aw2zoyrswiSyR7pq',
        'X-Authentication': '/Wn6+lPhLWImjTNtIyblXCO0oBEfDu2Xkwb1elibhyU=',
    }
})

module.exports = {api,api_login}

