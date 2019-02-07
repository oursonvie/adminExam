Template.stingQuestion.helpers({
  questions: function(){
     return Questions.find()
  },
  answerList: function() {
    aList="abcdefghijklmnopqrstuvwxyz"
    choice = Questions.findOne().choice.split(';')
    choiceList = []
    for ( i=0; i<choice.length; i++) {
      obj = {choice:aList[i].toUpperCase(), answer:choice[i]}
      choiceList.push(obj)
    }
    return choiceList
  }
});

Template.stingQuestion.events({
  'click #stingRadioChoice': function(template) {
    choice = template.target.value
    // console.log(choice)
  },
  'click .btn-string-success': function() {

    if (document.querySelector('input[name="stingRadioChoice"]:checked')) {

      choice = document.querySelector('input[name="stingRadioChoice"]:checked').value

      answer = Questions.findOne({_id:this._id}).answer

      if ( choice.toUpperCase() === answer.toUpperCase() ) {
        alert('回答正确')
      } else {
        alert('回答错误')
      }

    } else {
      alert('未选择答案')
    }


  },
  'click .btn-string-danger': function() {
    $('input[name=stingRadioChoice]').attr('checked',false)
  }
})
