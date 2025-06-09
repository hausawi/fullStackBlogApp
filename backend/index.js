import express from 'express';
import cors from 'cors';
import userRoute from './routes/userRoute.js';
import postRoute from './routes/postRoute.js';
import commentRoute from './routes/commentRoute.js';
import connectDB from './lib/connectDB.js';
import webhookRoute from './routes/webhookRoute.js'

// App Config
const app = express();
const port = process.env.PORT || 3000;
// connectDB();

// Middlewares
app.use('/webhooks', webhookRoute);

app.use(express.json());
app.use(cors());
app.use('/users', userRoute);
app.use('/posts', postRoute);
app.use('/comments', commentRoute);

// Error Handler
app.use((error, req, res, next) => {
	res.status(error.status || 500);

	res.json({
		message: error.message || 'Something Went Wrong!',
		status: error.status,
		stack: error.stack,
	});
});

// API Endpoints
// app.get('/', (req, res) => {
// 	res.status(200).send('API Working');
// });

app.listen(3000, () => {
	connectDB();
	console.log('Server Running on : ' + `http://localhost:${port}`);
});

// command to import env file
// node --env-file .env --watch index.js
