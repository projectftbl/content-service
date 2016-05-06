var App = require('@ftbl/app')[require('@ftbl/utility').getApp(process.argv)]
  , pkg = require('../package.json');

module.exports = new App(pkg.name, __dirname
  , require('@ftbl/aggregation-service')
  , require('@ftbl/publish-service')
  , require('@ftbl/timeline-service')
);