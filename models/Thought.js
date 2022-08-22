const { Schema, model } = require('mongoose');
const User = require('./User');

// REACTION SCHEMA
const reactionSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
);

// THOUGHT SCHEMA
const thoughtSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
  {
    timestamps: true
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per post
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Initialize our Post model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
