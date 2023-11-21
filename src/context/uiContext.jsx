import { createContext, useReducer } from 'react'
import { sectionList } from '../constants/sections'

const initialState = {
  page: sectionList.nav.home,
  navslice: null,
  userslice: null,
  sections: sectionList
}

export const UiContext = createContext(null)
export const UiDispatchContext = createContext(null)

export const UiProvider = ({ children }) => {
  const [ui, dispatch] = useReducer(uiReducer, initialState)

  function changePage (page) {
    dispatch({
      type: 'changedpage',
      payload: {
        page
      }
    })
  }
  function toggleNavSlice () {
    dispatch({
      type: 'togglenavslice'
    })
  }
  function toggleUserSlice () {
    dispatch({
      type: 'toggleuserslice'
    })
  }

  const value = {
    ui,
    changePage,
    toggleNavSlice,
    toggleUserSlice
  }

  return (
    <UiContext.Provider value={value}>
      <UiDispatchContext.Provider value={dispatch}>
        {children}
      </UiDispatchContext.Provider>
    </UiContext.Provider>
  )
}

const uiReducer = (ui, action) => {
  const { type, payload } = action

  switch (type) {
    case 'changedpage': {
      return {
        page: payload.page,
        navslice: null,
        userslice: null,
        sections: ui.sections
      }
    }
    case 'togglenavslice': {
      return {
        page: ui.page,
        navslice: !ui.navslice,
        userslice: ui.userslice,
        sections: ui.sections
      }
    }
    case 'toggleuserslice': {
      return {
        page: ui.page,
        navslice: ui.navslice,
        userslice: !ui.userslice,
        sections: ui.sections
      }
    }
    default: {
      throw Error('Unknown action: ' + type)
    }
  }
}
