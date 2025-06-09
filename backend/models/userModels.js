import { Schema } from 'mongoose';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		clerkId: { type: String, required: true, unique: true },
		uesrname: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		img: { type: String, default: [] },
		savedPosts: { type: String, default: [] },
	},
	{ timestamp: true },
);

export default mongoose.model('User', userSchema);
