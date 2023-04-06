import IndexBackground from "./canvas/Draws/IndexBackground";
import AnimateString from "./effects/AnimateString";

const Prueba = () => {	

  return (    
    <h1 className='relative flex flex-row items-center justify-center bg-gradient-to-tr w-full h-screen from-gray-800 to-black'>      
			<IndexBackground />
      <div className='absolute top-20 text-4xl sm:text-6xl text-center font-bold font-sans font-family: text-blue-600 animate-aparecer'>Alenta Solutions</div>
			<div className="absolute top-60 w-3/4 text-xl sm:text-lg  font-sans font-family: text-blue-400">
				<AnimateString str='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit a quod delectus atque quisquam enim aliquid, aut officia eveniet debitis accusamus vel ducimus blanditiis. A recusandae animi nihil repellendus tempore.' /> 
			</div>
    </h1>
  );
}

export default Prueba;
