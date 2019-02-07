examSourceList = () => {
  theList = [ "2019年春专升本大学语文入学考试", "2019年春专升本高等数学入学考试" ]
  result = []
  _.forEach(theList, function(source) {
    result.push({'label':source, 'value':source})
  })
  return result
}
