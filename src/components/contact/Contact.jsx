import { useContext } from 'react'
import MainHeader from '../sections/header/MainHeader'
import { UiContext, UiDispatchContext } from '../../context/uiContext'

const Contact = () => {
  const { page, sections } = useContext(UiContext)
  const contact = sections.find((sec) => sec.title === 'Contacto')
  const dispatch = useContext(UiDispatchContext)
  if (page !== contact) {
    dispatch({
      type: 'changedpage',
      page: contact
    })
  }

  return (
    <main className='min-h-screen'>
      <MainHeader />
    </main>
  )
}

export default Contact
