import { ZodType, z } from 'zod'
import { ILoginSchema } from '../types/form-types'

const errors = {
  email: {
    required: 'Email field is required',
    email: 'Email must be valid'
  },
  password: {
    required: 'Password field is required',
    min: 'Password must be at least 6 characters'
  }
}

export const loginSchema: ZodType<ILoginSchema> = z.object({
  email: z.string().nonempty(errors.email.required).email(errors.email.email),
  password: z.string().nonempty(errors.password.required).min(6, errors.password.min)
})