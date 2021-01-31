import express from 'express';

import {getPhotos, addPhoto} from '../controllers/photoControllers.js';

const router = express.Router();

router.get('/', getPhotos);
router.post('/add', addPhoto);

export default router;