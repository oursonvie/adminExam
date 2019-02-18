Template.buttomSubmit.events({
  "click .btn-submit": function(event, template){
    answerSheet = Session.get('answerSheet')

    // request submition check aganist corrent answers
    PromiseMeteorCall('submitAnswers', answerSheet)
    .then( res => {
      console.log(res)
      Session.set('markingResult', res)
    })
    .catch( err => {
      console.log(err)
    })

  },
  "click .btn-reset": function() {

    // reset radio buttons
    questionList = Session.get('answerSheet')

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
});
