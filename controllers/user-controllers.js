const {user} = require('../models');

//get all users
userController = {
    async getAllUsers(req, res) {
        try {
            const users = await user.find().select('-__v');
            res.json(users);
        } catch (error) {
            res.status(500).json(error);
        }
},

//get one user by id
async getSingleUser(req, res) {
    try {
        const oneUser = await user.findOne({ _id: req.params.userId })

        if (!user) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }
        res.json(oneUser);
    } catch (error) {
        res.status(500).json(error)
    }
},

//create a new user
async createUser(req, res) {
    try {
        const makeUser = await user.create(req.body);
        res.json(makeUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
},

//delete a user
async deleteUser(req, res) {
    try {
        const eraseUser = await user.findOneAndDelete({ _id: req.params.userId });

        if (!user) {
            return res.status(404).json({ message: 'No user found with this id!' });
        } res.json(eraseUser);
    }catch (error) {
            res.status(500).json(error);
        }
},

//update a user
async updateUser(req, res) {
    try {
        const modifyUser = await user.findOneAndUpdate({ _id: req.params.userId}, { $set: req.body }, {runValidators: true, new: true});
    
        if (!modifyUser) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }
        res.json(modifyUser);
    } catch (error) {
        res.status(500).json(error);
    }
},

async addFriend(req, res) {
    try {
        const makefriend = await user.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        );
        if (!makefriend) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }
        res.json(makefriend);
    } catch (error) {
        res.status(500).json(error);
    }
},

async removeFriend(req, res) {
    try {
        const losefriend = await user.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        );
        if (!losefriend) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }
        res.json(losefriend);
    } catch (error) {
        res.status(500).json(error);
    }
}

};
// this curly brace could possibly be wrong and throwing an error, check the curly braces in the code if there is an error
//export the usercontroller
module.exports = userController;
