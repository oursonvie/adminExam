Template.questionStatus.helpers({
  answerArr: function(){
     return Session.get('answerSheet')
  }
});

Template.questionStatus.events({
  "click #foo": function(event, template){

  }
});
