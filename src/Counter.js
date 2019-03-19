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

  return (
      <CounterBase>
        <div style={{ width: '100px' }}>{title}</div>
        <div style={{ width: '100px' }}>{price * amount}€</div>
        <CounterAction>
          <button style={{ fontSize: '20px' }}
                  onClick={() => amount > 0 && setAmount(amount - 1)}>Decrease
          </button>
          <span style={{ fontSize: '100px', padding: '0 20px' }}>{amount}</span>
          <button style={{ fontSize: '20px' }}
                  onClick={() => amount < 100 && setAmount(amount + 1)}>Increase
          </button>
          <div>The result to send to the server: {result}</div>
        </CounterAction>
      </CounterBase>
  )
}

export default Counter
