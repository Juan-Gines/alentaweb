import { useContext, useEffect } from 'react'
import MainHeader from '../sections/header/MainHeader'
import { UiContext } from '../../context/uiContext'

const Utils = () => {
  const { ui: { page, sections }, changePage } = useContext(UiContext)
  const utilsPage = sections.nav.utils
  useEffect(() => {
    if (page !== utilsPage) {
      changePage(utilsPage)
    }
  }, [])

  return (
    <main className='min-h-screen'>
      <MainHeader />
    </main>
  )
}

export default Utils
