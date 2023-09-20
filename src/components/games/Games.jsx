import { useContext, useEffect } from 'react'
import MainHeader from '../sections/header/MainHeader'
import { UiContext, UiDispatchContext } from '../../context/uiContext'

const Games = () => {
  const { page, sections } = useContext(UiContext)
  const games = sections.find((sec) => sec.title === 'Juegos')
  const dispatch = useContext(UiDispatchContext)
  useEffect(() => {
    if (page !== games) {
      dispatch({
        type: 'changedpage',
        page: games
      })
    }
  }, [])
  return (
    <main className='min-h-screen'>
      <MainHeader />
    </main>
  )
}

export default Games
