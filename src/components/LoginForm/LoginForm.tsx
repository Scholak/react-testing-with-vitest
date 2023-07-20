import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '../../validations/loginSchema'
import { ILoginSchema } from '../../types/form-types'

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginSchema>({
    resolver: zodResolver(loginSchema)
  })
  
  const onSubmit = (data: ILoginSchema) => {
    alert(JSON.stringify(data))
  }

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' {...register('email')} />
          {errors.email && <p style={{color: '#ff0000000'}}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' {...register('password')} />
          {errors.password && <p style={{color: '#ff0000000'}}>{errors.password.message}</p>}
        </div>
        <div>
          <button type='submit'>login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
