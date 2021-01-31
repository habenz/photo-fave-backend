import mongoose from 'mongoose';

const photoSchema = new mongoose.Schema({
	owner_uid: {
		type: String,
		required: true
	},
	name: {
		type: String,
		// not required here but I think I should supply a default value related to the user
	},
	url: {
		type: String,
		required: true
	},
	likes: { // simple count or list of users who have liked it?
		type: [String],
		default: []
	},
	comments: {
		type: [String],
		default: []
	},
},
	{timestamps: true} // use this for date added and date last commented/liked
);

const Photo = mongoose.model('Photo', photoSchema);

export default Photo;
