import { useState, useContext, createContext, useReducer } from "react";

const initialState = {
  page: 'home',
  navslice: null
}

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
				navslice: null
			};
    }
    case 'togglenavslice': {
      return {
        page: ui.page,
        navslice: !ui.navslice
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
