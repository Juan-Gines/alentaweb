import { FcCommandLine } from 'react-icons/fc'

const Header = () => {
  return (
		<header className='flex flex-row items-center justify-between sm:justify-evenly p-5 '>
			<div className='flex flex-row text-xl sm:text-3xl font-semibold'>
				<FcCommandLine />
				<h1 className='ml-2 text-slate-700'>Alenta Solutions</h1>
			</div>
      <div>
        <button className='bg-blue-700 py-1 px-5 rounded-lg text-white text-md hover:bg-blue-500 active:bg-blue-600'>Login</button>
      </div>
		</header>
	);
}

export default Header