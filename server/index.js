import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
// The dotenv package is a great way to keep passwords, API keys, and other sensitive data out of your code. It allows you to create environment variables in a . env file instead of putting them in your code.
// this line allows us to pool our environement variables from our dot env file
dotenv.config();

// initialize our express application
const app = express();
// adding additional middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));

   // created api endpoints that we can connect/hook onto from front-end side
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

// Creating our first route
// making sure our application is running once we visit the url of our server
app.get('/', async (req, res) => {
    res.send('Hello from DALL-E!');
})

// Run our server

const startServer = async () => {

    // connecting to mongodb can fail so we will try to catch the error in case
    try {
        // mongodb atlas url
        connectDB(process.env.MONGODB_URL);

        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))


    } catch (error) {
        console.log(error);
    }


}

startServer();