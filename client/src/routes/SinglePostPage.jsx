import { Image } from '@imagekit/react';
import { Link } from 'react-router-dom';
import PostMenuAction from '../components/PostMenuAction';
import Search from '../components/Search';
import Comments from '../components/Comments';

const SinglePostPage = () => {
	return (
		<div className='flex flex-col gap-8'>
			{/* details */}
			<div className='flex gap-8'>
				<div className='lg:w-3/5 flex flex-col gap-8'>
					<h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					</h1>
					<div className='flex items-center gap-2 text-gray-400 text-sm'>
						<span>Written by</span>
						<Link>Hmo Hausawi</Link>
						<span>On</span>
						<Link>Web Design</Link>
						<span>2 days ago</span>
					</div>
					<p className='text-gray-400 font-medium'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
						culpa delectus quaerat dolore illum maiores vitae omnis minus totam
						tempore, a alias animi quam ut et assumenda mollitia numquam nam hic
						perspiciatis vero, quibusdam veritatis amet. Recusandae porro odio
						ullam libero, asperiores alias, neque perferendis est aut corporis
						sunt quasi.
					</p>
				</div>
				<div className='hidden  lg:block w-2/5'>
					<Image
						width='600'
						className='rounded-2xl'
						urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
						src='https://ik.imagekit.io/r6yaoh57f/feature3.jpg'
					/>
				</div>
			</div>
			{/* content */}
			<div className='flex flex-col md:flex-row gap-12 '>
				{/* text */}
				<div className='lg:text-lg flex flex-col gap-6 text-justify'>
					<div className='w-full lg:hidden'>
						<Image
							width='600'
							className='rounded-2xl'
							urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
							src='https://ik.imagekit.io/r6yaoh57f/feature3.jpg'
						/>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quae
						et recusandae maiores eaque, exercitationem sed distinctio sint
						consequatur quidem rem aliquam sit inventore velit repellendus alias
						blanditiis quasi totam cum quo deserunt soluta. Ex suscipit,
						doloremque impedit autem quisquam possimus fugiat quia ut eligendi
						placeat qui accusantium est repudiandae. Aut, ab! Veritatis nihil
						atque voluptas alias doloribus at necessitatibus provident rem
						aliquam. Autem rem accusantium eum quo quod dignissimos.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quae
						et recusandae maiores eaque, exercitationem sed distinctio sint
						consequatur quidem rem aliquam sit inventore velit repellendus alias
						blanditiis quasi totam cum quo deserunt soluta. Ex suscipit,
						doloremque impedit autem quisquam possimus fugiat quia ut eligendi
						placeat qui accusantium est repudiandae. Aut, ab! Veritatis nihil
						atque voluptas alias doloribus at necessitatibus provident rem
						aliquam. Autem rem accusantium eum quo quod dignissimos.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quae
						et recusandae maiores eaque, exercitationem sed distinctio sint
						consequatur quidem rem aliquam sit inventore velit repellendus alias
						blanditiis quasi totam cum quo deserunt soluta. Ex suscipit,
						doloremque impedit autem quisquam possimus fugiat quia ut eligendi
						placeat qui accusantium est repudiandae. Aut, ab! Veritatis nihil
						atque voluptas alias doloribus at necessitatibus provident rem
						aliquam. Autem rem accusantium eum quo quod dignissimos.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quae
						et recusandae maiores eaque, exercitationem sed distinctio sint
						consequatur quidem rem aliquam sit inventore velit repellendus alias
						blanditiis quasi totam cum quo deserunt soluta. Ex suscipit,
						doloremque impedit autem quisquam possimus fugiat quia ut eligendi
						placeat qui accusantium est repudiandae. Aut, ab! Veritatis nihil
						atque voluptas alias doloribus at necessitatibus provident rem
						aliquam. Autem rem accusantium eum quo quod dignissimos.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quae
						et recusandae maiores eaque, exercitationem sed distinctio sint
						consequatur quidem rem aliquam sit inventore velit repellendus alias
						blanditiis quasi totam cum quo deserunt soluta. Ex suscipit,
						doloremque impedit autem quisquam possimus fugiat quia ut eligendi
						placeat qui accusantium est repudiandae. Aut, ab! Veritatis nihil
						atque voluptas alias doloribus at necessitatibus provident rem
						aliquam. Autem rem accusantium eum quo quod dignissimos.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quae
						et recusandae maiores eaque, exercitationem sed distinctio sint
						consequatur quidem rem aliquam sit inventore velit repellendus alias
						blanditiis quasi totam cum quo deserunt soluta. Ex suscipit,
						doloremque impedit autem quisquam possimus fugiat quia ut eligendi
						placeat qui accusantium est repudiandae. Aut, ab! Veritatis nihil
						atque voluptas alias doloribus at necessitatibus provident rem
						aliquam. Autem rem accusantium eum quo quod dignissimos. Lorem ipsum
						dolor sit amet, consectetur adipisicing elit. Obcaecati, eum!
						Architecto aspernatur maxime, iusto eos pariatur mollitia provident,
						soluta nemo impedit, obcaecati quidem dicta id tempore! Deleniti
						veritatis asperiores nemo voluptatibus facilis neque perspiciatis
						minima odio dicta repudiandae, natus amet tempora autem iusto soluta
						consequuntur magni inventore officia illo at perferendis enim quasi.
						Ad aliquid expedita non pariatur. Beatae unde aperiam ut, porro quia
						sequi deserunt, facilis hic exercitationem sint culpa iure mollitia
						necessitatibus dolores accusamus quis officiis laboriosam recusandae
						nemo ullam ratione consequuntur qui! Sint culpa veritatis, esse
						accusamus unde, iusto incidunt quasi nostrum recusandae corrupti
						voluptatem dignissimos beatae!
					</p>
				</div>
				{/* menu */}
				<div className='px-4 h-max sticky top-8'>
					<h1 className=' mb-4 text-sm font-medium'>Author</h1>
					<div className='flex flex-col gap-4'>
						<div className='flex items-center gap-8 '>
							<Image
								width='48'
								height='48'
								className='rounded-full object-cover'
								urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
								src='https://ik.imagekit.io/r6yaoh57f/profile.png?updatedAt=1748803009317'
							/>
							<Link className='text-[#049977]'>Hmo Hausawi</Link>
						</div>
						<p className='text-gray-400 text-sm'>
							Lorem ipsum dolor sit amet consectetur.
						</p>
						<div className='flex gap-2'>
							<Link>
								<Image
									width='30'
									height='30'
									className='rounded-full object-cover'
									urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
									src='https://ik.imagekit.io/r6yaoh57f/github.png'
								/>
							</Link>
							<Link>
								<Image
									width='30'
									height='30'
									className='rounded-full object-cover'
									urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
									src='https://ik.imagekit.io/r6yaoh57f/youtube.jpg'
								/>
							</Link>
							<Link>
								<Image
									width='30'
									height='30'
									className='rounded-full object-cover '
									urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
									src='https://ik.imagekit.io/r6yaoh57f/linkedin.png'
								/>
							</Link>
						</div>
					</div>
					<PostMenuAction />
					<h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
					<div className='flex flex-col gap-2 text-sm'>
						<Link className='underline' to='/posts'>
							All
						</Link>
						<Link className='underline' to='/'>
							{' '}
							Web Design
						</Link>

						<Link className='underline' to='/'>
							{' '}
							Development
						</Link>

						<Link className='underline' to='/'>
							{' '}
							Database
						</Link>

						<Link className='underline' to='/'>
							{' '}
							Search Engine
						</Link>
						<Link className='underline' to='/'>
							{' '}
							Marketing
						</Link>
					</div>
					<h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
					<Search />
				</div>
			</div>
			<Comments />
		</div>
	);
};

export default SinglePostPage;
