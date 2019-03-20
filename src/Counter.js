import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const CounterBase = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const CounterAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
`

const ActionButton = styled.button`
  font-size: 20px
`

const Amount = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 75px;
  padding: 0 20px;
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
        <div style={{ width: '160px' }}>{title}</div>
        <div style={{ width: '60px' }}>{price * amount}€</div>
        <CounterAction>
          <ActionButton onClick={dec}>Decrease</ActionButton>
          <Amount>{amount}</Amount>
          <ActionButton onClick={inc}>Increase</ActionButton>
          <div>The result to send to the server: {result}</div>
        </CounterAction>
      </CounterBase>
  )
}

export default Counter
