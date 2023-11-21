import InicioPage from './pages/ui/InicioPage'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/ui/HomePage'
import AboutPage from './pages/ui/AboutPage'
import BlogPage from './pages/ui/BlogPage'
import ContactPage from './pages/ui/ContactPage'
import UtilsPage from './pages/ui/UtilsPage'
import GamesPage from './pages/ui/GamesPage'
import PorfolioPage from './pages/ui/PorfolioPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import ResetPasswordPage from './pages/auth/ResetPasswordPage'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage'
import NotFoundPage from './pages/errors/NotFoundPage'
import EmailSendPage from './pages/auth/EmailSendPage'
import ProfilePage from './pages/user/ProfilePage'
function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<InicioPage />} />
        <Route path='home' element={<HomePage />} />
        <Route path='sobre-nosotros' element={<AboutPage />} />
        <Route path='blog' element={<BlogPage />} />
        <Route path='contacto' element={<ContactPage />} />
        <Route path='juegos' element={<GamesPage />} />
        <Route path='porfolio' element={<PorfolioPage />} />
        <Route path='utilidades' element={<UtilsPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='registro' element={<RegisterPage />} />
        <Route path='reset-password/:token' element={<ResetPasswordPage />} />
        <Route path='forgot-password' element={<ForgotPasswordPage />} />
        <Route path='email-send' element={<EmailSendPage />} />
        <Route path='usuario/perfil' element={<ProfilePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
