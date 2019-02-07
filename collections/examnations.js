import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Examnations = new Mongo.Collection("examnations");

Examnations.deny({
  insert: function(){
    return false
  },
  remove: function(){
    return true
  }
});

Examnations.allow({
  insert: function(){
    return true
  },
  update: function(){
    return true
  }
})

Examnations.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "试卷名称",
  },
  examContent: {
    type: Array,
    label: "试卷组成"
  },
  'examContent.$': {
    type: Object
  },
  'examContent.$.questionType': {
    type: String,
    label: "题库名称",
    autoform: {
      type:"select",
      options: function() { return examSourceList() }
    }
  },
  'examContent.$.questionQuantity': {
    type: Number,
    label: "题目数量"
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
