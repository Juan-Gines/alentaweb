import { useContext } from 'react';
import { UiContext, UiDispatchContext } from '../../../context/uiContext';
import { Link } from 'react-router-dom';

const Section = ({ sec }) => {
	const { sections } = useContext(UiContext);
  const section = sections.find((s)=> s.name === sec);
  const dispatch = useContext(UiDispatchContext);	
  

	return (
		<Link
			to={section.url}
			onClick={() => {
				dispatch({
					type: 'changedpage',
					page: section,
				});
			}}
		>
			<article className='cursor-pointer p-4'>
				<div className='flex justify-center'>
					<img
						src={section.icon}
						alt={`Imagen ${section.name}`}
					/>
				</div>
				<div className='mt-4'>
					<span>{section.description}</span>
				</div>
			</article>
		</Link>
	);
};

export default Section;
