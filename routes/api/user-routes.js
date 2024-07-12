const router = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
    } = require('../../controllers/user-controllers');

    //gt post users
    router.route('/').get(getAllUsers).post(createUser);

    // get put delete users
    router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
    

    //add friend route 
    router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

    //export router
    module.exports = router;   