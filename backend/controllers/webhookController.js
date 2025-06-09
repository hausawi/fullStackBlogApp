import User from '../models/userModels.js';
import { Webhook } from 'svix';

export const clerkWebhook = async (res, req) => {
	const WEBHOOK_SECRET = process.env.CLERK_WEBHOK_SECRET;

	if (!WEBHOOK_SECRET) {
		throw new Error('Webhook secret needed!');
	}

	const payload = req.body;
	const headers = req.headers;

	const wh = new Webhook(WEBHOOK_SECRET);
	let evt;
	try {
		evt = wh.verify(payload, headers);
	} catch (err) {
		res.status(400).json({
			message: 'Webhook verification faild!',
		});
	}

	if (evt.type == 'user.created') {
		const newUser = new User({
			clerkUserId: evt.data.id,
			username: evt.data.username || evt.data.email_address[0].email_address,
			email: evt.data.email_address[0].email_address,
			img: evt.data.profile_img_url,
		});

		await newUser.save();
	}

	return res.status(200).json({
		message: 'Webhook received',
	});
};
