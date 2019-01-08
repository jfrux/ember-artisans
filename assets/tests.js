'use strict';

define('ember-raf-scheduler/test-support/register-waiter', ['exports', 'ember-raf-scheduler'], function (exports, _emberRafScheduler) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = registerWaiter;
  function registerWaiter() {
    // We can't rely on the importable Ember since shims are no
    // longer included by default, so use the global instance.
    // eslint-disable-next-line
    Ember.Test.registerWaiter(function () {
      return _emberRafScheduler.default.jobs === 0;
    });
  }
});
define("dummy/tests/spec/index.spec", [], function () {
  "use strict";

  describe('ember-artisans', function () {
    it('has tests', function () {
      expect(true).toBe(true);
    });
  });
});
define("dummy/tests/test-helper", ["@ember/test-helpers", "ember-qunit", "dummy/app", "dummy/config/environment"], function (_testHelpers, _emberQunit, _app, _environment) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
