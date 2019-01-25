/**
 * Pesaway Pesamoni API Documentation
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse200', 'pesamoni_javascript/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/InlineResponse200'), require('./pesamoni_javascript/DefaultApi'));
  }
}(function(ApiClient, InlineResponse200, DefaultApi) {
  'use strict';

  /**
   * Automate mobile money payments, bank transfers and more...<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Pesamoni = require('index'); // See note below*.
   * var xxxSvc = new Pesamoni.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Pesamoni.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Pesamoni.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Pesamoni.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.3
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The DefaultApi service constructor.
     * @property {module:pesamoni_javascript/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
