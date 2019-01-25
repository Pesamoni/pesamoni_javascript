# Pesamoni Javascript Client Library

The Pesamoni Pesaway Javascript Library provides integration access to Pesamoni services. You can view API features by clicking the link https://pesamoni.com/developers#features-intro.

## Installation

### For [Node.js](https://nodejs.org/)

```shell
npm install pesamoni --save
```
You should now be able to `require('pesamoni')` in javascript files from the directory you ran the last 
command above from.

#### git

You can also install it directly via shell.

```shell
    npm install pesamoni/pesamoni_javascript --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following 

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Quick Start Example

The SDK needs to be instantiated using your API username and API password, which you can get from your [Pesamoni business account](https://pesamoni.com/business/dash).

You can register a new Pesamoni business account [Here](https://pesamoni.com/businesses/sign_up) or Sign in [Here](https://pesamoni.com/businesses/sign_in)

```javascript
var Pesamoni = require('pesamoni');

var defaultClient = Pesamoni.ApiClient.instance;

// Configure API key authorization: apipassword
var apipassword = defaultClient.authentications['apipassword'];
apipassword.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apipassword.apiKeyPrefix['apipassword'] = "Token"

// Configure API key authorization: apiusername
var apiusername = defaultClient.authentications['apiusername'];
apiusername.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiusername.apiKeyPrefix['apiusername'] = "Token"

var api = new Pesamoni.DefaultApi()

```

### Accepting funds from mobile subscriber

```javascript
// you can either use method acreceive or acreceivekeac as explained below -->
// method acreceive
//This method enables you receive funds from a mobile subscriber in your registered native currency on the Pesamoni platform. If for instance your account is registered in currency UGX and you request money from a Kenyan number e.g 254712346789, a Pesamoni exchange rate will automatically be applied and money deposited into your Pesamoni wallet in your default currency
// method acreceivekeac
//You can have two native currencies on your Pesamoni account on request. If you would like to deposit funds from a mobile subscriber to your Kenyan Pesamoni wallet account then this is the method you use. -->

