import { useContext, useEffect } from 'react'
import { UiContext } from '../../context/uiContext'
import MainHeader from '../sections/header/MainHeader'
import SectionList from './sections/SectionList'

const Home = () => {
  const { ui: { page, sections }, changePage } = useContext(UiContext)
  const home = sections.nav.home
  useEffect(() => {
    if (page !== home) {
      changePage(home)
    }
  }, [])
  return (
    <main className='min-h-screen'>
      <MainHeader />
      <SectionList />
    </main>
  )
}

export default Home
