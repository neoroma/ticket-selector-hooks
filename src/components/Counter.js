import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const CounterBase = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  @media (max-width: 400px) {
    padding: 5px;
    width: 95%;
    flex-direction: column;
  }
`

const CounterAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 500px;
  flex-grow: 2;
  
  @media (max-width: 400px) {
    width: 100%;
    flex-direction: row;
    flex-basis: 100px;
  }
`

const DebugInfo = styled.div`
   @media (max-width: 400px) {
    display: none;
  }
`

const Amount = styled.span`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  font-size: 75px;
  padding: 0 20px;
`

const Title = styled.div`
  flex-basis: 100px;
  flex-grow: 1;
`

const Counter = ({ price = 0, setPrice, title = '' }) => {

  const [amount, setAmount] = useState(0)
  const [result, setResult] = useState(0)

  useEffect(() => {
    setPrice(price * amount)
  }, [amount])

  useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval)
      setResult(amount)
    }, 2500)

    return () => clearInterval(interval)
  }, [amount])

  const dec = () => amount > 0 && setAmount(amount - 1)
  const inc = () => amount < 100 && setAmount(amount + 1)

  return (
      <CounterBase>
        <Title>{title} ({price * amount}€)</Title>
        <CounterAction>
          <button onClick={dec}>decrease</button>
          <Amount>{amount}</Amount>
          <button onClick={inc}>increase</button>
          <DebugInfo>The result to send to the server: {result}</DebugInfo>
        </CounterAction>
      </CounterBase>
  )
}

export default Counter
