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

  }
});
