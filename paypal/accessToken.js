
const request = require("request");

const accessToken = (sandbox = true,CLIENT_ID,SECRET,cb) => {
    
    let url = "https://api.sandbox.paypal.com/v1/oauth2/token";
    if (sandbox != true) {
        url = "https://api.paypal.com/v1/oauth2/token";
    }

	const token  = CLIENT_ID+":"+SECRET;
    const encodedKey = new Buffer(token).toString('base64');
    console.log("token :"+encodedKey);
	const payload = "grant_type=client_credentials&Content-Type=application%2Fx-www-form-urlencoded&response_type=token&return_authn_schemes=true";

    const options = { 
        method: 'POST',
        url: url,
        headers: {
            'authorization': "Basic "+encodedKey,
            'accept': "application/json",
            'accept-language': "en_US",
            'cache-control': "no-cache",
            'content-type': "application/x-www-form-urlencoded"
        },
        body:payload
    }

    request(options, function (error, response, body) {
        if (error) {
        throw new Error(error);
        }
        else{ 
            cb(body,encodedKey);
        }
    });
}

module.exports = accessToken;
module.accessToken = accessToken;