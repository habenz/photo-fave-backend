import express from 'express';
import mongoose from 'mongoose';

import Photo from '../models/photo.model.js';

export const getPhotos = (req, res) => {
	Photo.find().sort(req.query)
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
		.then(() => res.status(201).json(newPhoto))
    	.catch(err => res.status(400).json('Error: ' + err));
}

export const getUserPhotos = (req, res) => {
	const {id} = req.params;
	Photo.find({owner_uid: id})
		.then(photos => res.json(photos))
		.catch(err =>  res.status(400).json('Error: ' + err));
}

export const addLike = (req, res) => {
	const {userId, photoId} = req.body;
	Photo.updateOne({_id: photoId}, {
		$push: {likes: userId},
		$inc: {like_count: 1}

	})
		.then(() => res.status(200).json('added like to photo'))
    	.catch(err => res.status(400).json('Error: ' + err));	
}

export const removeLike = (req, res) => {
	const {userId, photoId} = req.body;
	Photo.updateOne({_id: photoId}, {
		$pull: {likes: userId},
		$inc: {like_count: -1}


	})
		.then(() => res.status(200).json('removed like from photo'))
    	.catch(err => res.status(400).json('Error: ' + err));	
}

export const deletePhoto = (req, res) => {
	const {id} = req.params;
	Photo.findByIdAndDelete(id)
		.then(deletedPhoto => res.json(tempUserHolder))
		.catch(err => res.json(err))
}

// Failed Attempt to write function to add like_count to every photo in DB
// export const updateLikeCounts = (req, res) => {
// 	Photo.updateMany({},)

// 	// Photo.find()
// 	// 	.then(photos => {
// 	// 		for (const pic in photos) {
// 	// 			const likeCount = pic.likes.length;
// 	// 			pic.like_count = likeCount;
// 	// 			pic.save();
// 	// 		}
// 	// 		// photos[0].like_count = photos[0].likes.length;
// 	// 		// photos[0].save()
// 	// 		res.json('done?');
// 	// 	})
// }