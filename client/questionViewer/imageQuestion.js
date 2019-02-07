Template.questionViewer.helpers({
  questions: function(){
     return Questions.find()
  }
});

Template.questionViewer.events({
  'click #imageRadioChoice': function(template) {
    choice = template.target.value
    // console.log(choice)
  },
  'click .btn-image-success': function() {

    if (document.querySelector('input[name="imageRadioChoice"]:checked')) {

      choice = document.querySelector('input[name="imageRadioChoice"]:checked').value

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
  'click .btn-image-danger': function() {
    $('input[name=imageRadioChoice]').attr('checked',false)
  }
})
