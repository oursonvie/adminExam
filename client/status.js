Template.status.onCreated = function(){
   Session.set('statusLog', false)
};


Template.status.helpers({
  statusLog: function(){
     return Session.get('statusLog')
  }
});

Template.status.events({
  "click .btn-refresh": function(event, template){
     PromiseMeteorCall('checkStatus')
     .then(res => {
       Session.set('statusLog', res)
     })
     .catch(err => {
       console.log(err)
     })

  }
});
