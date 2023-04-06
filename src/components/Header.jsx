import { FcCommandLine } from 'react-icons/fc'

const Header = () => {
  return (
		<header className='flex flex-row items-center justify-around p-5 bg-gray-100'>
			<div className='flex flex-row text-3xl font-semibold'>
				<FcCommandLine />
				<h1 className='ml-2 text-slate-700'>Alenta IT</h1>
			</div>
      <div>
        <button className='bg-blue-700 py-1 px-3 rounded-md text-white text-xl'>Login</button>
      </div>
		</header>
	);
}

export default Header