import { useContext } from 'react';
import MainHeader from '../sections/header/MainHeader';
import { UiContext } from '../../context/uiContext';

const About = () => {

  const { sections } = useContext(UiContext);
  const about = sections.find((sec)=>sec.title === 'Sobre Nosotros');
  
  return (
		<main className='min-h-screen'>
			<MainHeader
				icon={about.icon}
				text={about.title}
			/>
		</main>
	);
}

export default About;
