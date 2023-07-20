import { render, screen } from '@testing-library/react'

import App from './App'

it('hould render App component', () => {
  render(<App />)

  const result = screen.getByText('hi')

  expect(result).toBeInTheDocument()
})
