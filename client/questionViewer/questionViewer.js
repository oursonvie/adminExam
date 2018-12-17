Template.questionViewer.onCreated(function() {
  let questionID = FlowRouter.getParam("id");

  var self = this;
  self.autorun(function() {
    self.subscribe('questionID', questionID)
  })
})


Template.questionViewer.helpers({
  questions: function(){
     return Questions.find()
  }
});

Template.questionViewer.events({
  "click #foo": function(event, template){

  }
});
