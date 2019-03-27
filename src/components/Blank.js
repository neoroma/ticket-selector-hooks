import React from 'react'
import styled from 'styled-components'

const Wrap = styled.section`
  width: 75vw;
  height: 75vh;
  background: LIGHTYELLOW;
  display: flex;
  justify-content: center;
  align-items: center;
`

const OnTransition = styled.div`
  width: 100px;
  height: 100px;
  background-color: crimson;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s ease-out;
  cursor: pointer;
  border-radius: 50%;
  
  :hover {
    background-color: orangered;
    height: 105px;
    width: 105px;
  }
`

function Blank() {
  return (
      <Wrap>
        <OnTransition>
          cube
        </OnTransition>
      </Wrap>
  )
}

export default Blank
