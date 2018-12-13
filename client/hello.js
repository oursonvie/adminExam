Template.hello.events({
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
