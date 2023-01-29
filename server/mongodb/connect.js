import mongoose, { connect } from 'mongoose';

const connectDB = (url) => {
    // this will be useful when working with search functionality
    mongoose.set('strictQuery', true);

    // connecting our database
    mongoose.connect(url)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));
}

export default connectDB;