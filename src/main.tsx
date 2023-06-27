import React from 'react'
import ReactDOM from 'react-dom/client'

// 初始化样式放在最前面
import "reset-css"
// UI样式

// 组件样式
import "@/assets/styles/global.scss"

import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
// import Router from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Router /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
