import React from 'react'
import styled from 'styled-components'

const Wrap = styled.section`
  width: 75vw;
  height: 75vh;
  background: LIGHTYELLOW;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 500px;
`

const OnTransition = styled.div`
  width: 100px;
  height: 100px;
  background-color: crimson;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  transition: transform 1s;
  //transform-origin: 0;
  
  :hover {
    //transform: translateX(-10%);
    //transform: scale(.8);
    //transform: rotate(90deg);
    //transform: skew(-20deg);

    transform: rotate(80deg);
    //transform: translateZ(100px);
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
