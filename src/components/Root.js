import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Tickets from './Tickets'
import Packages from './Packages'
import { Lost } from './Lost'

function Root() {
  return (
      <main>
        <Router>
          <Fragment>
            <div>
              You are here:
            </div>
            <Switch>
              <Route path='/' exact={true} component={Packages}/>
              <Route path='/tickets' component={Tickets}/>
              <Route component={Lost}/>
            </Switch>
          </Fragment>
        </Router>
      </main>
  )
}

export default Root
