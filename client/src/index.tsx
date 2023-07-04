// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(<Main />)

import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App'
import React from 'react'

createRoot(document.getElementById('root') as HTMLElement).render(<App />)
