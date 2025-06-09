import React, { useState } from 'react';
import { Image } from '@imagekit/react';
import { Link, NavLink } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className='w-full h-16 md:h-20 flex items-center justify-between'>
			{/* LOGO */}
			<Link to='/' className='flex items-center gap-2 text-xl font-bold'>
				<Image
					urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
					src='https://ik.imagekit.io/r6yaoh57f/hmo-logo.png'
					width='40'
					height='40'
					alt='HCCCS'
				/>
				<span>Code with H Mo'</span>
			</Link>
			{/* MOBILE MENU */}
			<div className='md:hidden '>
				<div
					onClick={() => setOpen((prev) => !prev)}
					className='cursor-pointer text-4xl '>
					{open ? 'X' : '≡'}
				</div>
				{/* MOBILE LINK LIST */}
				<div
					className={` w-full h-screen flex flex-col items-center gap-8 font-medium text-lg justify-center z-10 absolute top-16 transition-all ease-in-out bg-[#e6e6ff] ${
						open ? '-right-[0%]' : '-right-[100%]'
					}`}>
					<NavLink onClick={() => setOpen(false)} to='/'>
						Home
					</NavLink>
					<NavLink onClick={() => setOpen(false)} to='/posts'>
						Tranding
					</NavLink>
					<NavLink onClick={() => setOpen(false)} to='/posts'>
						Most Popular
					</NavLink>
					<NavLink onClick={() => setOpen(false)} to='/about'>
						About
					</NavLink>
					<Link to='/posts'>
						<button className='py-2 px-4 rounded-3xl bg-[#049977] text-white'>
							Login
						</button>
					</Link>
				</div>
			</div>
			{/* DESKTOP MENU */}
			<div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
				<NavLink to='/'>
					Home{' '}
					<hr className='w-2/4 border-none h-[1.5px] bg-[#049977] hidden' />
				</NavLink>
				<NavLink to='/posts'>
					Tranding{' '}
					<hr className='w-2/4 border-none h-[1.5px] bg-[#049977] hidden' />
				</NavLink>
				<NavLink to='/posts'>
					Most Popular{' '}
					<hr className='w-2/4 border-none h-[1.5px] bg-[#049977] hidden' />
				</NavLink>
				<NavLink to='/about'>
					About{' '}
					<hr className='w-2/4 border-none h-[1.5px] bg-[#049977] hidden' />
				</NavLink>
				<SignedOut>
					<Link to='/login'>
						<button className='py-2 px-4 rounded-3xl bg-[#049977] text-white'>
							Login 🖐
						</button>
					</Link>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</div>
	);
};

export default Navbar;
