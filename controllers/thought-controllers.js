const {thought, user} = require('../models');

//get all thoughts
thoughtController = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await thought.find();
            res.json(thoughts);
        } catch (error) {
            res.status(500).json(error);
        }
},

//get one thought by id
async getSingleThought(req, res) {
    try {
        const thoughts = await thought.findOne({ _id: req.params.thoughtId })

       if (!thoughts) {
            return res.status(404).json({ message: 'No thought found with this id!' });
        } 
        res.json(thoughts);
    } catch (error) {
        console.error(error);
        res.status(500).json(error)
    }
},

//create a new thought
async createThought(req, res) {
    try {
        const thoughts = await thought.create(req.body);
        res.json(thoughts);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
},

//delete a thought
async deleteThought(req, res) {
    try {
        const thought = await thought.findOneAndDelete({ _id: req.params.thoughtId });

        if (!thought) {
            return res.status(404).json({ message: 'No thought found with this id!' });
        } 
        res.json(thought);
     } catch (error) {
            res.status(500).json(error);
        }
},

//update a thought
async updateThought(req, res) {
    try {
        const thoughts = await thought.findOneAndUpdate({ _id: req.params.thoughtId}, { $set: req.body }, {runValidators: true, new: true});
    
        if (!thoughts) {
            return res.status(404).json({ message: 'No thought found with this id!' });
        }
        res.json(thoughts);
    } catch (error) {
        res.status(500).json(error);
    }
},


};
//export thought controller
module.exports = thoughtController;