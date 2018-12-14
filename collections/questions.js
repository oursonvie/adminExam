import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Questions = new Mongo.Collection("questions");

Questions.deny({
  insert: function(){
    return true
  },
  remove: function(){
    return true
  }
});

Questions.allow({
  update: function(){
    return false
  }
})

Questions.attachSchema(new SimpleSchema({
  type: {
    type: String,
    label: "题目类型",
  },
  content: {
    type: String,
    label: "题目内容",
  },
  contentType: {
    type: String,
    label: "题目内容类型",
    autoValue: function() {
      if (this.isInsert) {
        if ( !this.value ) {
          return 'string'
        } else {
          return this.value
        }
      }
    }
  },
  choice: {
    type: String,
    label: "可选项",
  },
  choiceType: {
    type: String,
    label: "可选项类型",
    autoValue: function() {
      if (this.isInsert) {
        if ( !this.value ) {
          return 'string'
        } else {
          return this.value
        }
      }
    }
  },
  answer: {
    type: String,
    label: "标准答案",
  },
  difficulty: {
    type: String,
    label: "题目难度",
  },
  score: {
    type: String,
    label: "题目分数",
  },
  knowledge: {
    type: String,
    label: "知识点",
    optional: true
  },
  description: {
    type: String,
    label: "题目说明",
    optional: true
  },
  category: {
    type: String,
    label: "题目归类",
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date
      }
    },
     autoform: {
       type: 'hidden'
     }
  }
}, { tracker: Tracker }));
