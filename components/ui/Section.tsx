import { type ReactNode } from 'react'

interface Props {
  id?: string
  children: ReactNode
  className?: string
  background?: 'white' | 'light' | 'dark' | 'primary'
}

const bgMap = {
  white: 'bg-white',
  light: 'bg-gray-light',
  dark: 'bg-gray-dark text-white',
  primary: 'bg-primary text-white',
}

export default function Section({ id, children, className = '', background = 'white' }: Props) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${bgMap[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
