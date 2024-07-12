const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

//define new mogoose schema for thought text at username
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

// defines virtula property reaction count 
const thought = model('thought', thoughtSchema);

// exports thought model
module.exports = thought;