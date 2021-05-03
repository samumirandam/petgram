import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Datail } from './pages/Datail'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Logo />
        <Switch>
          <Route path='/pet/:id' component={Home} />
          <Route path='/detail/:id' component={Datail} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
