const { Schema, model } = require('mongoose');

// REACTION SCHEMA
const reactionSchema = new Schema({
  text: { type: String, required: true },
  username: { type: String, required: true },
});

// THOUGHT SCHEMA
const thoughtSchema = new Schema(
  {
    text: { type: String, required: true },
    username: { type: String, required: true },
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
