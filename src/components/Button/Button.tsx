import React from 'react'

interface Props {
  children: React.ReactNode,
  variant?: 'success' | 'warning' | 'danger'
}

const Button = ({ children, variant = 'success' }: Props) => {
  return (
    <button className={`btn btn-${variant}`}>
      {children}
    </button>
  )
}

export default Button
