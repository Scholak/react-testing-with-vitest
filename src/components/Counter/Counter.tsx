import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState<number>(0)

  const handleIncrement = () => {
    setCounter(counter+1)
  }

  return (
		<div>
			<p>{counter}</p>
      <button onClick={handleIncrement}>increment</button>
		</div>
	)
}

export default Counter
