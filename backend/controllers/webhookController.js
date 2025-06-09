import User from '../models/userModels.js';
import { Webhook } from 'svix';

// API Controller function to Manage Clerk User with Database
export const clerkWebhooks = async (res, req) => {
	try {
		const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

		await whook.verify(JSON.stringify(req.body), {
			'svix-id': req.headers['svix-id'],
			'svix-timestamp': req.headers['svix-timestamp'],
			'svix-signature': req.headers['svix-signature'],
		});

		const { data, type } = req.body;
		switch (type) {
			case 'user.created': {
				const userData = {
					_id: data.id,
					email: data.email_addresses[0].email_addresses,
					username: data.username || data.email_address[0].email_address,
					imageUrl: data.image_url,
				};
				await User.create(userData);
				res.json({});
				break;
			}
			case 'user.updated': {
				const userData = {
					email: data.email_addresses[0].email_addresses,
					username: data.username || data.email_address[0].email_address,
					imageUrl: data.image_url,
				};
				await User.findByIdAndUpdate(data.id, userData);
				res.json({});
				break;
			}
			case 'user.deleted': {
				await User.findByIdAndDelete(data.id);
				res.json({});
				break;
			}

			default:
				break;
		}
	} catch (error) {
		res.json({ success: false, message: 'error.message' });
	}
};

// export const clerkWebhook = async (res, req) => {
// 	const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

// 	if (!WEBHOOK_SECRET) {
// 		throw new Error('Webhook secret needed!');
// 	}

// 	const payload = req.body;
// 	const headers = req.headers;

// 	const wh = new Webhook(WEBHOOK_SECRET);
// 	let evt;
// 	try {
// 		evt = wh.verify(payload, headers);
// 	} catch (err) {
// 		res.status(400).json({
// 			message: 'Webhook verification faild!',
// 		});
// 	}

// 	if (evt.type == 'user.created') {
// 		const newUser = new User({
// 			clerkUserId: evt.data.id,
// 			username: evt.data.username || evt.data.email_address[0].email_address,
// 			email: evt.data.email_address[0].email_address,
// 			img: evt.data.profile_img_url,
// 		});

// 		await newUser.save();
// 	}

// 	return res.status(200).json({
// 		message: 'Webhook received',
// 	});
// };
