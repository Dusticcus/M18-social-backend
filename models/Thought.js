const { Schema, model } = require('mongoose');

// REACTION SCHEMA
const reactionSchema = new mongoose.Schema({

  });

// THOUGHT SCHEMA
const thoughtSchema = new Schema(
  {
    text: {String, required: true},
    username: {String, required: true},
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// // Create a virtual property `commentCount` that gets the amount of comments per post
// postSchema.virtual('commentCount').get(function () {
//   return this.comments.length;
// });

// Initialize our Post model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
