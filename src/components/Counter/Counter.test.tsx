import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Counter from './Counter'
import { describe } from 'vitest'

it('should increment counter value when increment button clicked', async () => {
  const user = userEvent.setup()
  render(<Counter />)

  await user.pointer({
		keys: '[MouseLeft]',
		target: screen.getByRole('button', { name: 'increment' }),
	})

  const counterElement = await screen.findByText('1')

  expect(counterElement).toHaveTextContent('1')
})

describe('accesibility', () => {
  it('should focus on increment button', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    const counterButton = screen.getByRole('button')

    await user.keyboard('[tab]')
    await user.keyboard('[enter]')

    const counterElement = await screen.findByText('1')

    expect(counterButton).toHaveFocus()
    expect(counterElement).toHaveTextContent('1')
  })
})