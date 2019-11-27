
const request = require("request");

const createPayment = (sandbox = true,accessToken,currencyCode,amount,cb) => {
    
    let url = "https://api.sandbox.paypal.com/v2/checkout/orders";
    if (sandbox != true) {
        url = "https://api.paypal.com/v2/checkout/orders";
    }

    var payLoad = {
        "intent": "CAPTURE",
        "purchase_units": [{
            "amount": {
              "currency_code": currencyCode,
              "value": amount
            }
        }],
        "redirect_urls":
        {
            "return_url": "https://example.com/return",
            "cancel_url": "https://example.com/cancel"
        }
    };

    var options = { 
        method: 'POST',
        url: url,
        headers : {
              'content-type': "application/json",
              'authorization': "Bearer "+accessToken
        },
        body: payLoad,
        json:true
    };

    request(options, function (error, response, body) {
        if (error) {
            throw new Error(error);
        }
        else{
            cb(body)
        }
    });

}

module.exports = createPayment;