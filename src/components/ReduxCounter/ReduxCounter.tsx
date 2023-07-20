import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByValue, reset } from '../../store/slices/counterSlice'
import { RootState } from '../../store/store'
import { useState } from 'react'


const ReduxCounter = () => {
  const dispatch = useDispatch()

  const counter = useSelector((state: RootState) => state.counter.counter)

  const [value, setValue] = useState<number>(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.valueAsNumber)
  }

  const handleReset = () => {
    dispatch(reset())
  }

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleIncrementByValue = () => {
    dispatch(incrementByValue(value))
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleReset}>reset counter value</button>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <div>
        <input type="number" defaultValue={0} onChange={handleChange} />
        <button onClick={handleIncrementByValue}>increment by {value}</button>
      </div>
    </div>
  )
}

export default ReduxCounter
