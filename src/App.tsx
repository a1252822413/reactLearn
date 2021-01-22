/*
 * @Author: sheng
 * @Date: 2021-01-22 11:20:45
 * @LastEditTime: 2021-01-22 13:56:09
 * @FilePath: /reactlearn/src/App.tsx
 */
import React from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router/index'
import './App.css'
const App: React.FC = () => {
  return (
    <Router>
      {renderRoutes(routes)}
      <Redirect from='/' to='/index' />
    </Router>
  )
}

export default App
