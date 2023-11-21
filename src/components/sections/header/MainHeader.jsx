import { useContext } from 'react'
import { UiContext } from '../../../context/uiContext'
import background from '../../../assets/img/bgheader.png'

const MainHeader = () => {
  const { ui: { page: { icon, title } } } = useContext(UiContext)

  return (
    <header className='bg-cover flex justify-center' style={{ backgroundImage: `url(${background})` }}>
      <div className='flex gap-2 md:gap-4 mt-10 items-center py-20'>
        <div className='w-8 sm:w-10 md:w-14'>
          <img
            src={icon}
            alt={`Imagen ${title}`}
          />
        </div>
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-dancing text-white font-bold'>
          {title}
        </h1>
      </div>
    </header>
  )
}

export default MainHeader
