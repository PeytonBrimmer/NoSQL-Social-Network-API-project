const {user} = require('../models');

//get all users
module.exports = {
    async users(req, res) {
        try {
            const users = await this.users.find();
            res.json(courses);
        } catch (error) {
            res.status(500).json(error);
        }
},

//get one user by id
async getSingleUser(req, res) {
    try {
        const user = await UserActivation.findOne({ _id: req.params.userId })

        if (!user) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json(error)
    }
},

//create a new user
async createUser(req, res) {
    try {
        constt user = await user.create(req.body);
        res.json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
},

//delete a user
async deleteUser(req, res) {
    try {
        const user = await UserActivation.findOneAndDelete({ _id: req.params.userId });

        if (!user) {
            return res.status(404).json({ message: 'No user found with this id!' });
        } catch (error) {
            res.status(500).json(error);
        }
},

//update a user
async updateUser(req, res) {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.userId}, { $set: req.body }, {runValidators: true, new: true});
    
        if (!user) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
},
};
};// this curly brace could possibly be wrong and throwing an error, check the curly braces in the code if there is an error
//export the usercontroller
module.exports = userController;
