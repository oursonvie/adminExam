Meteor.publish("questionID", function(questionID){
  return Questions.find({_id:questionID})
});

Meteor.publish("examnations", function(){
  return Examnations.find()
});

// this methods subscribe to random questions according to infor in exam
Meteor.publish("examID", function(examId){
  console.log(examId)
  // return Examnations.find()

  // get exam content
  examContent = Examnations.findOne({_id:examId}).examContent
  // console.log(examContent)

  // get exam content full list
  Questionlist = []

  _.forEach(examContent, function(category) {
    categoryName = category.questionType
    // expand category question into array with only _id
    categoryArr = []

    ObjArr = Questions.find({category:categoryName},{fields:{_id:1}}).fetch()
    _.forEach(ObjArr, function(id) {
      categoryArr.push(id._id)
    })

    // shuffle categoryArr so its ready for cut
    shuffled = categoryArr.sort( () => 0.5 - Math.random() )

    questionCount = Questions.find().count()

    // in new object, shuffle category array first
    newObj = {
      categoryName:categoryName,
      categoryArr: shuffled.slice(0, category.questionQuantity),
      questionCount:questionCount,
      questionQuantity: category.questionQuantity
    }
    Questionlist.push(newObj)
  })

  // console.log(Questionlist)

  // return questions

  subArr = []
  _.forEach(Questionlist, function(question) {
    subArr = subArr.concat(question.categoryArr)
  })

  console.log(subArr)
  console.log(subArr.length)

  return Questions.find( { _id: {$in:subArr} }, {sort:{category:1}} )

});
