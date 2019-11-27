const accessToken = require("./accessToken");
const createPayment = require("./createPayment");

// initPayment
function initPayment(sandbox = true,CLIENT_ID,SECRET,currency,amount,cb){
    accessToken(sandbox,CLIENT_ID,SECRET,function(body,token){
        body = JSON.parse(body);
        createPayment(sandbox,body.access_token,currency,amount,function(data){
            // cb(data);
            cb({token,data});
        });
    });
}

module.exports = initPayment;
module.initPayment = initPayment;