import { createContext, useReducer } from "react";
import { Section } from "../models/Section.class";
import codigo  from "../assets/img/codigo.png"
import blog  from "../assets/img/blog.png"
import juegos  from "../assets/img/seta2.png"
import porfolio  from "../assets/img/porfolio.png"
import utilidades  from "../assets/img/utilidades.png"
import contacto  from "../assets/img/contacto.png"
import about  from "../assets/img/about.png"

const initialState = {
	page: 'home',
	navslice: null,
	sections: [
		new Section('home', '/home', codigo, 'Alenta Solutions'),
		new Section(
			'Blog',
			'/blog',
			blog,
			'Blog para amigos y familiares para que nos cuentes cualquier cosa. Registrate y cuelga lo que te apetezca.'
		),
		new Section(
			'Juegos',
			'/juegos',
			juegos,
			'Juegos divertidos remasterizados de ejercicios de programación. Puedes practicar tu agilidad con el teclado.'
		),
		new Section(
			'Utilidades',
			'/utilidades',
			porfolio,
			'Utilidades sorprendentes para tu día a día. Tales como una lista de la compra, una calculadora, etc...'
		),
		new Section(
			'Porfolio',
			'/porfolio',
			utilidades,
			'Mi porfolio para que conozcas mis trabajos y proyectos en este apasionante mundotecnológico.'
		),
		new Section(
			'Contacto',
			'/contacto',
			contacto,
			'Mi porfolio para que conozcas mis trabajos y proyectos en este apasionante mundotecnológico.'
		),
		new Section(
			'Sobre Nosotros',
			'/sobre-nosotros',
			about,
			'Mi porfolio para que conozcas mis trabajos y proyectos en este apasionante mundotecnológico.'
		),
	],
};

export const UiContext = createContext(null);
export const UiDispatchContext = createContext(null);

export const UiProvider = ({ children }) => {
  const [ui, dispatch] = useReducer(uiReducer, initialState)

  return(
    <UiContext.Provider value={ui}>
      <UiDispatchContext.Provider value={dispatch}>
        {children}
      </UiDispatchContext.Provider>
    </UiContext.Provider>
  )
}

const uiReducer = (ui, action) => {
  switch (action.type){
    case 'changedpage': {
      return {
				page: action.page,
				navslice: null,
        sections: ui.sections
			};
    }
    case 'togglenavslice': {
      return {
        page: ui.page,
        navslice: !ui.navslice,
        sections: ui.sections
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
