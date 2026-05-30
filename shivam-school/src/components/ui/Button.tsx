import React from 'react'
import { clsx } from 'clsx'
import type { ButtonProps } from '@/types'

const sizeClasses = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-3 text-base rounded-xl gap-2',
  lg: 'px-8 py-3.5 text-lg rounded-xl gap-2',
  xl: 'px-10 py-4 text-xl rounded-2xl gap-2.5',
}

const variantClasses = {
  primary: [
    'text-white font-semibold',
    'bg-gradient-to-br from-navy-800 to-navy-950',
    'hover:from-navy-700 hover:to-navy-800',
    'shadow-soft hover:shadow-card hover:-translate-y-0.5',
    'focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2',
    'active:translate-y-0 active:shadow-soft',
  ],
  gold: [
    'text-navy-900 font-semibold',
    'bg-gradient-to-br from-gold-500 to-gold-400',
    'hover:from-gold-400 hover:to-gold-300',
    'shadow-soft hover:shadow-glow hover:-translate-y-0.5',
    'focus-visible:ring-2 focus-visible:ring-navy-800 focus-visible:ring-offset-2',
    'active:translate-y-0',
  ],
  outline: [
    'text-navy-800 font-semibold',
    'bg-transparent border-2 border-navy-800',
    'hover:bg-navy-800 hover:text-white',
    'focus-visible:ring-2 focus-visible:ring-navy-800 focus-visible:ring-offset-2',
    'transition-all duration-200',
  ],
  ghost: [
    'text-navy-800 font-semibold',
    'bg-transparent',
    'hover:bg-navy-50',
    'focus-visible:ring-2 focus-visible:ring-navy-300 focus-visible:ring-offset-2',
  ],
  danger: [
    'text-white font-semibold',
    'bg-red-600',
    'hover:bg-red-700',
    'focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2',
    'shadow-soft hover:shadow-md hover:-translate-y-0.5',
  ],
}

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled = false,
  children,
  className,
  type = 'button',
  ...rest
}) => {
  const isDisabled = disabled || isLoading

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={clsx(
        'inline-flex items-center justify-center transition-all duration-200 font-body select-none',
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && 'w-full',
        isDisabled && 'opacity-60 cursor-not-allowed pointer-events-none',
        className
      )}
      {...rest}
    >
      {isLoading ? (
        <>
          <LoadingSpinner size={size} />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  )
}

const spinnerSizes = { sm: 14, md: 16, lg: 18, xl: 20 }

const LoadingSpinner: React.FC<{ size: ButtonSize }> = ({ size }) => {
  const s = spinnerSizes[size]
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      className="animate-spin"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

export default Button
