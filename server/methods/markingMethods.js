Meteor.methods({
  submitAnswers:function(answersSheet, examId){
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
      examName: Examnations.findOne({_id:examId}).name,
      totalmark:totalMark,
      result:result,
      createdAt: new Date
    }

    result = SubmittedAnswers.insert(returnObj)

    console.log(`[Submitted] id: ${result}, mark: ${returnObj.totalmark}`)

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
