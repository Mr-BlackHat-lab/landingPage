import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Counter from './context/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter> 
      <App />
    </Counter>
  </StrictMode>,
)
