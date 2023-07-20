import { useQuery } from 'react-query'
import { Todo } from '../../types/todo-types'
import { fetchTodos } from '../../services/todoService'

const FetchTodos = () => {
  const { data: todos, isLoading } = useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: fetchTodos
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Todos</h1>
      {todos?.map((todo: Todo) => (
        <div key={todo.id}>
          <p>{todo.id} - {todo.title}</p>
          <span>completed: {todo.comleted}</span>
        </div>
      ))}
    </div>
  )
}

export default FetchTodos
