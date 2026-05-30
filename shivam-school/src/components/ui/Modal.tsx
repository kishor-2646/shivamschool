import React, { useEffect, useRef } from 'react'
import { clsx } from 'clsx'
import type { ModalProps } from '@/types'

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-full mx-4',
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  size = 'md',
  children,
  showCloseButton = true,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement
      document.body.style.overflow = 'hidden'
      setTimeout(() => dialogRef.current?.focus(), 50)
    } else {
      document.body.style.overflow = ''
      previousFocusRef.current?.focus()
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Dialog'}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        className={clsx(
          'relative w-full bg-white rounded-2xl shadow-hero',
          'flex flex-col max-h-[90vh]',
          'animate-slide-up',
          sizeClasses[size]
        )}
        style={{ outline: 'none' }}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-6 border-b border-gray-100 flex-shrink-0">
            {title && (
              <h2 className="text-xl font-bold text-navy-800 font-display">{title}</h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className={clsx(
                  'p-2 rounded-xl transition-colors duration-200',
                  'text-gray-400 hover:text-gray-700 hover:bg-gray-100',
                  'focus-visible:ring-2 focus-visible:ring-navy-300',
                  !title && 'ml-auto'
                )}
                aria-label="Close dialog"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
