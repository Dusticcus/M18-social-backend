const { Schema, model } = require('mongoose');

const friendSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        }
    }
);

// Initialize our User model
const Friend = model('friend', friendSchema);

module.exports = Friend;