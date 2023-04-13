import React from 'react';
import blog from '../../assets/img/blog.png';
import seta from '../../assets/img/seta2.png';
import utilidades from '../../assets/img/utilidades.png';
import porfolio from '../../assets/img/porfolio.png';
import codigo from '../../assets/img/codigo.png';
import MainHeader from '../sections/header/MainHeader';

// TODO: Refactorizar en secciones y seccion

const Home = () => {
	const sections =[
		{}
	]

  return (
		<main className='min-h-screen'>
			<MainHeader
				icon={codigo}
				text='Alenta Solutions'
			/>
			<section className=' px-5 py-16 sm:px-10 md:p-16 max-w-7xl m-auto font-semibold text-gray-700'>
				<div className='grid gap-6 grid-cols-1 lg:grid-cols-2'>
					<article className='cursor-pointer p-4'>
						<div className='flex justify-center'>
							<img
								src={blog}
								alt='blog imagen'
							/>
						</div>
						<div className='mt-4'>
							<span>
								Blog para amigos y familiares para que nos cuentes cualquier cosa. Registrate y
								cuelga lo que te apetezca.
							</span>
						</div>
					</article>
					<article className='cursor-pointer p-4'>
						<div className='flex justify-center'>
							<img
								src={seta}
								alt='seta imagen'
							/>
						</div>
						<div className='mt-4'>
							<span>Juegos divertidos remasterizados de ejercicios de programación. Puedes practicar tu agilidad con el teclado.</span>
						</div>
					</article>
					<article className='cursor-pointer p-4'>
						<div className='flex justify-center'>
							<img
								src={utilidades}
								alt='utilidades imagen'
							/>
						</div>
						<div className='mt-4'>
							<span>
								Utilidades sorprendentes para tu día a día. Tales como una lista de la compra, una
								calculadora, etc...
							</span>
						</div>
					</article>
					<article className='cursor-pointer p-4'>
						<div className='flex justify-center'>
							<img
								src={porfolio}
								alt='porfolio imagen'
							/>
						</div>
						<div className='mt-4'>
							<span>
								Mi porfolio para que conozcas mis trabajos y proyectos en este apasionante mundo
								tecnológico.
							</span>
						</div>
					</article>
				</div>
			</section>
		</main>
	);
}

export default Home;
