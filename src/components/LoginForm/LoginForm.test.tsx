import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from './LoginForm'

it('should display "required" error messages when inputs are empty', async () => {
  const user = userEvent.setup()
  render(<LoginForm />)
  
  const submitButton = screen.getByRole('button')

  await user.click(submitButton)

  const emailError = await screen.findByText(/Email field is required/i)
  const passwordError = await screen.findByText(/Password field is required/i)

  expect(emailError).toBeInTheDocument()
  expect(passwordError).toBeInTheDocument()
})

it('should display "email" error of email, "min" error of password', async () => {
  const user = userEvent.setup()
  render(<LoginForm />)

  const emailInput = screen.getByLabelText('Email')
  const passwordInput = screen.getByLabelText('Password')
  const submitButton = screen.getByRole('button')

  await user.type(emailInput, 'invalid@i')
  await user.type(passwordInput, '12345')
  await user.click(submitButton)

  const emailError = await screen.findByText(/Email must be valid/i)
  const passwordError = await screen.findByText(/Password must be at least 6 characters/i)

  expect(emailError).toBeInTheDocument()
  expect(passwordError).toBeInTheDocument()
})

it('should pass validation after successfull login request', async () => {
  const user = userEvent.setup()
  render(< LoginForm/>)

  const emailInput = screen.getByLabelText('Email')
	const passwordInput = screen.getByLabelText('Password')
	const submitButton = screen.getByRole('button')

	await user.type(emailInput, 'valid@valid.com')
	await user.type(passwordInput, '123456')
	await user.click(submitButton)

  const emailRequiredError = screen.queryByText(/Email field is required/i)
	const passwordRequiredError = screen.queryByText(/Password field is required/i)
  const emailInvalidError = screen.queryByText(/Email must be valid/i)
  const passwordMinError = screen.queryByText(/Password must be at least 6 characters/i)

  expect(emailRequiredError).not.toBeInTheDocument()
  expect(passwordRequiredError).not.toBeInTheDocument()
  expect(emailInvalidError).not.toBeInTheDocument()
	expect(passwordMinError).not.toBeInTheDocument()
})