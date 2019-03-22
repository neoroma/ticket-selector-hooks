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

// import Tickets from './Tickets'
// import Packages from './Packages'
// import Blank from './Blank'

const Tickets = lazy(() => import('./Tickets'))
const Packages = lazy(() => import('./Packages'))
const Blank = lazy(() => import('./Blank'))

const NavLinkStyled = styled(NavLink)`
  padding: 5px 10px;
`

function Root() {
  return (
      <main>
        <Router>
          <Route render={({ location }) => (
              <Fragment>
                <div>
                  You are here:
                  <NavLinkStyled to="/tickets">tickets</NavLinkStyled>
                  <NavLinkStyled to="/">home</NavLinkStyled>
                  <NavLinkStyled to="/blank">blank</NavLinkStyled>
                </div>
                <Suspense fallback={<Loader/>}>
                  <Switch location={location}>
                    <Route path='/' exact={true} component={Packages}/>
                    <Route path='/tickets' component={Tickets}/>
                    <Route path='/blank' component={Blank}/>
                    <Route component={Lost}/>
                  </Switch>
                </Suspense>
              </Fragment>
          )}/>
        </Router>
      </main>
  )
}

export default Root
