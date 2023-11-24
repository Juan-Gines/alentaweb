import { useContext } from 'react'
import { UiContext } from '../../../context/uiContext'

const AuthHeader = () => {
  const { ui } = useContext(UiContext)
  const { icon } = ui.sections.nav.home
  return (
    <>
      <div className='flex justify-center mx-auto'>
        <img className='w-auto h-7 sm:h-8' src={icon} alt='' />
      </div>
      <h3 className='mt-3 text-3xl font-bold text-center text-gray-600'>Alenta Dev</h3>
    </>
  )
}

export default AuthHeader
