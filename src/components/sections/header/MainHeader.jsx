import { useContext } from "react";
import { UiContext } from "../../../context/uiContext";


const MainHeader = () => {

	const { page } = useContext(UiContext);

  return (
		<header className='bg-header bg-cover pt-10 flex justify-center'>
			<div className='flex gap-2 md:gap-4 items-center py-20'>
				<div className='w-8 sm:w-10 md:w-14'>
					<img
						src={page.icon}
						alt={`Imagen ${page.name}`}
					/>
				</div>
				<h1 className='text-4xl sm:text-5xl md:text-7xl font-dancing text-white font-bold'>
					{page.title}
				</h1>
			</div>
		</header>
	);
}

export default MainHeader;
