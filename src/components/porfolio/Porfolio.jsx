import { useContext } from 'react';
import MainHeader from '../sections/header/MainHeader';
import { UiContext } from '../../context/uiContext';

const Porfolio = () => {
	const { sections } = useContext(UiContext);
	const porfolio = sections.find((sec) => sec.title === 'Porfolio');

	return (
		<main className='min-h-screen'>
			<MainHeader
				icon={porfolio.icon}
				text={porfolio.title}
			/>
		</main>
	);
};

export default Porfolio;
