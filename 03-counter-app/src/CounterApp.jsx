import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({value}) => {
  
  const [ counter, setCounter ] = useState(value)

  function handleApp(event){
    // console.log(event)
    setCounter( counter+1 )
  }
  function handleSubstract(event){
    // console.log(event)
    setCounter( counter-1 )
  }
  function handleReset(event){
    // console.log(event)
    setCounter(value)
  }
  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={handleApp}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button aria-label='btn-reset' onClick={handleReset}>Reset</button>
    </>
  )
}

CounterApp.protoType={
  value:PropTypes.number.isRequired
}
CounterApp.defaultProps={
  value:0
}
