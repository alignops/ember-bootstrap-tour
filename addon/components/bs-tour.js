import Ember from 'ember';
//import layout from 'ember-bootstrap-tour/templates/components/bs-tour';

const layout = '<div class="bs-tour popover tour">' +
    '<div class="arrow"></div>' +
    '<h3 class="popover-title"></h3>' +
    '<div class="popover-content"></div>' +
    '<div class="popover-navigation">' +
      '<div class="btn-group">' +
        '<button class="btn btn-sm btn-default" data-role="prev">« Prev</button>' +
        '<button class="btn btn-sm btn-default" data-role="next">Next »</button>' +
      '</div>'+
      '<button class="btn btn-sm btn-default" data-role="end">End tour</button>' +
    '</div>' +
  '</div>';

const kDefaults = {
  name: "tour",
  steps: [],
  smartPlacement: true,
  keyboard: true,
  debug: false,
  backdrop: true,
  backdropContainer: 'body',
  backdropPadding: 0,
  redirect: true,
  orphan: false,
  duration: false,
  delay: 300,
  afterGetState: function (/*key, value*/) {},
  afterSetState: function (/*key, value*/) {},
  afterRemoveState: function (/*key, value*/) {},
  onStart: function (/*tour*/) {},
  onShow: function (/*tour*/) {},
  onShown: function (/*tour*/) {},
  onHide: function (/*tour*/) {},
  onHidden: function (/*tour*/) {},
  onNext: function (/*tour*/) {},
  onPrev: function (/*tour*/) {},
  onPause: function (/*tour, duration*/) {},
  onResume: function (/*tour, duration*/) {},
  onRedirectError: function (/*tour*/) {}
};

export default Ember.Component.extend(
{
  classNames: ['bs-tour'],

  _tour: null,

  loadTour: Ember.on('didInsertElement', function()
  {
    var config = this._buildConfig();

    var tour = new window.Tour(config);
      tour.init();
      tour.start();

    this.set('_tour', tour);
  }),

  destroyTour: Ember.on('willDestroyElement', function()
  {
    Ember.run.cancel(this.scheduledUpdate);
  }),

  onEnd: function(){},

  _buildConfig: function()
  {
    var _this = this;
    var defaultKeys = Object.keys(kDefaults);
    var config = {
      container: this.getWithDefault('containerElement', "body"),
      template: layout,
      onEnd: function(tour)
      {
        let onEnd = _this.getAttr('onEnd');
        if(typeof onEnd === 'function')
        {
          onEnd.apply(_this, arguments);
        }

        _this.sendAction('onFinish', tour);
      }
    };

    for (var i = 0; i < defaultKeys.length; i++)
    {
      let configKey = defaultKeys[i];
      config[configKey] = this.getWithDefault(configKey, kDefaults[configKey]);
    }

    return config;
  }
});
