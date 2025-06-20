import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
	BrowserRouter,
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import Homepage from './routes/Homepage.jsx';
import PostListPage from './routes/PostListPage.jsx';
import WritePage from './routes/WritePage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import RegisterPage from './routes/RegisterPage.jsx';
import SinglePostPage from './routes/SinglePostPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import { StrictMode } from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import AboutPage from './routes/AboutPage.jsx';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error('Missing Publishable Key');
}

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Homepage />,
			},
			{
				path: '/posts',
				element: <PostListPage />,
			},
			{
				path: '/:slug',
				element: <SinglePostPage />,
			},
			{
				path: '/write',
				element: <WritePage />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/register',
				element: <RegisterPage />,
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
			<RouterProvider router={router} />
		</ClerkProvider>
	</StrictMode>,
);
