import { useContext, useEffect } from 'react'
import MainHeader from '../sections/header/MainHeader'
import { UiContext } from '../../context/uiContext'

const Porfolio = () => {
  const { ui: { page, sections }, changePage } = useContext(UiContext)
  const porfolioPage = sections.nav.porfolio
  console.log(page !== porfolioPage)
  useEffect(() => {
    if (page !== porfolioPage) {
      changePage(porfolioPage)
    }
  }, [])

  return (
    <main className='min-h-screen'>
      <MainHeader />
    </main>
  )
}

export default Porfolio
