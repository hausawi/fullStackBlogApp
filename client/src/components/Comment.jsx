import { Image } from '@imagekit/react';
import React from 'react';

const Comment = () => {
	return (
		<div className='p-4 bg-slate-50 rounded-xl mb-8'>
			<div className='flex items-center gap-4'>
				<Image
					urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
					src='https://ik.imagekit.io/r6yaoh57f/profile.png?updatedAt=1748803009317'
					className='w-10 h-10 rounded-full object-cover'
					w='40'
				/>
				<span className='font-medium '>Hmo Hausawi</span>
				<span className='text-sm text-gray-500'>2 days ago</span>
			</div>
			<div className='mt-4'>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente in
					distinctio quaerat, mollitia dolore voluptates ullam repellendus. Eum
					rerum, veniam similique accusamus, provident sint distinctio rem
					officia porro tempora dolor.
				</p>
			</div>
		</div>
	);
};

export default Comment;
