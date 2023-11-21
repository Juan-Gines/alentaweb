import { useContext, useEffect } from 'react'
import MainHeader from '../sections/header/MainHeader'
import { UiContext } from '../../context/uiContext'

const Profile = () => {
  const { ui: { page, sections }, changePage } = useContext(UiContext)
  const profilePage = sections.userPanel.profile
  useEffect(() => {
    if (page !== profilePage) {
      changePage(profilePage)
    }
  }, [])

  return (
    <main className='min-h-screen'>
      <MainHeader />
    </main>
  )
}

export default Profile
