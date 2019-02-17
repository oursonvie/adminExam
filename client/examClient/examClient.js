Template.examClient.onCreated(function() {
  Session.set('answerSheet', false)

})

Template.examClient.helpers({
  questions: function(){

    questionnaries = []
    questionsIDList = Questions.find({},{fields:{_id:1}}).fetch()
    _.forEach(questionsIDList, function(id) {
      newObj = {
        id: id._id,
        answer: false
      }
      questionnaries.push(newObj)
    })

    Session.set('answerSheet', questionnaries)

     return Questions.find()
  }
});

Template.examClient.events({

})
