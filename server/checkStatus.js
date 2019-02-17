Meteor.methods({
  checkStatus:function(){
    try {
      // get category array
     let result = Promise.await(Questions.rawCollection().distinct('category'))

     // result contain only lcenter name and total number
     // loop through result add signed student into object array

     let resultArray = []

     _.forEach(result, function(category) {
       item = {}
       item.name = category
       item.count = Questions.find({category:category}).count()
       resultArray.push(item)

       // upsert to questionList
       QuestionList.upsert(
         {name: category},
         {
           $set:{
             number:  item.count
           }
         }
       )

     })

     return resultArray

   } catch(err) {
     return err
   }
  }
});
