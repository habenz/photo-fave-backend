import express from 'express';
import mongoose from 'mongoose';

import Photo from '../models/photo.model.js';

const router = express.Router();

export const getPhotos = (req, res) => {
	Photo.find()
		.then(photos => res.json(photos))
		.catch(err =>  res.status(400).json('Error: ' + err));
}

export const addPhoto = (req, res) => {
	const {owner_uid, url} = req.body;
	// maybe name should be required
	let newPhoto;
	if (req.body.name){
		const name = req.body.name
		newPhoto = new Photo({owner_uid, name, url});

	} else {
		newPhoto = new Photo({owner_uid, url});	
	}

	newPhoto.save()
		.then(() => res.json(`Added Photo ${req.body.name || ''}!`))
    	.catch(err => res.status(400).json('Error: ' + err));
}