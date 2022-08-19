const { Schema, model } = require('mongoose');

const friendSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        }
    }
);

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'Username is required.',
            trim: true
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Email address is required.',
            validate: [validateEmail, 'Please fill a valid email address'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Friend',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


// Initialize our User model
const User = model('user', userSchema);

module.exports = User;