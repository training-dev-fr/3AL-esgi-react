import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DarkmodeContext, DarkmodeContextProvider } from './Context/darkmodeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkmodeContextProvider>
      <App />
    </DarkmodeContextProvider>
  </StrictMode>,
)
