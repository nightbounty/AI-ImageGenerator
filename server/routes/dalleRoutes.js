import  Express  from "express";
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi  } from 'openapi';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();