import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

const variantStyles = {
  primary:
    'bg-primary-500 hover:bg-primary-600 text-white shadow-md hover:shadow-lg',
  secondary:
    'bg-secondary-500 hover:bg-secondary-600 text-white shadow-md hover:shadow-lg',
  ghost:
    'bg-transparent hover:bg-gray-100 text-primary-600 border-2 border-primary-300',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm min-h-[2.25rem]',
  md: 'px-6 py-3 text-base min-h-[2.75rem]',
  lg: 'px-8 py-4 text-lg min-h-[3rem]',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-xl font-bold
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
