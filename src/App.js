import React, { useState, useEffect } from 'react'
import { sum } from 'ramda'
import './App.css'
import Counter from './Counter'

const Status = ({ isIdle }) => {
  if (isIdle) {
    return <span style={{
      color: 'navy',
      background: 'white',
      padding: '5px 5px',
    }}>idle</span>
  }
  return <span style={{
    color: 'lime',
    background: 'navy',
    padding: '5px 5px',
  }}>active</span>

}

const App = () => {

  const [adultPrice, setAdultPrice] = useState(0)
  const [teenPrice, setTeenPrice] = useState(0)
  const [childPrice, setChildPrice] = useState(0)

  const total = sum([adultPrice, teenPrice, childPrice])
  const [isIdle, setIdle] = useState(true)

  useEffect(() => {
    setIdle(total === 0)
    const interval = setInterval(() => {
      clearInterval(interval)
      setIdle(true)
    }, 3000)

    return () => clearInterval(interval)
  }, [adultPrice, childPrice, teenPrice])

  return (
      <div className="App">
        <div style={{
          fontWight: 'bolder',
          fontSize: '18px',
          color: isIdle ? 'blue' : 'green',
        }}>total price: {total}€ <Status isIdle={isIdle}/></div>
        <Counter title="adult ⓧ 10€" price={10} setPrice={setAdultPrice}/>
        <Counter title="teenager ⓧ 7€" price={7} setPrice={setTeenPrice}/>
        <Counter title="child ⓧ 2€" price={2} setPrice={setChildPrice}/>
      </div>
  )
}

export default App
