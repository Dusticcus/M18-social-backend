const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// /api/users
router.route('/').get(getThoughts).post(createThought);

// /api/users/:userId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

//  Update Thought with Reaction
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);
module.exports = router;