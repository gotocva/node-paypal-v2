# node-paypal-v2
NodeJs wrapper for paypal payment gateway v2 REST api #paypal

    ```json
    {
    "sandbox" : true, // true = sandbox false = production
    "paypal" : {
        "client_id": "YOUR_PAYPAL_CLIENT_ID",
        "client_secret": "YOUR_PAYPAL_CLIENT_SECRET"
    },
    "amount" : "200",
    "currency" : "USD"
    }
    ```

    Call the below function with above params 

    ```js
        initPayment(req.body.sandbox,req.body.paypal.client_id,req.body.paypal.client_secret,req.body.currency,req.body.amount,function(result){
            res.send(result);
        });
    ```

    ```json
    {
        "token": "QWE4OXFZeWN2aF9ranlxUHU2MzFEOTVBdEVFZF90R2sybC1XVjNtRndaZHJRUzdFV1pIcnN6a0I5S2VOdkpuOXYzNWJScV9POGZ1c0VfRWY6RUJTMFo0X2NqOVVRYUZnRHRiVlZhWXVWUDNnTWZGTi1YZWs3WlVyOU50c01OZU12UDJCTXJ3c3czU0V2alZSQUdDOEJSSVZFYmVuV2hzeXo=",
        "data": {
            "id": "196744540V7545823",
            "links": [
                {
                    "href": "https://api.sandbox.paypal.com/v2/checkout/orders/196744540V7545823",
                    "rel": "self",
                    "method": "GET"
                },
                {
                    "href": "https://www.sandbox.paypal.com/checkoutnow?token=196744540V7545823",
                    "rel": "approve",
                    "method": "GET"
                },
                {
                    "href": "https://api.sandbox.paypal.com/v2/checkout/orders/196744540V7545823",
                    "rel": "update",
                    "method": "PATCH"
                },
                {
                    "href": "https://api.sandbox.paypal.com/v2/checkout/orders/196744540V7545823/capture",
                    "rel": "capture",
                    "method": "POST"
                }
            ],
            "status": "CREATED"
        }
    }
    ```
