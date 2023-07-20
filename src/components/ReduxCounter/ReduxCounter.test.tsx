import { screen, render } from '@testing-library/react'
import ReduxCounter from './ReduxCounter'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import { reset } from '../../store/slices/counterSlice'

describe('redux counter tests', () => {
  beforeEach(() => {
    store.dispatch(reset())
    render(<ReduxCounter />, {
			wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
		})
  })

  it('should display counter value', async () => {
    const counterElement = await screen.findByText('0')

    expect(counterElement).toBeInTheDocument()
    expect(counterElement).toHaveTextContent('0')
  })

  it('should increment counter value when increment button clicked', async () => {
    const incrementButton = await screen.findByText('increment')

    await userEvent.click(incrementButton)

    const counterElement = await screen.findByText('1')

    expect(counterElement).toBeInTheDocument()
  })

  it('should decrement counter value when decrement button clicked', async () => {
		const decrement = await screen.findByText('decrement')

		await userEvent.click(decrement)

		const counterElement = await screen.findByText('-1')

		expect(counterElement).toBeInTheDocument()
	})

  it('should increment counter value by given number when increment by value button clicked', async () => {
    const inputElement = await screen.findByRole('spinbutton')
		const incrementByValueButton = await screen.findByText('increment by 0')

    await userEvent.type(inputElement, '10')
		await userEvent.click(incrementByValueButton)

		const counterElement = await screen.findByText('10')

		expect(counterElement).toBeInTheDocument()
	})

  it('should reset counter value when reset button clicked', async () => {
    // initial definitions
    const counterElement = await screen.findByText('0')
    const resetButton = await screen.findByText('reset counter value')
    const incrementButton = await screen.findByText('increment')
    expect(counterElement).toBeInTheDocument()

    // change counter value to 1
    await userEvent.click(incrementButton)
    const updatedCounterElement = await screen.findByText('1')
    expect(updatedCounterElement).toBeInTheDocument()

    // reset the counter value
    await userEvent.click(resetButton)
    const resettedCounterElement = await screen.findByText('0')
    expect(resettedCounterElement).toBeInTheDocument()
  })
})