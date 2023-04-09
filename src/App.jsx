import Inicio from './pages/Inicio'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Utils from './pages/Utils'
import Games from './pages/Games'
import Porfolio from './pages/Porfolio'
import { UiProvider } from './context/uiContext'
function App() {  

  return (
		<div className='App'>
			<UiProvider>
				<Routes>
					<Route path='/' element={<Inicio />} />
					<Route path='/home' element={<Home />} />
					<Route path='/sobre-nosotros' element={<About />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/contacto' element={<Contact />}	/>
					<Route path='/juegos' element={<Games />}	/>
					<Route path='/porfolio'	element={<Porfolio />} />
					<Route path='/utilidades'	element={<Utils />}	/>
				</Routes>
			</UiProvider>
		</div>
	);
}

export default App
