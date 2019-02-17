examSourceList = () => {

  try {
    sourceArray = QuestionList.find({},{fields:{name:1}}).fetch()

    result = []
    _.forEach(sourceArray, function(source) {
      result.push({'label':source.name, 'value':source.name})
    })

    return result

  } catch(err) {
    console.log(err)
  }

}
