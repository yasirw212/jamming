import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {SpotifyContextProvider} from './context/context'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <SpotifyContextProvider>
      <App />
    </SpotifyContextProvider>
  // </React.StrictMode>,
)
