import express from 'express';
import mongoose from 'mongoose';

import User from '../models/user.model.js';

const router = express.Router();

export const getUsers = (req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err =>  res.status(400).json('Error: ' + err));
}

export const getUser = (req, res) => {
	const {id} = req.params;
	console.log("req.params", req.params);
	User.findById(id)
		.then(user => res.json(user))
		.catch(err =>  res.status(400).json('Error: ' + err));
}

export const addUser = (req, res) => {
	const {username, password } = req.body;

	const newUser = new User({username, password});

	newUser.save()
		.then(() => res.json(`Added User ${username}`))
    	.catch(err => res.status(400).json('Error: ' + err));
}