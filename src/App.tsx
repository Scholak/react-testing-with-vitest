import { Provider } from 'react-redux'
import { store } from './store/store'
import { Button, LoginForm, ReduxCounter } from './components'
import Counter from './components/Counter/Counter'
import { QueryClient, QueryClientProvider } from 'react-query'
import FetchTodos from './components/FetchTodos/FetchTodos'

export const client = new QueryClient()

const App = () => {
  return (
		<Provider store={store}>
			<QueryClientProvider client={client}>
				<p>hi</p>
				<Button variant='success'>success button</Button>
				<Counter />
				<ReduxCounter />
				<LoginForm />
				<FetchTodos />
			</QueryClientProvider>
		</Provider>
	)
}

export default App
