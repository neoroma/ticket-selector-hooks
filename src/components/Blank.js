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
    transform: scale(.8);
    //transform: rotate(90deg);
    //transform: skew(-20deg);

    //transform: rotate(80deg);
    //transform: translateZ(100px);
  }
`
const OnTransitionTwo = styled.section`
   font-family: 'Dosis', 'DejaVu Sans Mono', monospace;
   margin-left: 25px;
   display: flex;
   
   a {
    text-decoration: none;
    color: black;
    border: 5px solid black;
    font-size: 45px;
    padding: 40px 80px;
    font-weight: bold;
    position: relative;
    overflow: auto;
    transition: color .5s;
   }
   
   a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    height: 100%;
    width: 100%;
    z-index: -1;
    transform-origin: bottom left;
    transform: translateX(-100%);
    transition: transform .5s;
   }
   
   a:hover::before {
      transform: translateX(0);
   }
   
   a:hover {
      color: white;
   }
`

function Blank() {
  return (
      <Wrap>
        <OnTransition>
          cube
        </OnTransition>
        <OnTransitionTwo>
          <a href="#">Hover me long long text here</a>
        </OnTransitionTwo>
      </Wrap>
  )
}

export default Blank
