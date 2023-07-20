import { setupServer } from 'msw/node'
import { exampleHandler } from './handlers/exampleHandler'

export const server = setupServer(...exampleHandler)