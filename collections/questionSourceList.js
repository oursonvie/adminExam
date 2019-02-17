QuestionList = new Mongo.Collection("questionlist");

QuestionList.deny({
  insert: function(){
    return true
  },
  remove: function(){
    return true
  }
});

QuestionList.allow({
  update: function(){
    return false
  }
})
