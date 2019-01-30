/**
 * Pesaway Pesamoni API Documentation
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse200'));
  } else {
    // Browser globals (root is window)
    if (!root.Pesamoni) {
      root.Pesamoni = {};
    }
    root.Pesamoni.DefaultApi = factory(root.Pesamoni.ApiClient, root.Pesamoni.InlineResponse200);
  }
}(this, function(ApiClient, InlineResponse200) {
  'use strict';

  /**
   * Default service.
   * @module pesamoni_javascript/DefaultApi
   * @version 1.0.3
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:pesamoni_javascript/DefaultApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the transactionsPost operation.
     * @callback module:pesamoni_javascript/DefaultApi~transactionsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Below are parameters and their respective expected responses. In order to try out the service, simply click Try it out.
     * @param {String} method Enter a request method. To check for request methods &lt;a href&#x3D;&#39;&#39;&gt;click here&lt;/a&gt;
     * @param {String} amount Enter the amount you would like to request for. &lt;p style&#x3D;\&quot;color:red\&quot;&gt;This method applies for request methods &lt;b&gt;acreceive, acreceivekeac, acsend, acsendkeac, acsendbank, pesab2c, sendairtime, cardaccept&lt;/b&gt;&lt;/p&gt;
     * @param {Object} opts Optional parameters
     * @param {String} opts.mobile Enter the mobile number you would like to execute the above method in format 256.... or 254...&lt;p style&#x3D;\&quot;color:red\&quot;&gt;This method applies for request methods &lt;b&gt;acreceive, acreceivekeac, acsend, acsendkeac, senderid, sendsms, sendairtime&lt;/b&gt;&lt;/p&gt;
     * @param {String} opts.holdername Enter name of payer for Visa/MasterCard transactions&lt;p style&#x3D;\&quot;color:red\&quot;&gt;This method applies for request method &lt;b&gt;cardaccept&lt;/b&gt;&lt;/p&gt;
     * @param {String} opts.cardnumber Enter the Visa/MasterCard cardnumber&lt;p style&#x3D;\&quot;color:red\&quot;&gt;This method applies for request method &lt;b&gt;cardaccept&lt;/b&gt;&lt;/p&gt;
     * @param {String} opts.cvv Enter the Visa/MasterCard cvv&lt;p style&#x3D;\&quot;color:red\&quot;&gt;This method applies for request method &lt;b&gt;cardaccept&lt;/b&gt;&lt;/p&gt;
     * @param {String} opts.exp Enter the Visa/MasterCard expiry date in the format MM/YYYY e.g 07/2030&lt;p style&#x3D;\&quot;color:red\&quot;&gt;This method applies for request method &lt;b&gt;cardaccept&lt;/b&gt;&lt;/p&gt;
     * @param {String} opts.currency Enter the currency you intend to make the transaction for Visa/MasterCard based transactions&lt;p style&#x3D;\&quot;color:red\&quot;&gt;This method applies for request method &lt;b&gt;cardaccept&lt;/b&gt;&lt;/p&gt;
     * @param {String} opts.account Enter the Pesamoni account you would like to use for this transaction&lt;p style&#x3D;\&quot;color:red\&quot;&gt;This method applies for request method &lt;b&gt;paybills&lt;/b&gt;&lt;/p&gt;
     * @param {String} opts.reference Enter your user generated transaction reference&lt;p style&#x3D;\&quot;color:red\&quot;&gt;This method applies for request methods &lt;b&gt;acreceive, acreceivekeac, acsend, acsendkeac, sendsms, transactionstatus, sendairtime, pesab2c, sendsms, cardaccept&lt;/b&gt;&lt;/p&gt;
     * @param {String} opts.genericmsg Enter your user generated generic message for the requested transaction&lt;p style&#x3D;\&quot;color:red\&quot;&gt;This method applies for request methods &lt;b&gt;acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept&lt;/b&gt;&lt;/p&gt;
     * @param {String} opts.token Enter your user generated token for the above mentioned method&lt;p style&#x3D;\&quot;color:red\&quot;&gt;This method applies for request methods &lt;b&gt;acreceive, acreceivekeac, acsend, acsendkeac, sendsms, sendairtime, pesab2c, sendsms, cardaccept&lt;/b&gt;&lt;/p&gt;
     * @param {String} opts.bouquet Enter the bouquet or package you would like to pay for&lt;p style&#x3D;\&quot;color:red\&quot;&gt;This method applies for request methods &lt;b&gt;paybills&lt;/b&gt;&lt;/p&gt;
     * @param {String} opts.payoption Enter your prefered payment option&lt;p style&#x3D;\&quot;color:red\&quot;&gt;This method applies for request methods &lt;b&gt;paybills&lt;/b&gt;&lt;/p&gt;
     * @param {String} opts.meternumber Enter the meter number for the intended payment&lt;p style&#x3D;\&quot;color:red\&quot;&gt;This method applies for request methods &lt;b&gt;paybills&lt;/b&gt;&lt;/p&gt;
     * @param {module:pesamoni_javascript/DefaultApi~transactionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.transactionsPost = function(method, amount, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'method' is set
      if (method === undefined || method === null) {
        throw new Error("Missing the required parameter 'method' when calling transactionsPost");
      }

      var pathParams = {
      };
      var queryParams = {
        'method': method,
        'amount': amount,
        'mobile': opts['mobile'],
        'holdername': opts['holdername'],
        'cardnumber': opts['cardnumber'],
        'cvv': opts['cvv'],
        'exp': opts['exp'],
        'currency': opts['currency'],
        'account': opts['account'],
        'reference': opts['reference'],
        'genericmsg': opts['genericmsg'],
        'token': opts['token'],
        'bouquet': opts['bouquet'],
        'payoption': opts['payoption'],
        'meternumber': opts['meternumber'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apipassword', 'apiusername'];
      var contentTypes = [];
      var accepts = [];
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/transactions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
