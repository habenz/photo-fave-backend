import express from 'express';

import {getPhotos, addPhoto, getUserPhotos,
	addLike} from '../controllers/photoControllers.js';

const router = express.Router();

router.get('/', getPhotos);
router.post('/add', addPhoto);
router.get('/:id', getUserPhotos);
router.patch('/like', addLike)

export default router;