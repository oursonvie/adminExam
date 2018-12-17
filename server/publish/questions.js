Meteor.publish("questionID", function(questionID){
  return Questions.find({_id:questionID})
});
