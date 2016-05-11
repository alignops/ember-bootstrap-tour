import Ember from 'ember';


export default Ember.Route.extend(
{
  model: function()
  {
    return {
      model1: [
      {
        element: '#tour-stop-1',
        title: 'This is a tour title',
        content: 'This is the tour content',
        placement: 'bottom'
      },
      {
        element: '#tour-stop-2',
        title: 'This is a tour title',
        content: 'This is the tour content',
        placement: 'right'
      },
    ],
    model2: [
      {
        element: '#tour-stop-1',
        title: 'This is a tour title',
        content: 'This is the tour content',
        placement: 'bottom'
      },
      {
        element: '#tour-stop-2',
        title: 'This is a tour title',
        content: 'This is the tour content',
        placement: 'right'
      },
    ]
    };
  },

  actions: {
    tourFinished: function()
    {
      console.log('tour finish');
    },
  }
});
