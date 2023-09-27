import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { AuthProvider } from './context/authContext'
import { UiProvider } from './context/uiContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <UiProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UiProvider>
    </AuthProvider>
  </React.StrictMode>
)
