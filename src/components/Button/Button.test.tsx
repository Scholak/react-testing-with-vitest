import { screen, render } from '@testing-library/react'
import { describe } from 'vitest'
import Button from './Button'

it('should render Button component without crashing', () => {
	render(<Button>button</Button>)

	const buttonElement = screen.getByText(/button/i)

	expect(buttonElement).toBeInTheDocument()
})

describe('button variants', () => {
  it('should render Button component success variant', () => {
		render(<Button variant='success'>success button</Button>)

		const buttonElement = screen.getByText(/success button/i)

		expect(buttonElement).toBeInTheDocument()
	})

  it('should render Button component warning variant', () => {
		render(<Button variant='warning'>warning button</Button>)

		const buttonElement = screen.getByText(/warning button/i)

		expect(buttonElement).toBeInTheDocument()
	})

  it('should render Button component danger variant', () => {
		render(<Button variant='success'>danger button</Button>)

		const buttonElement = screen.getByText(/danger button/i)

		expect(buttonElement).toBeInTheDocument()
	})
})
