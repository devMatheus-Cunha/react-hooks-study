import React, { useState } from 'react'

export default function UseState() {
  // state
  const [counter, setCounter] = useState(0)

  //! way one to be made
  function handlePlusOne(){
    setTimeout(() => {
      setCounter(counter + 1)
    }, 2000);
  }
  function handleMinusOne(){
    setTimeout(() => {
      setCounter(counter - 1)
    }, 2000);
  }
  
  //! way two to be done
  //this way is more useful because if you click twice quickly it will count the two clicks unlike the way above 
  function handlePlusTwo(){
    setTimeout(() => {
      setCounter((prevState) => prevState + 1)
    }, 2000);
  }

  function handleMinusTwo(){
    setTimeout(() => {
      setCounter((prevState) => prevState + 1)
    }, 2000);
  }


  return (
    <div>
      <h1>{counter}</h1>
      {/* <button onClick={handlePlusOne}>+</button> */}
      {/* <button onClick={handleMinusOne}>-</button> */}
      <button onClick={handlePlusTwo}>+</button>
      <button onClick={handleMinusTwo}>-</button>
    </div>
  )
}
