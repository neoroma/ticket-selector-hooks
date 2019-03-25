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
  flex: 1 1 0;
  text-transform: capitalize;
  text-align: center;
  background: coral;
  text-decoration: none;
  color: black;
  transition: all .5s ease;
  
  ::before {
    content: '🦉';
  }
  
  :hover {
    background: black;
    color: coral;
  }
`

const Flexr = styled.div`
  font-family: 'Dosis', 'DejaVu Sans Mono', monospace;
  height: 60px;
  width: 100%;
  border: 1px solid crimson;
  display: flex;
  flex-direction: row;
  font-size: 32px;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
`

function Root() {
  return (
      <main>
        <Router>
          <Route render={({ location }) => (
              <Fragment>
                <Flexr>
                  <NavLinkStyled to="/">home</NavLinkStyled>
                  <NavLinkStyled to="/tickets">tickets</NavLinkStyled>
                  <NavLinkStyled to="/blank">blank</NavLinkStyled>
                  <NavLinkStyled to="/bank">bank</NavLinkStyled>
                  <NavLinkStyled to="/front">front</NavLinkStyled>
                  <NavLinkStyled to="/face">face</NavLinkStyled>
                </Flexr>
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
