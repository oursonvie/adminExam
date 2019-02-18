SubmittedAnswers = new Mongo.Collection("submittedanswers");

SubmittedAnswers.deny({
  insert: function(){
    return true
  },
  remove: function(){
    return true
  }
});

SubmittedAnswers.allow({
  update: function(){
    return false
  }
})
