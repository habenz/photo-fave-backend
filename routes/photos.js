import express from 'express';

import {getPhotos, addPhoto, getUserPhotos,
	addLike, removeLike, deletePhoto} from '../controllers/photoControllers.js';

const router = express.Router();

router.get('/', getPhotos);
router.post('/add', addPhoto);
router.get('/:id', getUserPhotos);
router.patch('/like', addLike);
router.patch('/unlike', removeLike);
router.delete('/delete/:id', deletePhoto);

export default router;