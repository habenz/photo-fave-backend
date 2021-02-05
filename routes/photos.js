import express from 'express';

import {getPhotos, addPhoto, getUserPhotos,
	addLike, removeLike} from '../controllers/photoControllers.js';

const router = express.Router();

router.get('/', getPhotos);
router.post('/add', addPhoto);
router.get('/:id', getUserPhotos);
router.patch('/like', addLike);
router.patch('/unlike', removeLike);

export default router;