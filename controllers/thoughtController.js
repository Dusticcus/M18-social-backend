const { User, Thought } = require('../models');

module.exports = {
  // Get all Thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No Thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Creates a new THOUGHT. Accepts a request body with the entire THOUGHT object.
  // Because THOUGHTS are associated with Users, we then update the User who created the THOUGHT and add the ID of the THOUGHT to the THOUGHTS array
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.user },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
            message: 'Thought created, but found no user with that ID',
          })
          : res.json('Created the application 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Updates a Thought using the findOneAndUpdate method. Uses the ID, and the $set operator in mongodb to inject the request body. Enforces validation.
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((application) =>
        !application
          ? res.status(404).json({ message: 'No Thought with this id!' })
          : res.json(application)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Deletes a Thought from the database. Looks for an Thought by ID.
  // Then if the Thought exists, we look for any users associated with the Thought based on he Thought ID and update the Thought array for the User.
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No Thought with this id!' })
          : User.findOneAndUpdate(
            { applications: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId } },
            { new: true }
          )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
            message: 'Thought deleted but no user with this id!',
          })
          : res.json({ message: 'Thought successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },

  // Creates a new THOUGHT. Accepts a request body with the entire THOUGHT object.
  // Because THOUGHTS are associated with Users, we then update the User who created the THOUGHT and add the ID of the THOUGHT to the THOUGHTS array
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true }
    )
      .then((reaction) =>
        !reaction
          ? res.status(404).json({
            message: 'Reaction created, but found no Thought with that ID',
          })
          : res.json('Created the application 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      {$pull: {reactions: {_id: req.body.reactionId},
        },
      })
      .then((reaction) =>
      !reaction
        ? res.status(404).json({
          message: 'Reaction created, but found no Thought with that ID',
        })
        : res.json('DELETED the REACTION 🎉')
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  }

};