import { useContext, useEffect } from 'react'
import MainHeader from '../sections/header/MainHeader'
import { UiContext } from '../../context/uiContext'

const About = () => {
  const { ui: { page, sections }, changePage } = useContext(UiContext)
  const aboutPage = sections.nav.about
  console.log(page !== aboutPage)
  useEffect(() => {
    if (page !== aboutPage) {
      changePage(aboutPage)
    }
  }, [])
  return (
    <main className='min-h-screen'>
      <MainHeader />
    </main>
  )
}

export default About
