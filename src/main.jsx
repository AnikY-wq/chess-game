import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import RoutingComponent from './pages/RoutingComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutingComponent />
  </StrictMode>,
)
