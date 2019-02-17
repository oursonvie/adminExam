Template.stingQuestionViewer.helpers({
  questions: function(){
     return Questions.find()
  },
  answerList: function() {
    aList="abcdefghijklmnopqrstuvwxyz"
    choice = Questions.findOne().choice.split(';')
    choiceList = []
    for ( i=0; i<choice.length; i++) {
      obj = {
        choice:aList[i].toUpperCase(),
        answer:choice[i],
        id: this._id
      }
      choiceList.push(obj)
    }
    return choiceList
  }
});

Template.stingQuestionViewer.events({
  'click .form-check-input': function(template) {
    choice = template.target.value
    // console.log(choice)

    // change value in session
    answerSheet = Session.get('answerSheet')

    questionId = choice.split(',')[0]
    answer = choice.split(',')[1]

    answerSheet.filter(obj => {return obj.id === questionId})[0].answer = answer

    Session.set('answerSheet', answerSheet)

  }
})
