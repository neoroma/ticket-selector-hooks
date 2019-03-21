import React from 'react'
import { Link } from 'react-router-dom'

export function Lost({ location: { pathname } }) {
  return (
      <section>
        <h1>404 Not Found</h1>
        You are lost, there is nothing here <pre>{pathname}</pre>
        <div><Link to="/">Start again</Link></div>
      </section>
  )
}
