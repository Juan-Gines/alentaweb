import { useState } from "react";
import IndexBackground from "./canvas/Draws/IndexBackground";
import AnimateString from "./effects/AnimateString";

const Prueba = () => {  
  
  const msg = 'Bienvenido a nuestro rincón del ciberespacio. Aquí encontrarás foros, utilidades sorprendentes, juegos, portfolios e información sobre nosotros.'
  const msg2 = 'Queremos ser los creadores de tu nuevo espacio. Entra, diviertete y sientete libre.'

  return (
		<div className='relative flex bg-gradient-to-tr w-full h-screen from-gray-800 to-black justify-center'>
			<IndexBackground />
			<div className='absolute top-0 h-1/5 w-full flex justify-center items-center'>
				<h1 className='text-4xl sm:text-6xl text-center font-bold font-sans font-family: text-blue-600 animate-aparecer'>
					Alenta Solutions
				</h1>
			</div>			
				<div  className='absolute top-1/4 w-3/4  text-xl sm:text-lg font-sans font-family: text-blue-400 shadow-gray-900'>
					<AnimateString str={msg} str2={msg2}/>          
				</div>			
			<div className='absolute bottom-0 h-1/5 w-full flex justify-center items-center'>
				<button className='px-6 py-2 text-white text-xl bg-blue-500 rounded-full active:bg-blue-800 hover:bg-blue-400 border border-blue-500'>Entrar</button>
			</div>
		</div>
	);
}

export default Prueba;
