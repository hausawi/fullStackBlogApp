import { useUser } from '@clerk/clerk-react';
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';

const WritePage = () => {
	const { isLoaded, isSignedIn } = useUser();

	if (!isLoaded) {
		return <div className=''>Loading...</div>;
	}

	if (isLoaded && !isSignedIn) {
		return <div>You should login!</div>;
	}
	return (
		<div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
			<h1 className='text-xl font-light'>Create a New Post</h1>
			<form className='flex flex-col gap-6 flex-1 mb-6'>
				<button className='w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-green-200'>
					Add a cover image
				</button>
				<input
					className='text-4xl font-semibold bg-transparent outline-none'
					type='text'
					placeholder='Write Your Thought'
				/>
				<div className='flex items-center gap-4'>
					<label className='text-sm' htmlFor=''>
						Choose a category:
					</label>
					<select
						className='p-2 rounded-xl bg-[#414C6B] shadow-md'
						name='cat'
						id=''>
						<option value='general'>General</option>
						<option value='web-design'>Web Design</option>
						<option value='developemnt'>Development</option>
						<option value='database'>Database</option>
						<option value='seo'>Search Engine</option>
						<option value='marketing'>Marketing</option>
					</select>
				</div>
				<textarea
					className='p-4 rounded-xl bg-[#414C6B] shadow-md text-[#e6e6ff]'
					name='desc'
					placeholder='A Short Description'
				/>
				<ReactQuill
					theme='snow'
					className='flex-1  bg-[#e6e6ff] shadow-md rounded-xl text-[#414C6B]'
				/>
				<button className='bg-[#049977] text-white font-medium rounded-xl mt-4 p-2 w-36'>
					Post
				</button>
			</form>
		</div>
	);
};

export default WritePage;
