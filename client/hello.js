Template.hello.onCreated = function(){
   Session.set('contentType', false)
   Session.set('choiceType', false)
};

Template.hello.helpers({
  contentTypeStatus: function() {
    return Session.get('contentType')
  },
  choiceTypeStatus: function() {
    return Session.get('choiceType')
  }
})

Template.hello.events({
  'click .btn-contentType': function() {
    Session.set('contentType', !(Session.get('contentType')) )
  },
  'click .btn-choiceType': function() {
    Session.set('choiceType', !(Session.get('choiceType')) )
  },
  'change input' (event) {

    var filesList = event.currentTarget.files;
    if (filesList.length) {
      var file = filesList[0];
      if (file.type === 'text/csv') {
        var fileReader = new FileReader();
        fileReader.onload = function(e) {
          var papaObject = CSV.parse(fileReader.result, {
            header: true,
            encoding: "UTF-8"
          });

          categoryName = file.name.split('.')[0]
          console.log('papaObject', papaObject);

          if (papaObject && papaObject.errors.length == 0) {

            _.forEach(papaObject.data, function(question) {

              // set default contentType to string
              question.contentType = ( Session.get('contentType') ? 'image' : 'string' )

              // set default choiceType to string
              question.choiceType = ( Session.get('choiceType') ? 'image' : 'string' )

              PromiseMeteorCall('insertQuestion', question, categoryName)
              .then(res => {
                console.log(res)
              })
              .catch(err => {
                console.log(err)
              })
            })


            console.log(`${papaObject.data.length} students will be imported`)

          } else {
            throw papaObject.errors
          }

          Session.set('uploadedData', papaObject);
        };
        fileReader.onerror = function(e) {
          throw 'Error reading CSV file';
        };
        fileReader.readAsText(file);
      }
    }

  }
});
