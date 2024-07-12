//import dependencies and controllers
const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  deleteThought,
    updateThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controllers');

//define routes
router.route('/').get(getAllThoughts).post(createThought);

//spiders are so scary

//get put delete routes
router.route('/:id').get(getSingleThought).put(updateThought).delete(deleteThought);
//reaction routes
// router.route('/:thoughtId/reactions').post(createReaction);

// //delete reaction route
// router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// 
//export router
module.exports = router;   