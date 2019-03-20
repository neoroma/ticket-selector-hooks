import React, { useState, useEffect } from 'react'
import { sum } from 'ramda'
import styled, { keyframes } from 'styled-components'
import './App.css'
import Counter from './Counter'

const backgroundOpacity = keyframes`
  from {
    background: rgba(66, 196, 255, 1);
  }

  to {
    background: rgba(66, 196, 255, .1);
  }
`;

const StatusLbl = styled.span`
 font-family: "Helvetica Neue";
 padding: 10px 10px;
 margin: 0 5px;
 border: 1px solid greenyellow;
 border-radius: 3px;
 color: #282c34;
`

const ActiveStatusLbl = styled(StatusLbl)`
 font-family: "Helvetica Neue";
 padding: 5px 5px;
 margin: 0 5px;
 border: 1px solid greenyellow;
 border-radius: 3px;
 background: #282c34;
 color: greenyellow;
 animation: ${backgroundOpacity} 3s linear infinite;
`

const PriceLbl = styled.div`
  margin-top: 40px;
  font-family: "Roboto";
  color: #282c34;
  font-weight: bold;
  font-size: x-large;
`

const Status = ({ isIdle }) => {
  if (isIdle) {
    return <StatusLbl>idle</StatusLbl>
  }
  return <ActiveStatusLbl>active</ActiveStatusLbl>

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
        <Counter title="adult ⓧ 10€" price={10} setPrice={setAdultPrice}/>
        <Counter title="teenager ⓧ 7€" price={7} setPrice={setTeenPrice}/>
        <Counter title="child ⓧ 2€" price={2} setPrice={setChildPrice}/>
        <PriceLbl style={{ color: isIdle ? 'darkblue' : 'greenyellow' }}>Total price: {total}€ <Status isIdle={isIdle}/></PriceLbl>
      </div>
  )
}

export default App
