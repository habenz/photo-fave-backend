import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 3
	},
	// Instead of storing password directly I could store encrypted password
	password: {
		type: String,
		required: true,
		minlength: 7
	},
	// instead find photos owned by this user's id
	// user_photos: {
	// 	type: [String],
	// 	default: []
	// },
	liked_photos: {
		type: [String],
		default: []
	},
	commented_photos: {
		type: [String],
		default: []
	},
},
	// need to pass timestamp flag as second argument 
	{timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;

