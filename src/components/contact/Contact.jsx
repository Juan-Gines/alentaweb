import { useContext } from 'react';
import MainHeader from '../sections/header/MainHeader';
import { UiContext } from '../../context/uiContext';

const Contact = () => {
  const { sections } = useContext(UiContext);
	const contact = sections.find((sec) => sec.title === 'Contacto');

	return (
		<main className='min-h-screen'>
			<MainHeader
				icon={contact.icon}
				text={contact.title}
			/>
		</main>
	);
};

export default Contact;
