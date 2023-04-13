import { useContext } from 'react';
import MainHeader from '../sections/header/MainHeader';
import { UiContext } from '../../context/uiContext';

const Games = () => {
  const { sections } = useContext(UiContext);
  const games = sections.find((sec) => sec.title === 'Juegos');

	return (
		<main className='min-h-screen'>
			<MainHeader
				icon={games.icon}
				text={games.title}
			/>
		</main>
	);
};

export default Games;
