Meteor.publish("questionID", function(questionID){
  return Questions.find({_id:questionID})
});

Meteor.publish("examnations", function(){
  return Examnations.find()
});

Meteor.publish("questionList", function(){
  return QuestionList.find()
});
