import express from 'express';

import {getPhotos, addPhoto, getUserPhotos} from '../controllers/photoControllers.js';

const router = express.Router();

router.get('/', getPhotos);
router.post('/add', addPhoto);
router.get('/:id', getUserPhotos);

export default router;