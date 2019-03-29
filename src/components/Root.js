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
const Aligns = lazy(() => import('./Aligns'))

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
    content: '🎃';
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
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: wrap;
  margin-bottom: 1em;
`

const NavWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
`

const NavItem = styled(NavLink)`
  font-family: 'Dosis', 'DejaVu Sans Mono', monospace;
  text-decoration: none;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 160px;
  padding: 5px;
  :nth-child(even){
    background: beige;
  }
  display: flex;
  color: olivedrab;
  
  transition: all .7s ease;
  
  :hover {
    background: greenyellow;
  }
`

const IconDiv = styled.div`
  flex-basis: 40px;
  font-size: 25px;
`

const TextDiv = styled.div`
  font-size: 18px;
  font-weight: bolder;
  span{
    font-size: 12px;
    font-weight: lighter;
    display: block;
  }
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
                <NavWrap>
                  <NavItem to="/">
                    <IconDiv>🏠</IconDiv>
                    <TextDiv>First page
                      here<span>more text here</span></TextDiv>
                  </NavItem>
                  <NavItem to="/tickets">
                    <IconDiv>🎫</IconDiv>
                    <TextDiv>Select types of tickets<span>more text here</span></TextDiv>
                  </NavItem>
                  <NavItem to="/blank">
                    <IconDiv>👾</IconDiv>
                    <TextDiv>Just a blank
                      area<span>more text here</span></TextDiv>
                  </NavItem>
                  <NavItem to="/bank">
                    <IconDiv>👾</IconDiv>
                    <TextDiv>Bank operation<span>more text here</span></TextDiv>
                  </NavItem>
                  <NavItem to="/front">
                    <IconDiv>👾</IconDiv>
                    <TextDiv>Front page
                      specs<span>more text here</span></TextDiv>
                  </NavItem>
                  <NavItem to="/face">
                    <IconDiv>🙀</IconDiv>
                    <TextDiv>Face off<span>more text here</span></TextDiv>
                  </NavItem>
                </NavWrap>
                <Suspense fallback={<Loader/>}>
                  <Switch location={location}>
                    <Route path='/' exact={true} component={Packages}/>
                    <Route path='/tickets' component={Tickets}/>
                    <Route path='/blank' component={Blank}/>
                    <Route path='/bank' component={Aligns}/>
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
