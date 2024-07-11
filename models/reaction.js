// imports schema from mongoose
const { schema } = require('mongoose');

// dines new mongoose schema 
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        }, 
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => Date(timestamp).toLocaleDateString()
        },
    },
    {
        toJSON: {
            getters: true,
        },
        }
);

// exports reaction schema
module.exports = reactionSchema;