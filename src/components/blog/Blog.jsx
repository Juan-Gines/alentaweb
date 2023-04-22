import { useContext } from 'react';
import MainHeader from '../sections/header/MainHeader';
import { UiContext } from '../../context/uiContext';

const Blog = () => {
	const { sections } = useContext(UiContext);
	const blog = sections.find((sec) => sec.title === 'Blog');

	return (
		<main className='min-h-screen'>
			<MainHeader	/>
		</main>
	);
};

export default Blog;
