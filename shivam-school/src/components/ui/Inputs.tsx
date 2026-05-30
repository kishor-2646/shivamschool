import React, { forwardRef } from 'react'
import { clsx } from 'clsx'
import type { InputProps, TextareaProps, SelectProps } from '@/types'

// ─── Input ────────────────────────────────────────────────────────────────────

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, leftIcon, rightIcon, fullWidth = true, className, id, ...rest }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    return (
      <div className={clsx('flex flex-col gap-1', fullWidth && 'w-full')}>
        {label && (
          <label htmlFor={inputId} className="form-label">
            {label}
            {rest.required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <span className="absolute left-3 text-gray-400 flex-shrink-0 pointer-events-none" aria-hidden="true">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={clsx(
              'form-input',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              error && '!border-red-400 !ring-red-100',
              className
            )}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            {...rest}
          />
          {rightIcon && (
            <span className="absolute right-3 text-gray-400 flex-shrink-0 pointer-events-none" aria-hidden="true">
              {rightIcon}
            </span>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="form-error" role="alert">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
            </svg>
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-xs text-gray-500 mt-0.5">
            {hint}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

// ─── Textarea ─────────────────────────────────────────────────────────────────

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, fullWidth = true, className, id, rows = 4, ...rest }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    return (
      <div className={clsx('flex flex-col gap-1', fullWidth && 'w-full')}>
        {label && (
          <label htmlFor={inputId} className="form-label">
            {label}
            {rest.required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          className={clsx(
            'form-input resize-none',
            error && '!border-red-400 !ring-red-100',
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          {...rest}
        />
        {error && (
          <p id={`${inputId}-error`} className="form-error" role="alert">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
            </svg>
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-xs text-gray-500 mt-0.5">{hint}</p>
        )}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

// ─── Select ───────────────────────────────────────────────────────────────────

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, hint, options, placeholder, fullWidth = true, className, id, ...rest }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    return (
      <div className={clsx('flex flex-col gap-1', fullWidth && 'w-full')}>
        {label && (
          <label htmlFor={inputId} className="form-label">
            {label}
            {rest.required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            className={clsx(
              'form-input appearance-none pr-10 cursor-pointer',
              error && '!border-red-400 !ring-red-100',
              className
            )}
            aria-invalid={!!error}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </div>
        {error && (
          <p id={`${inputId}-error`} className="form-error" role="alert">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
            </svg>
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-xs text-gray-500 mt-0.5">{hint}</p>
        )}
      </div>
    )
  }
)
Select.displayName = 'Select'

// ─── Checkbox ─────────────────────────────────────────────────────────────────

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  description?: string
  error?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, error, className, id, ...rest }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className={clsx('flex items-start gap-3', className)}>
        <div className="relative flex items-center mt-0.5">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            className={clsx(
              'w-5 h-5 rounded border-2 cursor-pointer',
              'border-gray-300 bg-white',
              'checked:bg-navy-800 checked:border-navy-800',
              'focus:ring-2 focus:ring-navy-300 focus:ring-offset-1',
              'transition-colors duration-150',
              error && 'border-red-400'
            )}
            aria-invalid={!!error}
            {...rest}
          />
        </div>
        <div className="flex-1">
          <label htmlFor={inputId} className="text-sm font-medium text-gray-700 cursor-pointer leading-snug">
            {label}
          </label>
          {description && (
            <p className="text-xs text-gray-500 mt-0.5">{description}</p>
          )}
          {error && (
            <p className="form-error mt-1" role="alert">{error}</p>
          )}
        </div>
      </div>
    )
  }
)
Checkbox.displayName = 'Checkbox'

// ─── RadioGroup ───────────────────────────────────────────────────────────────

interface RadioOption {
  value: string
  label: string
  description?: string
}

interface RadioGroupProps {
  name: string
  label?: string
  options: RadioOption[]
  value?: string
  onChange?: (value: string) => void
  error?: string
  direction?: 'row' | 'col'
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  label,
  options,
  value,
  onChange,
  error,
  direction = 'col',
}) => {
  return (
    <fieldset>
      {label && (
        <legend className="form-label mb-3">{label}</legend>
      )}
      <div className={clsx('flex gap-3', direction === 'col' ? 'flex-col' : 'flex-row flex-wrap')}>
        {options.map((opt) => (
          <label
            key={opt.value}
            className={clsx(
              'flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all duration-150',
              value === opt.value
                ? 'border-navy-800 bg-navy-50'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            )}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange?.(opt.value)}
              className="mt-0.5 w-4 h-4 accent-navy-800"
            />
            <div>
              <span className="text-sm font-semibold text-gray-800">{opt.label}</span>
              {opt.description && (
                <p className="text-xs text-gray-500 mt-0.5">{opt.description}</p>
              )}
            </div>
          </label>
        ))}
      </div>
      {error && <p className="form-error mt-2" role="alert">{error}</p>}
    </fieldset>
  )
}
