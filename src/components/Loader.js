import React from 'react'
import styled from 'styled-components'

const LoaderWrap = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;
  color: crimson;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`

export default function Loader() {
  return <LoaderWrap>
    <h1>Loading...</h1>
    <p>Please wait for the resource to load form the server</p>
  </LoaderWrap>
}
