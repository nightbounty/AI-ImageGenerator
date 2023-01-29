// Let's import the mongoose library
import mongoose from 'mongoose';

// A new mongoose schema, defining the structure of the posts that will be stored in the database. It has three fields: name (a required string), prompt (a required string), and photo (a required string).
const Post = new mongoose.Schema({
    name: { type: String, required: true },
    prompt: { type: String, required: true },
    photo: { type: String, required: true },
    
});

// This model is a class that provides a way to interact with a particular collection of documents in a MongoDB database.
// Interacting with Post document/schema
const PostSchema = mongoose.model('Post', Post);

export default PostSchema;
