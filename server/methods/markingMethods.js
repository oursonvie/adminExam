Meteor.methods({
  submitAnswers:function(answersSheet){
    // console.log(answersSheet)

    // init marking
    totalMark = 0
    result = []

    _.forEach(answersSheet, function(answer) {
      if (answer) {
        if (answer.answer == Questions.findOne({_id:answer.id}).answer ) {
          totalMark += 2
          result.push(returnCurrentAnswer(answer))
        } else {
          result.push(returnCurrentAnswer(answer))
        }
      } else {
        result.push(returnCurrentAnswer(answer))
      }

    })

    returnObj = {
      totalmark:totalMark,
      result:result
    }

    return returnObj

  }

});

returnCurrentAnswer = (answer) => {

  obj = {
    order:answer.order,
    id:answer.id,
    answer: answer.answer,
    correctAnswer: Questions.findOne({_id:answer.id}).answer.toUpperCase()
  }

  return obj

}
