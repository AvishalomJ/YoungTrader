import { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl shadow-md
        p-6
        border border-surface-200
        hover:shadow-lg transition-shadow duration-200
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
