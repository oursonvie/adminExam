Template.examMixer.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('examnations')
    self.subscribe('questionList')
  })
})

Template.examMixer.events({
  'click .btn-create': function() {

    $('#newExamnationModal').modal('show')

  }
})
