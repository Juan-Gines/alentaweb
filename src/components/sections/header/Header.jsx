import { FaUser } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UiContext, UiDispatchContext } from '../../../context/uiContext';
import codigo from '../../../assets/img/codigo.png';

const Header = () => {

	const { page, navslice, sections} = useContext(UiContext);
	const navSections = sections.filter((sec)=> sec.title !== 'home')	
	const dispatch = useContext(UiDispatchContext);	
	
  return (
		<header className='absolute w-full top-0 max-h-screen'>
			<div className='absolute z-40 top-0 w-full flex items-center justify-between p-2 md:justify-evenly py-3 bg-gradient-to-tr from-sky-400 to-sky-800 text-slate-200'>
				<div className='flex gap-2 items-center cursor-pointer'>
					<GiHamburgerMenu
						className='text-xl md:hidden'
						onClick={() => {
							dispatch({
								type: 'togglenavslice',
							});
						}}
					/>
					<Link to={sections[0].url}>
						<div
							className='flex gap-2 items-center'
							onClick={() => {
								dispatch({
									type: 'changedpage',
									page: 'home',
								});
							}}
						>
							<div className='w-6 sm:w-8'>
								<img src={codigo} alt='logo codigo' />
							</div>							
							<h2 className='font-dancing text-base sm:text-2xl font-bold'>{sections[0].description}</h2>
						</div>
					</Link>
				</div>
				<nav className='hidden md:flex justify-center gap-4 xl:gap-8 text-sm sm:text-sm lg:text-base '>
					{navSections.map((pag, i) => (
						<Link
							key={i}
							to={pag.url}
						>
							<div
								className={`${pag.title === page ? 'border-b-4 border-yellow-400' : ''}`}
								onClick={() => {
									dispatch({
										type: 'changedpage',
										page: pag.title,
									});
								}}
							>
								{pag.title}
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
				} md:animate-growUp z-20 top-10 origin-top-center bg-gradient-to-br from-sky-400 to-sky-800 text-slate-200`}
			>
				<ul className='mt-10 mb-5'>
					{navSections.map((pag, i) => (
						<Link
							key={i}
							to={pag.url}
						>
							<li
								className={`${
									pag.title === page ? 'border-l-8 border-yellow-400 opacity-100' : ''
								} mb-3 cursor-pointer hover:bg-blue-800 py-1 px-3`}
								onClick={() => {
									pag.title !== page
										? dispatch({
												type: 'changedpage',
												page: pag.title,
										  })
										: null;
								}}
							>
								{pag.title}
							</li>
						</Link>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header