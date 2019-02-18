Template.buttomSubmit.events({
  "click .btn-submit": function(event, template){
    answerSheet = Session.get('answerSheet')

    // need exam id for the record
    examId = FlowRouter.getParam("id");

    // check empty answer
    emptyCell = answerSheet.find(o => o.answer === false);

    // also need to check for resubmition
    markingResult = Session.get('markingResult')

    if (emptyCell) {
      alert('还有试题为空，不能提交')
    } else if (markingResult) {
      alert('不能重复提交试卷')
    } else {
      // request submition check aganist corrent answers
      PromiseMeteorCall('submitAnswers', answerSheet, examId)
      .then( res => {
        console.log(res)
        Session.set('markingResult', res)
      })
      .catch( err => {
        console.log(err)
      })
    }

  },
  "click .btn-reset": function() {

    // reset radio buttons
    questionList = Session.get('answerSheet')

    // also need to check for resubmition
    markingResult = Session.get('markingResult')

    if (markingResult) {
      alert('已提交试卷不能重置')
    } else {
      _.forEach(questionList, function(answer) {
        targetName = `stingRadioChoice ${answer.id}`

        // reset answer in answer sheet in session
        answer.answer = false

        // reset all radio button below single target
        var ele = document.getElementsByName(targetName);
        for(var i=0;i<ele.length;i++)
          ele[i].checked = false;
      })

      // modify session value
      Session.set('answerSheet', questionList)

      console.log('reset')
    }

  }
});
