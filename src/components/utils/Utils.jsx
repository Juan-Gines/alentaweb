import { useContext } from 'react'
import MainHeader from '../sections/header/MainHeader'
import { UiContext, UiDispatchContext } from '../../context/uiContext'

const Utils = () => {
  const { page, sections } = useContext(UiContext)
  const utils = sections.find((sec) => sec.title === 'Utilidades')
  const dispatch = useContext(UiDispatchContext)
  if (page !== utils) {
    dispatch({
      type: 'changedpage',
      page: utils
    })
  }

  return (
    <main className='min-h-screen'>
      <MainHeader />
    </main>
  )
}

export default Utils
