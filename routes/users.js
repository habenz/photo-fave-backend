import express from 'express';

import {getUsers, getUser, getUserByName, addUser} from '../controllers/userControllers.js';

const router = express.Router();

router.get('/', getUsers);
//not sure what :id is doing. auto parsing params as id?
router.get('/:id', getUser);
router.get('/name/:username', getUserByName);
router.post('/add', addUser);

export default router;