import { useContext, useEffect } from 'react'
import MainHeader from '../sections/header/MainHeader'
import { UiContext } from '../../context/uiContext'

const Contact = () => {
  const { ui: { page, sections }, changePage } = useContext(UiContext)
  const contactPage = sections.nav.contact
  useEffect(() => {
    if (page !== contactPage) {
      changePage(contactPage)
    }
  }, [])

  return (
    <main className='min-h-screen'>
      <MainHeader />
    </main>
  )
}

export default Contact
