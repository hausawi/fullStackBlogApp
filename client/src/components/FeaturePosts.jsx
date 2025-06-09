
import { Image } from '@imagekit/react';
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturePosts = () => {
	return (
		<div className='mt-8 mb-4 flex flex-col lg:flex-row gap-8'>
			{/* First */}
			<div className='w-full lg:w-1/2 flex flex-col gap-4'>
				{/* image */}
				<Image
					urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
					src='https://ik.imagekit.io/r6yaoh57f/feature1.jpg?updatedAt=1748888646312'
					className='rounded-3xl object-cover w-895'
				/>
				{/* details */}
				<div className='flex items-center gap-4'>
					<h1 className='font-semibold lg:text-lg'>01</h1>
					<Link className='text-[#3fd2b0] lg:text-lg'>Web Design</Link>
					<span className='text-gray-500'>2 days ago</span>
				</div>
				{/* title */}
				<Link className='text-xl lg:text-3xl font-bold' to='/test'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos.
				</Link>
			</div>
			{/* Others */}
			<div className='w-full lg:w-1/2 flex flex-col gap-4'>
				{/* second */}
				<div className=' lg:h-1/3 flex juctify-between gap-4'>
					<div className='w-1/3 aspect-video'>
						<Image
							urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
							src='https://ik.imagekit.io/r6yaoh57f/feature2.jpg?updatedAt=1748891105429'
							className='rounded-3xl object-cover '
							alt=''
							w='298'
						/>
					</div>
					{/* details and title */}
					<div className='w2/3'>
						{/* details */}
						<div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
							<h1 className='font-semibold'>02.</h1>
							<Link className='text-[#3fd2b0]'>Web Design</Link>
							<span className='text-gray-400 text-sm'>2 days ago</span>
						</div>
						{/* title */}
						<Link
							to='/test'
							className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium '>
							{' '}
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</Link>
					</div>
				</div>
				{/* third */}
				<div className=' lg:h-1/3 flex juctify-between gap-4'>
					<div className='w-1/3 aspect-video'>
						<Image
							urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
							src='https://ik.imagekit.io/r6yaoh57f/feature3.jpg'
							className='rounded-3xl object-cover w-full h-full '
							alt=''
						/>
					</div>
					{/* details and title */}
					<div className='w2/3'>
						{/* details */}
						<div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
							<h1 className='font-semibold'>03.</h1>
							<Link className='text-[#3fd2b0]'>Web Design</Link>
							<span className='text-gray-400 text-sm'>2 days ago</span>
						</div>
						{/* title */}
						<Link
							to='/test'
							className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium '>
							{' '}
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</Link>
					</div>
				</div>
				{/* fourth */}
				<div className=' lg:h-1/3 flex juctify-between gap-4'>
					<div className='w-1/3 aspect-video'>
						<Image
							urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
							src='https://ik.imagekit.io/r6yaoh57f/feature4.jpg'
							className='rounded-3xl object-cover w-full h-full'
							alt=''
						/>
					</div>
					{/* details and title */}
					<div className='w2/3'>
						{/* details */}
						<div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
							<h1 className='font-semibold'>04.</h1>
							<Link className='text-[#3fd2b0]'>Web Design</Link>
							<span className='text-gray-400 text-sm'>2 days ago</span>
						</div>
						{/* title */}
						<Link
							to='/test'
							className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium '>
							{' '}
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturePosts;
