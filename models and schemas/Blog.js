const mongoose = require('mongoose')

const Blog = new mongoose.Schema({
    title : {type: String},
    image: [String],
    desc: {type: String},
    sponsered: {type: Boolean},
    userId: {type: String},
    sponserId: {type: String},
    total: {type: String},
    first: {type: String},
    second: {type: String},
    third:{type: String},
    firstapprove: {type: Boolean},
    secondapprove: {type: Boolean},
    thirdapprove: {type: Boolean}
})

const BlogModel = mongoose.model('Env_Blogs', Blog);
module.exports = BlogModel;