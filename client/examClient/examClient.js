Template.examClient.onCreated(function() {
  Session.set('answerSheet', false)

})

Template.examClient.helpers({
  questions: function(){

    questionnaries = []

    orderNum = 1

    questionsIDList = Questions.find({},{fields:{_id:1}}).fetch()
    _.forEach(questionsIDList, function(id) {
      newObj = {
        order: orderNum,
        id: id._id,
        answer: false
      }
      questionnaries.push(newObj)
      orderNum+=1
    })

    Session.set('answerSheet', questionnaries)

     return Questions.find()
  }
});

Template.examClient.events({

})
