/*
 * @Author: sheng
 * @Date: 2021-01-22 11:20:45
 * @LastEditTime: 2021-01-22 11:36:16
 * @FilePath: /reactlearn/src/index.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals()

serviceWorker.register()
