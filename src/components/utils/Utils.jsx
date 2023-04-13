import { useContext } from 'react';
import MainHeader from '../sections/header/MainHeader';
import { UiContext } from '../../context/uiContext';

const Utils = () => {
	const { sections } = useContext(UiContext);
	const utils = sections.find((sec) => sec.title === 'Utilidades');

	return (
		<main className='min-h-screen'>
			<MainHeader
				icon={utils.icon}
				text={utils.title}
			/>
		</main>
	);
};

export default Utils;
