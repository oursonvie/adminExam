Template.questionStatus.helpers({
  answerArr: function(){
     return Session.get('answerSheet')
  },
  markingResult: function(){
    return Session.get('markingResult')
  },
  ifCorrect: function() {
    return this.answer === this.correctAnswer
  }
});

Template.questionStatus.events({
  "click #foo": function(event, template){

  }
});
