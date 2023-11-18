import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import IndexBackground from '../canvas/Draws/IndexBackground'
import AnimateString from '../effects/AnimateString'
import { UiContext } from '../../context/uiContext'

const Intro = () => {
  const { ui: { page, sections }, changePage } = useContext(UiContext)
  const home = sections.nav.home
  useEffect(() => {
    if (page !== home) {
      changePage(home)
    }
  }, [])
  const msg = 'Bienvenido a nuestro rincón del ciberespacio. Aquí encontrarás foros, utilidades sorprendentes, juegos, porfolios e información sobre nosotros.'
  const msg2 = 'Queremos ser los creadores de tu nuevo espacio. Entra, diviertete y sientete libre.'

  return (
    <div className='relative flex bg-gradient-to-tr w-full h-screen from-gray-800 to-black justify-center'>
      <IndexBackground />
      <div className='absolute top-0 h-1/5 w-full flex justify-center items-center animate-aparecer'>
        <div className='w-8 mr-4 sm:w-14 sm:m-8'>
          <img
            src={page.icon}
            alt='logo codigo'
          />
        </div>
        <h1 className='font-dancing text-4xl sm:text-7xl text-center font-bold text-blue-600'>
          {page.title}
        </h1>
      </div>
      <div className='absolute top-1/4 w-3/4  text-xl sm:text-lg font-sans font-family: text-blue-400 shadow-gray-900'>
        <AnimateString
          str={msg}
          str2={msg2}
        />
      </div>
      <div className='absolute bottom-0 h-1/5 w-full flex justify-center items-center'>
        <Link to='/home'>
          <button className='px-6 py-2 text-white text-xl bg-blue-500 rounded-full active:bg-blue-800 hover:bg-blue-400 border border-blue-500'>
            Entrar
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Intro
