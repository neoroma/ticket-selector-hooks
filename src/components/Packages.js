import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Promotions = styled.div`
  display: flex;
  flex-direction: column;
`

const PromoLink = styled(Link)`
  padding: 1em;
`

function Packages() {
  return (
      <section>
        Please select route form the list
        <Promotions>
          <PromoLink to="/package/sp1">route1</PromoLink>
          <PromoLink to="/package/sp2">route2</PromoLink>
          <PromoLink to="/package/sp3">route3</PromoLink>
          <PromoLink to="/package/sp4">route4</PromoLink>
          <PromoLink to="/package/sp5">route5</PromoLink>
        </Promotions>
      </section>
  )
}

export default Packages
