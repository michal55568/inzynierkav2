const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    title:{
        type: String,
        required: true
    },

    status:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    creationDate:{
        type: Date,
        default: Date.now()
    },

    user:{
        type: Schema.Types.Objectid,
        ref: 'user'
    },

    comments:{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }

});

module.exports = {Post: mongoose.model('post', PostSchema)};