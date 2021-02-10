import express from 'express';
import mongoose from 'mongoose';

import User from '../models/user.model.js';
import Photo from '../models/photo.model.js'; // is it bad I have to do this?

const router = express.Router();

export const getUsers = (req, res) => {
	User.find()
		// .then(users => res.json(users))
		.then(users => {
			return res.json(users)})

		.catch(err =>  res.status(400).json('Error: ' + err));
}

export const getUser = (req, res) => {
	const {id} = req.params;
	User.findById(id)
		.then(user => res.json(user))
		.catch(err =>  res.status(400).json('Error: ' + err));
}

export const getUserByName = (req, res) => {
	const {username} = req.params;
	User.findOne({username})
		.then(user => res.json(user))
		.catch(err =>  res.status(400).json('Error: ' + err));
}

export const addUser = (req, res) => {
	const {username, password } = req.body;
	const newUser = new User({username, password});

	newUser.save()
		.then(() => res.status(201).json(`Added User ${username}`))
    	.catch(err => res.status(400).json('Error: ' + err));
}

export const addLikedPhotoToUser = (req, res) => {
	const {userId, photoId} = req.body;
	// find by id, then push into the liked_photos array of the user
	User.updateOne({_id: userId}, {
		$push: {liked_photos: photoId}
	})
		.then(() => res.status(200).json('added like to user'))
    	.catch(err => res.status(400).json('Error: ' + err));	
}

export const removeLikedPhotoFromUser = (req, res) => {
	const {userId, photoId} = req.body;
	// find by id, then push into the liked_photos array of the user
	User.updateOne({_id: userId}, {
		$pull: {liked_photos: photoId}
	})
		.then(() => res.status(200).json('removed like from user'))
    	.catch(err => res.status(400).json('Error: ' + err));	
}

export const getUserLikedPhotos = (req, res) => {
	const {id} = req.params;
	User.findById(id)
		.then(user => Photo.find({_id:{ $in: user.liked_photos}}))
		.then(photos => res.json(photos))
		.catch(err =>  res.status(400).json('Error: ' + err));
}

// Still need to remove user id from liked photos
export const deleteUser = (req, res) => {
	const {id} = req.params;
	let tempUserHolder;
	User.findByIdAndDelete(id)
		.then(deletedUser => {tempUserHolder = deletedUser})
		.then(() => Photo.deleteMany({owner_uid: id}))
	// 	.then(() => Photo.updateMany({likes:{$in:[id]}},{
	// 	$pull: {likes: userId},
	// 	$inc: {like_count: -1}
	// }))
		.then(() => res.json(tempUserHolder))
		.catch(err => res.json(err))
}