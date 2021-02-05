import express from 'express';

import {getUsers, getUser, getUserByName, addUser,
	addLikedPhotoToUser, getUserLikedPhotos, removeLikedPhotoFromUser } from '../controllers/userControllers.js';

const router = express.Router();

router.get('/', getUsers);
//not sure what :id is doing. auto parsing params as id?
router.get('/:id', getUser);
router.get('/name/:username', getUserByName);
router.post('/add', addUser);
router.patch('/like', addLikedPhotoToUser);
router.get('/liked-photos/:id', getUserLikedPhotos);
router.patch('/unlike', removeLikedPhotoFromUser);

export default router;