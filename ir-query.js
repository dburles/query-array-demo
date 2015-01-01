Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('filters', { path: '/' });
});

if (Meteor.isClient) {
  Template.filter.helpers({
    filters: function() {
      return Items.find({ type: this.type });
    }
  });

  Template.filter.events({
    'click input[type=checkbox]': function(event, template) {
      var name = event.target.name;
      var value = event.target.value;

      if ($(event.target).is(':checked'))
        Router.query.add(name, value);
      else
        Router.query.remove(name, value);
    }
  });

  Template.filterItem.helpers({
    isChecked: function(name, _id) {
      return Router.query.isSet(name, _id);
    }
  });
}