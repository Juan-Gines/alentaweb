import { useContext, useEffect } from 'react'
import MainHeader from '../sections/header/MainHeader'
import { UiContext } from '../../context/uiContext'

const Games = () => {
  const { ui: { page, sections }, changePage } = useContext(UiContext)
  const gamesPage = sections.nav.games
  console.log(page !== gamesPage)
  useEffect(() => {
    if (page !== gamesPage) {
      changePage(gamesPage)
    }
  }, [])
  return (
    <main className='min-h-screen'>
      <MainHeader />
    </main>
  )
}

export default Games
