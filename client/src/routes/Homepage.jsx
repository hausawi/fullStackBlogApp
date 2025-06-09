import React from 'react';
import { Link } from 'react-router-dom';
import MainCategories from '../components/MainCategories';
import FeaturePosts from '../components/FeaturePosts';
import PostList from '../components/PostList';

const Homepage = () => {
	return (
		<div className='mt-4 flex flex-col gap-4 '>
			{/* BREADCRUMB */}
			<div className='flex gap-4'>
				<Link to='/'>Home</Link>
				<span>◉</span>
				<span className='text-[#3fd2b0]'>Blogs and Articles</span>
			</div>
			{/* INTRODUCTION */}
			<div className='flex items-center justify-center'>
				{/* titles */}
				<div className=''>
					<h1 className='text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold'>
						Lorem ipsum dolor sit amet consectetur adipisicing.
					</h1>
					<p className='mt-8 text-md md:text-xl text-[#e6e6ff]'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
						incidunt sit doloremque magnam. Voluptate quisquam quos dolore quia
						unde vel.
					</p>
				</div>
				{/* animated button */}
				<Link to='/write' className=' relative hidden md:block'>
					<svg
						width='200'
						height='200'
						viewBox='0 -35 120 200'
						// className='text-lg tracking-widest '>
						className='text-lg tracking-widest animate-spin animatedButton'>
						<path
							id='circlePath'
							fill='none'
							d='M61.438,0c33.93,0,61.441,27.512,61.441,61.441 c0,33.929-27.512,61.438-61.441,61.438C27.512,122.88,0,95.37,0,61.441C0,27.512,27.512,0,61.438,0L61.438,0z'
						/>
						<text>
							<textPath href='#circlePath' startOffset='5%'>
								write your story•
							</textPath>
							<textPath href='#circlePath' startOffset='51%'>
								share your thoughts•
							</textPath>
						</text>
					</svg>
					<button className=' absolute top-0 right-0 left-0 bottom-0 w-20 h-20 m-auto bg-[#3fd2b0] rounded-full flex items-center justify-center'>
						<svg
							width='50px'
							height='50px'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M16.3891 8.11096L8.61091 15.8891'
								stroke='white'
								strokeWidth='2'
							/>
							<path
								d='M16.3891 8.11096L16.7426 12'
								stroke='white'
								strokeWidth='2'
							/>
							<path
								d='M16.3891 8.11096L12.5 7.75741'
								stroke='white'
								strokeWidth='2'
							/>
						</svg>
					</button>
				</Link>
			</div>
			{/* Categories */}
			<MainCategories />
			{/* FEATURE POSTS */}
			<FeaturePosts />
			{/* POST LIST */}
			<div className=''>
				<h1 className='my-8 text-2xl text-gray-600'>Recent Posts</h1>
				<PostList />
			</div>
		</div>
	);
};

export default Homepage;

// r6yaoh57f
// https://ik.imagekit.io/r6yaoh57f/path/to/myimage.jpg
