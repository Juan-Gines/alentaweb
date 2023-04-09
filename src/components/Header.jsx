import { FcCommandLine } from 'react-icons/fc'
import { FaUser } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UiContext, UiDispatchContext } from '../context/uiContext';

const pages = [
	{
		title: 'Blog',
		url: '/blog'
	},
	{
		title: 'Juegos',
		url: '/juegos'
	},
  {
		title: 'Utilidades',
		url: '/utilidades'
	},
  {
		title: 'Porfolio',
		url: '/porfolio'
	},
  {
		title: 'Contacto',
		url: '/contacto'
	},
	{
		title: 'Sobre nosotros',
		url: '/sobre-nosotros'
	},
]

const Header = () => {

	const { page, navslice} = useContext(UiContext);
	const dispatch = useContext(UiDispatchContext);	
	
  return (
		<header>
			<div className='absolute z-40 top-0 w-full flex items-center justify-between md:justify-evenly  p-5 bg-gradient-to-tr from-sky-400 to-sky-800 text-slate-200'>
				<div className='flex gap-2 text-sm sm:text-xl  sm:font-medium items-center'>
					<GiHamburgerMenu
						className='text-xl md:hidden'
						onClick={() => {
							dispatch({
								type: 'togglenavslice',
							});
						}}
					/>
					<Link to='/home'>
						<div className='flex gap-2 text-sm sm:text-md font-medium items-center'
						onClick={()=>{
							dispatch({
								type: 'changedpage',
								page: 'home',
							});
						}}
						>
							<FcCommandLine className='text-md sm:text-xl md:text-2xl' />
							<h1>ALENTA SOLUTIONS</h1>
						</div>
					</Link>
				</div>
				<nav className='hidden md:flex justify-center gap-4 xl:gap-8 text-sm  '>
					{pages.map((p, i) => (
						<Link
							key={i}
							to={p.url}
						>
							<div
								className={`${p.title === page ? 'border-b-4 border-yellow-400' : ''}`}
								onClick={() => {
									dispatch({
										type: 'changedpage',
										page: p.title,
									});
								}}
							>
								{p.title}
							</div>
						</Link>
					))}
				</nav>
				<div className='flex justify-end items-center gap-2'>
					<div>
						<FaUser className=' text-lg' />
					</div>
					<button className='bg-blue-700 py-1 px-3 sm:px-5 rounded-lg  text-sm hover:bg-blue-900 active:bg-blue-600'>
						Login
					</button>
				</div>
			</div>
			<nav
				className={`absolute ${navslice === null ? 'hidden' : ''} ${
					navslice ? 'animate-growDown' : 'animate-growUp'
				} z-20 top-16 origin-top-center bg-gradient-to-br from-sky-400 to-sky-800 opacity-80 text-slate-200`}
			>
				<ul className='mt-10 mb-5'>
					{pages.map((p, i) => (
						<Link
							key={i}
							to={p.url}
						>
							<li
								className={`${
									p.title === page ? 'border-r-8 border-yellow-400 opacity-100' : ''
								} mb-3 cursor-pointer hover:bg-blue-800 py-1 px-3`}
								onClick={() => {
									p.title !== page ?
									dispatch({
										type: 'changedpage',
										page: p.title,
									}):
									null
								}}
							>
								{p.title}
							</li>
						</Link>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header