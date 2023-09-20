import { useContext, useEffect } from 'react'
import MainHeader from '../sections/header/MainHeader'
import { UiContext, UiDispatchContext } from '../../context/uiContext'

const About = () => {
  const { page, sections } = useContext(UiContext)
  const about = sections.find((sec) => sec.title === 'Sobre Nosotros')
  const dispatch = useContext(UiDispatchContext)
  useEffect(() => {
    if (page !== about) {
      dispatch({
        type: 'changedpage',
        page: about
      })
    }
  }, [])
  return (
    <main className='min-h-screen'>
      <MainHeader />
    </main>
  )
}

export default About
