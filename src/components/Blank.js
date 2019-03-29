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
   font-family: 'Dosis', 'Helvetica Neue', monospace;
   margin-left: 25px;
   display: flex;
   
   a {
    text-decoration: none;
    color: black;
    border: 5px solid black;
    font-size: 32px;
    padding: 20px 30px;
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
    //transform-origin: bottom left;
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

const AnotherTransition = styled.section`
   font-family: 'Dosis', 'Helvetica Neue', monospace;
   margin-left: 25px;
   display: flex;
   
   a {
    text-decoration: none;
    color: black;
    border: 5px solid orangered;
    font-size: 25px;
    padding: 15px 25px;
    font-weight: bold;
    letter-spacing: 2px;
    position: relative;
    overflow: hidden;
    transition: .5s;
   }
   
   a::before {
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: orangered;
    transition: .5s;
    transform: rotateX(90deg);
    z-index: -1;
   }
   
   a:hover::before {
    transform: rotateX(0);
   }
   
`

function Blank() {
  return (
      <Wrap>
        <OnTransition>
          cube
        </OnTransition>
        <OnTransitionTwo>
          <a href="#">This is just a text</a>
        </OnTransitionTwo>
        <AnotherTransition>
          <a href="#">rotate x</a>
        </AnotherTransition>
      </Wrap>
  )
}

export default Blank
