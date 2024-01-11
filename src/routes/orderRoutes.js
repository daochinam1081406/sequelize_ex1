import express from 'express';
import { createVideo, getVideo } from '../controllers/videoControllers.js';

const videoRoutes = express.Router();

videoRoutes.get("/get-video", getVideo); // define API get-video có method là GET
videoRoutes.post("/create-video", createVideo);


export default videoRoutes;