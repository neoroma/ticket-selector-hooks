import React from 'react'
import styled from 'styled-components'

const Wrap = styled.main`
  font-family: 'Dosis', 'Helvetica Neue', monospace;
`

const WorkingArea = styled.div`
  background-color: aliceblue;
  height: 50vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  //align-content: center;
  flex-direction: column;
  
  transform: scale(.8);
  
  span {
    writing-mode: vertical-lr;
    flex: 1 0 auto;
    font-size: 22px;
    color: aliceblue;
    background-color: orangered;
  }
`

export default function Aligns() {
  return (
      <Wrap>
        <h1>Align Things In CSS</h1>

        <WorkingArea>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => <span key={n}>123{n}</span>)}
        </WorkingArea>

      </Wrap>
  )
}
