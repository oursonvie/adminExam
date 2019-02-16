Template.examnationList.helpers({
  examnationsList:function() {
    return Examnations.find()
  }
})

Template.examnationList.events({
  'click .btn-view-exam': function() {
    window.open(`${Meteor.absoluteUrl()}viewexam/${this._id}`);
  }
})
