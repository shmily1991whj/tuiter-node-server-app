import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes:Number,
    image: String,
    replies: Number,
    retuits: Number,
    username:String,
    handle:String,
    time:String
}, {collection: 'tuits'});
export default schema;

