import InicioPage from './pages/InicioPage'
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import UtilsPage from './pages/UtilsPage'
import GamesPage from './pages/GamesPage'
import PorfolioPage from './pages/PorfolioPage'
import { UiProvider } from './context/uiContext'
function App() {  

  return (
		<div className='App'>
			<UiProvider>
				<Routes>
					<Route path='/' element={<InicioPage />} />
					<Route path='/home' element={<HomePage />} />
					<Route path='/sobre-nosotros' element={<AboutPage />} />
					<Route path='/blog' element={<BlogPage />} />
					<Route path='/contacto' element={<ContactPage />}	/>
					<Route path='/juegos' element={<GamesPage />}	/>
					<Route path='/porfolio'	element={<PorfolioPage />} />
					<Route path='/utilidades'	element={<UtilsPage />}	/>
				</Routes>
			</UiProvider>
		</div>
	);
}

export default App
