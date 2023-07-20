import { ResponseComposition, RestContext, RestRequest, rest } from 'msw'
import { mockTodos } from '../data/todos'

export const exampleHandler = [
  rest.get(`${import.meta.env.VITE_BASE_URL}/todos`, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
    return res(ctx.status(200), ctx.json(mockTodos))
  })
]