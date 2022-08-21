const { Schema, model } = require('mongoose');

// const friendSchema = new Schema(
//     {
//         username: {
//             type: String,
//             required: true,
//         },
//         user: {
//             type: Schema.Types.ObjectId,
//             ref: "User"
//           },
//     }
// );

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
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: true,
    }
);


// Initialize our User model
const User = model('user', userSchema);
// User.create(
//     { username: 'Dusticcus', email: 'nope@nope.nope' },
//     (err, data) => {
//       if (err) {
//         console.error(err);
//       }
//       console.log(data);
//     }
//   );
module.exports = User;