import { useContext, useEffect } from 'react'
import MainHeader from '../sections/header/MainHeader'
import { UiContext, UiDispatchContext } from '../../context/uiContext'

const Porfolio = () => {
  const { page, sections } = useContext(UiContext)
  const porfolio = sections.find((sec) => sec.title === 'Porfolio')
  const dispatch = useContext(UiDispatchContext)
  useEffect(() => {
    if (page !== porfolio) {
      dispatch({
        type: 'changedpage',
        page: porfolio
      })
    }
  }, [])

  return (
    <main className='min-h-screen'>
      <MainHeader />
    </main>
  )
}

export default Porfolio
