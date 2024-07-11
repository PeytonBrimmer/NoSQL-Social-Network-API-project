const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    removeFriend
    } = require('../../controllers/user-controller');

    //gt post users
    router.route('/').get(getAllUsers).post(createUser);

    // get put delete users
    router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);
    

    //add friend route 
    router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

    //export router
    module.exports = router;   