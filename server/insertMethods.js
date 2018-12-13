Meteor.methods({
  insertQuestion:function(question, category){
    newObj = {}

    newObj.type = question.题目类型
    newObj.content = question.题目内容
    newObj.choice = question.可选项
    newObj.answer = question.标准答案
    newObj.difficulty = question.题目难度
    newObj.score = question.题目分数
    newObj.category = category

    result = Questions.insert(newObj)
    console.log(result)

  }
});
