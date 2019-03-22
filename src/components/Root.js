import React, { Fragment, lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'
import styled from 'styled-components'
import { Lost } from './Lost'
import Loader from './Loader'

const Tickets = lazy(() => import('./Tickets'))
const Packages = lazy(() => import('./Packages'))

const NavLinkStyled = styled(NavLink)`
  padding: 5px 10px;
`

function Root() {
  return (
      <main>
        <Router>
          <Fragment>
            <div>
              You are here:
              <NavLinkStyled to="/tickets">tickets</NavLinkStyled>
              <NavLinkStyled to="/">home</NavLinkStyled>
            </div>
            <Switch>
              <Suspense fallback={<Loader />}>
                <Route path='/' exact={true} component={Packages}/>
                <Route path='/tickets' component={Tickets}/>
              </Suspense>
              <Route component={Lost}/>
            </Switch>
          </Fragment>
        </Router>
      </main>
  )
}

export default Root