var method = "acreceive"; // {String} Enter a request method. To check for request methods <a href=''>click here</a>
var amount = "amount_example"; // {String} Enter the amount you would like to request for. <p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, acsendbank, pesab2c, sendairtime, cardaccept</b></p>
var opts = { 
  'mobile': "mobile_example", // {String} Enter the mobile number you would like to execute the above method in format 256.... or 254...<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, senderid, sendsms, sendairtime</b></p>
  'reference': "reference_example", // {String} Enter your user generated transaction reference<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, transactionstatus, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'genericmsg': "genericmsg_example", // {String} Enter your user generated generic message for the requested transaction<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'token': "token_example", // {String} Enter your user generated token for the above mentioned method<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transactionsPost(method, amount, opts, callback);
```
### Sending funds to a mobile subscriber

```javascript
// you can either use method acreceive or acreceivekeac as explained below
// acsend
// This method enables you send funds to a mobile subscriber in your registered native currency on the Pesamoni platform. If for instance your account is registered in currency UGX and you send money to a kenyan number e.g 254712346789, a Pesamoni exchange rate will automatically be applied and the equivalent exchange amount deducted from your Pesamoni wallet in your default currency
// acsendkeac
// You can have two native currencies on your Pesamoni account on request. If you would like to send funds from your

var method = "acsend"; // {String} Enter a request method. To check for request methods <a href=''>click here</a>
var amount = "amount_example"; // {String} Enter the amount you would like to request for. <p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, acsendbank, pesab2c, sendairtime, cardaccept</b></p>
var opts = { 
  'mobile': "mobile_example", // {String} Enter the mobile number you would like to execute the above method in format 256.... or 254...<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, senderid, sendsms, sendairtime</b></p>
  'reference': "reference_example", // {String} Enter your user generated transaction reference<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, transactionstatus, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'genericmsg': "genericmsg_example", // {String} Enter your user generated generic message for the requested transaction<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'token': "token_example", // {String} Enter your user generated token for the above mentioned method<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transactionsPost(method, amount, opts, callback);
```
### Accepting Card Payments e.g VISA/MASTERCARD

```javascript

var method = "cardaccept"; // {String} Enter a request method. To check for request methods <a href=''>click here</a>

var amount = "amount_example"; // {String} Enter the amount you would like to request for. <p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, acsendbank, pesab2c, sendairtime, cardaccept</b></p>

var opts = { 
  'holdername': "holdername_example", // {String} Enter name of payer for Visa/MasterCard transactions<p style=\"color:red\">This method applies for request method <b>cardaccept</b></p>
  'cardnumber': "cardnumber_example", // {String} Enter the Visa/MasterCard cardnumber<p style=\"color:red\">This method applies for request method <b>cardaccept</b></p>
  'cvv': "cvv_example", // {String} Enter the Visa/MasterCard cvv<p style=\"color:red\">This method applies for request method <b>cardaccept</b></p>
  'exp': "exp_example", // {String} Enter the Visa/MasterCard expiry date in the format MM/YYYY e.g 07/2030<p style=\"color:red\">This method applies for request method <b>cardaccept</b></p>
  'currency': "currency_example", // {String} Enter the currency you intend to make the transaction for Visa/MasterCard based transactions<p style=\"color:red\">This method applies for request method <b>cardaccept</b></p>
  'reference': "reference_example", // {String} Enter your user generated transaction reference<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, transactionstatus, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'genericmsg': "genericmsg_example", // {String} Enter your user generated generic message for the requested transaction<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'token': "token_example", // {String} Enter your user generated token for the above mentioned method<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transactionsPost(method, amount, opts, callback);

```

### Bank transfers

```javascript
// you can either use method acsendbank or acsendbankeac as explained below
// acsendbank
// This method enables you send funds to a users bank account. A Pesamoni exchange rate will automatically be applied and the equivalent exchange amount deposited to your bank account dependent on your default currency.
// acsendbankeac
// You can have two native currencies on your Pesamoni account on request. If you would like to send funds from your Pesamoni wallet to a mobile subscriber from your Kenyan Pesamoni wallet account then this is the method you use.

var method = "acsendbank"; // {String} Enter a request method. To check for request methods <a href=''>click here</a>

var amount = "amount_example"; // {String} Enter the amount you would like to request for. <p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, acsendbank, pesab2c, sendairtime, cardaccept</b></p>

var opts = { 
  'currency': "currency_example", // {String} Enter the currency you intend to make the transaction for Visa/MasterCard based transactions<p style=\"color:red\">This method applies for request method <b>cardaccept</b></p>
  'account': "account_example", // {String} Enter the Pesamoni account you would like to use for this transaction<p style=\"color:red\">This method applies for request method <b>paybills</b></p>
  'reference': "reference_example", // {String} Enter your user generated transaction reference<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, transactionstatus, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'genericmsg': "genericmsg_example", // {String} Enter your user generated generic message for the requested transaction<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'token': "token_example", // {String} Enter your user generated token for the above mentioned method<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transactionsPost(method, amount, opts, callback);

```

### Sending Airtime to a mobile subsriber

```javascript
var method = "sendairtime"; // {String} Enter a request method. To check for request methods <a href=''>click here</a>

var amount = "amount_example"; // {String} Enter the amount you would like to request for. <p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, acsendbank, pesab2c, sendairtime, cardaccept</b></p>
var opts = { 
  'mobile': "mobile_example", // {String} Enter the mobile number you would like to execute the above method in format 256.... or 254...<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, senderid, sendsms, sendairtime</b></p>
  'reference': "reference_example", // {String} Enter your user generated transaction reference<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, transactionstatus, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'genericmsg': "genericmsg_example", // {String} Enter your user generated generic message for the requested transaction<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'token': "token_example", // {String} Enter your user generated token for the above mentioned method<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transactionsPost(method, amount, opts, callback);
```

### Sending to a Pesamoni users wallet

```javascript
var method = "pesab2c"; // {String} Enter a request method. To check for request methods <a href=''>click here</a>

var amount = "amount_example"; // {String} Enter the amount you would like to request for. <p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, acsendbank, pesab2c, sendairtime, cardaccept</b></p>
var opts = { 
  'account': "account_example", // {String} String | Enter the Pesamoni account you would like to use for this transaction<p style=\"color:red\">This method applies for request method <b>paybills</b></p>
  'reference': "reference_example", // {String} Enter your user generated transaction reference<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, transactionstatus, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'genericmsg': "genericmsg_example", // {String} Enter your user generated generic message for the requested transaction<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'token': "token_example", // {String} Enter your user generated token for the above mentioned method<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};

```

### Accepting funds from a Pesamoni user

```javascript
var method = "pesac2b"; // {String} Enter a request method. To check for request methods <a href=''>click here</a>

var amount = "amount_example"; // {String} Enter the amount you would like to request for. <p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, acsendbank, pesab2c, sendairtime, cardaccept</b></p>
var opts = { 
  'account': "account_example", // {String} String | Enter the Pesamoni account you would like to use for this transaction<p style=\"color:red\">This method applies for request method <b>paybills</b></p>
  'reference': "reference_example", // {String} Enter your user generated transaction reference<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, transactionstatus, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'genericmsg': "genericmsg_example", // {String} Enter your user generated generic message for the requested transaction<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'token': "token_example", // {String} Enter your user generated token for the above mentioned method<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
```

### Paying Utility Bills

```javascript

var method = "paybills"; // {String} Enter a request method. To check for request methods <a href=''>click here</a>

var amount = "amount_example"; // {String} Enter the amount you would like to request for. <p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, acsendbank, pesab2c, sendairtime, cardaccept</b></p>

var opts = { 
  'mobile': "mobile_example", // {String} Enter the mobile number you would like to execute the above method in format 256.... or 254...<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, senderid, sendsms, sendairtime</b></p>
  'account': "account_example", // {String} Enter the Pesamoni account you would like to use for this transaction<p style=\"color:red\">This method applies for request method <b>paybills</b></p>
  'reference': "reference_example", // {String} Enter your user generated transaction reference<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, transactionstatus, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'genericmsg': "genericmsg_example", // {String} Enter your user generated generic message for the requested transaction<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'token': "token_example", // {String} Enter your user generated token for the above mentioned method<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'bouquet': "bouquet_example", // {String} Enter the bouquet or package you would like to pay for<p style=\"color:red\">This method applies for request methods <b>paybills</b></p>
  'payoption': "payoption_example", // {String} Enter your prefered payment option<p style=\"color:red\">This method applies for request methods <b>paybills</b></p>
  'meternumber': "meternumber_example" // {String} Enter the meter number for the intended payment<p style=\"color:red\">This method applies for request methods <b>paybills</b></p>
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transactionsPost(method, amount, opts, callback);

```

### Checking transaction status

```javascript
var method = "transactionstatus"; // {String} Enter a request method. To check for request methods <a href=''>click here</a>

var reference = "reference_example"; // {String} Enter your user generated transaction reference<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, transactionstatus, sendairtime, pesab2c, sendsms, cardaccept</b></p>


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transactionsPost(method, reference, callback);
```

### Checking your Pesamoni Business Wallet Balance

```javascript
var method = "acbalance"; // {String} Enter a request method. To check for request methods <a href=''>click here</a>


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transactionsPost(method, callback);
```

## Sending SMS to a mobile subscriber

```javascript
var method = "sendsms"; // {String} Enter a request method. To check for request methods <a href=''>click here</a>
var message = "message_example"; // {String} Enter the message you would like to send to the mobile subscriber
var opts = { 
  'mobile': "mobile_example", // {String} Enter the mobile number you would like to execute the above method in format 256.... or 254...<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, senderid, sendsms, sendairtime</b></p>
  'reference': "reference_example", // {String} Enter your user generated transaction reference<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, transactionstatus, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'genericmsg': "genericmsg_example", // {String} Enter your user generated generic message for the requested transaction<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>
  'token': "token_example", // {String} Enter your user generated token for the above mentioned method<p style=\"color:red\">This method applies for request methods <b>acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept</b></p>

};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transactionsPost(method, message, opts, callback);

```



# Documentation for API Endpoints

All Endpoint URIs are relative to https://pesamoni.com/api/live/v1/transactions


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Pesamoni.

## License

The Library is available as open source under the terms of the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)

