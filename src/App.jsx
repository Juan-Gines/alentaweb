import InicioPage from './pages/InicioPage'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import UtilsPage from './pages/UtilsPage'
import GamesPage from './pages/GamesPage'
import PorfolioPage from './pages/PorfolioPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import NotFoundPage from './pages/NotFoundPage'
import EmailSendPage from './pages/EmailSendPage'
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
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
