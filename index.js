/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-bootstrap-tour',

  included: function(target)
  {
    this._super.included.apply(this, arguments);

    var app = target.app || target;

    app.import(app.bowerDirectory + '/bootstrap-tour/build/js/bootstrap-tour-standalone.min.js');
    app.import(app.bowerDirectory + '/bootstrap-tour/build/css/bootstrap-tour-standalone.min.css');
  }
};
