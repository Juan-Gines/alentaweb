import { createContext, useReducer } from 'react'
import { Section } from '../models/Section.class'
import codigo from '../assets/img/codigo.png'
import blog from '../assets/img/blog.png'
import juegos from '../assets/img/seta2.png'
import porfolio from '../assets/img/porfolio.png'
import utilidades from '../assets/img/utilidades.png'
import contacto from '../assets/img/contacto.png'
import about from '../assets/img/about.png'

const sectionList = [
  new Section('home', 'Alenta Solutions', '/home', codigo, 'Alenta Solutions'),
  new Section(
    'login',
    'Login',
    '/login',
    about,
    'Login'
  ),
  new Section(
    'register',
    'Registro',
    '/registro',
    about,
    'Registro'
  ),
  new Section(
    'blog',
    'Blog',
    '/blog',
    blog,
    'Blog para amigos y familiares para que nos cuentes cualquier cosa. Registrate y cuelga lo que te apetezca.'
  ),
  new Section(
    'games',
    'Juegos',
    '/juegos',
    juegos,
    'Juegos divertidos remasterizados de ejercicios de programación. Puedes practicar tu agilidad con el teclado.'
  ),
  new Section(
    'utils',
    'Utilidades',
    '/utilidades',
    porfolio,
    'Utilidades sorprendentes para tu día a día. Tales como una lista de la compra, una calculadora, etc...'
  ),
  new Section(
    'porfolio',
    'Porfolio',
    '/porfolio',
    utilidades,
    'Mi porfolio para que conozcas mis trabajos y proyectos en este apasionante mundo tecnológico.'
  ),
  new Section(
    'contact',
    'Contacto',
    '/contacto',
    contacto,
    'Mi porfolio para que conozcas mis trabajos y proyectos en este apasionante mundo tecnológico.'
  ),
  new Section(
    'about',
    'Sobre Nosotros',
    '/sobre-nosotros',
    about,
    'Mi porfolio para que conozcas mis trabajos y proyectos en este apasionante mundo tecnológico.'
  )

]

const initialState = {
  page: sectionList.find((sec) => sec.name === 'home'),
  navslice: null,
  sections: sectionList
}

export const UiContext = createContext(null)
export const UiDispatchContext = createContext(null)

export const UiProvider = ({ children }) => {
  const [ui, dispatch] = useReducer(uiReducer, initialState)

  return (
    <UiContext.Provider value={ui}>
      <UiDispatchContext.Provider value={dispatch}>
        {children}
      </UiDispatchContext.Provider>
    </UiContext.Provider>
  )
}

const uiReducer = (ui, action) => {
  switch (action.type) {
    case 'changedpage': {
      return {
        page: action.page,
        navslice: null,
        sections: ui.sections
      }
    }
    case 'togglenavslice': {
      return {
        page: ui.page,
        navslice: !ui.navslice,
        sections: ui.sections
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
