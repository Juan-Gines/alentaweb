import { useContext } from 'react'
import { UiContext } from '../../../context/uiContext'
import { Link } from 'react-router-dom'

const Section = ({ section }) => {
  const { changePage } = useContext(UiContext)
  return (
    <Link
      to={section.url}
      onClick={() => changePage(section)}
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
  )
}

export default Section
