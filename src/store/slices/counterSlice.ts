import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  counter: 0
}

export const counterReducer = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		reset: (state) => {
			state.counter = 0
		},
		increment: (state) => {
      state.counter++
    },
		decrement: (state) => {
      state.counter--
    },
		incrementByValue: (state, action: PayloadAction<number>) => {
			state.counter += action.payload
		}
	},
})

export const { reset, increment, decrement, incrementByValue } = counterReducer.actions 

export default counterReducer.reducer