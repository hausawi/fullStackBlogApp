import { Image } from '@imagekit/react';
import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = () => {
	return (
		<div className='flex-col flex xl:flex-row gap-8'>
			{/* image */}
			<div className=' xl:block xl:w-1/3'>
				<Image
					className='rounded-2xl object-cover w-735'
					urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
					src='https://ik.imagekit.io/r6yaoh57f/blog.jpg'
				/>
			</div>
			{/* details */}
			<div className='flex flex-col gap-4 xl:w-2/3'>
				<Link to='/test' className='text-4xl font-semibold'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
					modi.
				</Link>
				<div className='flex items-center gap-2 text-gray-400 text-sm'>
					<span>Written by</span>
					<Link className='text-bold'>Hmo Hausawi</Link>
					<span>On</span>
					<Link className='text-bold'>Web Design</Link>
					<span>2 days ago</span>
				</div>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
					corporis explicabo quae voluptatem cupiditate, quisquam reiciendis
					unde placeat amet non modi beatae optio nostrum veniam corrupti
					praesentium laboriosam perspiciatis qui quod et? Harum maiores, eius
					dicta iusto, ipsum saepe voluptatum officiis delectus earum in porro
					et. Rem vitae neque vel!
				</p>
				<Link to='/post' className='underline text-[#3fd2b0] text-sm'>
					Read More
				</Link>
			</div>
		</div>
	);
};

export default PostListItem;
