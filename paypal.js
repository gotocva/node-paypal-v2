
const initPayment = require("./paypal/index");

export const makePayment = async (req,res) => {
    
    initPayment(req.body.sandbox,req.body.paypal.client_id,req.body.paypal.client_secret,req.body.currency,req.body.amount,function(result){
        res.send(result);
    });

};