Template.examViewer.onCreated(function() {
  let examId = FlowRouter.getParam("id");

  var self = this;
  self.autorun(function() {
    self.subscribe('examID', examId)
  })

})
