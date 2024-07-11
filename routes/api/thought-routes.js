//import dependencies and controllers
const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

//define routes
router.route('/').get(getAllThoughts).post(createThought);

//spiders are so scary

//get put delete routes
router.route('/:id').get(getThoughtById).put(updateThoughtById).delete(deleteThought);

//reaction routes
router.route('/:thoughtId/reactions').post(createReaction);

//delete reaction route
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

//export router
module.exports = router;   