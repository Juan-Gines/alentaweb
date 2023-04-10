import React from 'react';
import { FcCommandLine } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
		<main className='min-h-screen'>
			<header className='bg-header bg-cover pt-10 flex justify-center'>				
        <div
          className='flex gap-2 text-2xl sm:text-4xl md:text-5xl items-center py-20'>
          <FcCommandLine className='text-3xl md:text-7xl' />
          <h1 className='text-white font-bold'>ALENTA SOLUTIONS</h1>
        </div>      
			</header>
		</main>
	);
}

export default Home;
