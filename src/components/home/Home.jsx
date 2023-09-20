import { useContext, useEffect } from 'react'
import { UiContext, UiDispatchContext } from '../../context/uiContext'
import MainHeader from '../sections/header/MainHeader'
import SectionList from './sections/SectionList'

const Home = () => {
  const { page, sections } = useContext(UiContext)
  const home = sections.find((sec) => sec.title === 'Alenta Dev')
  const dispatch = useContext(UiDispatchContext)
  useEffect(() => {
    if (page !== home) {
      dispatch({
        type: 'changedpage',
        page: home
      })
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
