//creates router connection to api routes
const router = require('express').Router();

//import routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

//define endpoints
router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);

//export router
module.exports = router;