const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const StartPostSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    content: {
        type: String,
        maxlength: 5000,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
      },
    likes: {
        type: Number,
        default: 0
    },
    username: {
        type: String
    }
})

module.exports = mongoose.model("StartPost", StartPostSchema);