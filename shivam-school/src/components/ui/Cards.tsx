import React from 'react'
import { clsx } from 'clsx'
import type { CardProps, BadgeProps } from '@/types'

// ─── Card ─────────────────────────────────────────────────────────────────────

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export const Card: React.FC<CardProps> = ({
  hover = false,
  shine = false,
  padding = 'md',
  className,
  style,
  children,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={style}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={clsx(
        'bg-white rounded-2xl border border-gray-100',
        'shadow-soft transition-all duration-300',
        paddingClasses[padding],
        hover && 'hover:shadow-card-hover hover:-translate-y-1 cursor-pointer',
        shine && 'shine overflow-hidden',
        onClick && 'cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-gold-400',
        className
      )}
    >
      {children}
    </div>
  )
}

// ─── Badge ────────────────────────────────────────────────────────────────────

const badgeVariantClasses = {
  navy: 'bg-navy-100 text-navy-800 border-navy-200',
  gold: 'bg-yellow-50 text-yellow-800 border-yellow-200',
  emerald: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  red: 'bg-red-50 text-red-700 border-red-200',
  purple: 'bg-purple-50 text-purple-800 border-purple-200',
  blue: 'bg-blue-50 text-blue-800 border-blue-200',
  orange: 'bg-orange-50 text-orange-800 border-orange-200',
}

const badgeSizeClasses = {
  sm: 'px-2 py-0.5 text-xs rounded-md',
  md: 'px-3 py-1 text-sm rounded-lg',
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'navy',
  size = 'md',
  dot = false,
  className,
  children,
}) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 font-semibold border',
        badgeVariantClasses[variant],
        badgeSizeClasses[size],
        className
      )}
    >
      {dot && (
        <span
          className={clsx('w-1.5 h-1.5 rounded-full flex-shrink-0', {
            'bg-navy-600': variant === 'navy',
            'bg-yellow-600': variant === 'gold',
            'bg-emerald-600': variant === 'emerald',
            'bg-red-600': variant === 'red',
            'bg-purple-600': variant === 'purple',
            'bg-blue-600': variant === 'blue',
            'bg-orange-600': variant === 'orange',
          })}
        />
      )}
      {children}
    </span>
  )
}

// ─── Spinner ──────────────────────────────────────────────────────────────────

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'navy' | 'gold' | 'white'
  className?: string
}

const spinnerSizeMap = { sm: 16, md: 24, lg: 40 }
const spinnerColorMap = {
  navy: 'text-navy-800',
  gold: 'text-gold-500',
  white: 'text-white',
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'navy',
  className,
}) => {
  const s = spinnerSizeMap[size]
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      className={clsx('animate-spin', spinnerColorMap[color], className)}
      aria-label="Loading"
      role="status"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.2" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

// ─── Divider ──────────────────────────────────────────────────────────────────

interface DividerProps {
  variant?: 'gold' | 'navy' | 'gray'
  align?: 'left' | 'center' | 'right'
  className?: string
}

export const Divider: React.FC<DividerProps> = ({
  variant = 'gold',
  align = 'center',
  className,
}) => {
  const colorMap = {
    gold: 'bg-gold-500',
    navy: 'bg-navy-800',
    gray: 'bg-gray-200',
  }
  const alignMap = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto',
  }
  return (
    <div
      className={clsx('w-16 h-1 rounded-full', colorMap[variant], alignMap[align], className)}
      aria-hidden="true"
    />
  )
}

// ─── Section Header ───────────────────────────────────────────────────────────

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  return (
    <div className={clsx('mb-12', align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <span className="inline-block text-sm font-bold uppercase tracking-widest text-gold-600 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="section-heading">{title}</h2>
      <Divider align={align === 'center' ? 'center' : 'left'} className="mt-4" />
      {subtitle && (
        <p className={clsx('mt-4 text-lg text-gray-600', align === 'center' && 'max-w-2xl mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

// ─── Toast ────────────────────────────────────────────────────────────────────

interface ToastItemProps {
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  onClose: () => void
}

const toastConfig = {
  success: { bg: 'bg-emerald-50 border-emerald-200', icon: '✅', text: 'text-emerald-800' },
  error: { bg: 'bg-red-50 border-red-200', icon: '❌', text: 'text-red-800' },
  warning: { bg: 'bg-yellow-50 border-yellow-200', icon: '⚠️', text: 'text-yellow-800' },
  info: { bg: 'bg-blue-50 border-blue-200', icon: 'ℹ️', text: 'text-blue-800' },
}

export const ToastItem: React.FC<ToastItemProps> = ({ type, title, message, onClose }) => {
  const config = toastConfig[type]
  return (
    <div
      className={clsx(
        'flex items-start gap-3 p-4 rounded-xl border shadow-card max-w-sm w-full',
        'animate-slide-up',
        config.bg
      )}
      role="alert"
    >
      <span className="text-xl flex-shrink-0" aria-hidden="true">{config.icon}</span>
      <div className="flex-1 min-w-0">
        <p className={clsx('font-semibold text-sm', config.text)}>{title}</p>
        {message && <p className="text-sm text-gray-600 mt-0.5">{message}</p>}
      </div>
      <button
        onClick={onClose}
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Close notification"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  )
}

// ─── Avatar ───────────────────────────────────────────────────────────────────

interface AvatarProps {
  initials: string
  colorClass?: string
  size?: 'sm' | 'md' | 'lg'
  src?: string
  alt?: string
}

const avatarSizes = { sm: 'w-8 h-8 text-xs', md: 'w-12 h-12 text-sm', lg: 'w-16 h-16 text-lg' }

export const Avatar: React.FC<AvatarProps> = ({
  initials,
  colorClass = 'bg-navy-100 text-navy-800',
  size = 'md',
  src,
  alt,
}) => {
  if (src) {
    return (
      <img
        src={src}
        alt={alt || initials}
        className={clsx('rounded-full object-cover flex-shrink-0', avatarSizes[size])}
      />
    )
  }
  return (
    <div
      className={clsx(
        'rounded-full flex items-center justify-center font-bold flex-shrink-0',
        colorClass,
        avatarSizes[size]
      )}
      aria-label={alt || initials}
    >
      {initials}
    </div>
  )
}

// ─── StarRating ───────────────────────────────────────────────────────────────

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: number
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 16,
}) => {
  return (
    <div className="flex gap-0.5" aria-label={`Rating: ${rating} out of ${maxRating}`}>
      {Array.from({ length: maxRating }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < rating ? '#D4A017' : 'none'}
          stroke={i < rating ? '#D4A017' : '#D1D5DB'}
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  )
}
