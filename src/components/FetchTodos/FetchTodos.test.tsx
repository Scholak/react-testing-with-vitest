import { screen, render, waitFor } from '@testing-library/react'
import { client } from '../../App'
import { QueryClientProvider } from 'react-query'
import { describe } from 'vitest'
import { server } from '../../mock/server'
import FetchTodos from './FetchTodos'

describe('<FetchTodos /> tests', () => {
  beforeAll(() => server.listen())

  beforeEach(() => {
    render(<FetchTodos />, {
			wrapper: ({ children }) => (
				<QueryClientProvider client={client}>{children}</QueryClientProvider>
			),
		})
  })

	afterEach(() => {
    server.resetHandlers()
  })

	afterAll(() => server.close())

  it('should render <FetchTodos /> component without crashing', async () => {
    const firstTodoTitle = await screen.findByText('1 - delectus aut autem')

    expect(firstTodoTitle).toBeInTheDocument()
  })
})