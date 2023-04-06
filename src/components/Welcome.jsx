import img from '../assets/Consola.png'

const Welcome = () => {
  return (
		<div className='bg-neutral-100 w-full min-h-screen text-gray-700 px-2 sm:px-20'>
			<h1 className='text-5xl p-5 text-center text-green-600'> Web Alenta </h1>
			<p className='p-5 text-lg font-semibold'>
				Bienvenido al universo Alenta. Aquí creamos Apps web, escritorio, movil o multiplataforma.
			</p>
			<div className='mb-3 p-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 '>
				<div className='col-auto p-2 rounded-md bg-neutral-200 shadow-md'>
					<header>
						<h1 className='text-teal-700 p-2  text-xl '>App web</h1>
            <img src={img} />
					</header>
				</div>
      </div>				
			<p className='px-5 text-lg font-semibold'>
				Si tienes una idea nosotros la hacemos realidad. Y si no la tienes pero quieres abrirte al
				mundo te asesoramos.
			</p>
		</div>
	);
}

export default Welcome;
