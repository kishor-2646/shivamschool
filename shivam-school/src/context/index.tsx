import React, { createContext, useContext, useState, useCallback } from 'react'
import { ToastItem } from '@/components/ui'
import { Modal } from '@/components/ui'
import type { Toast, ToastContextValue, ModalContextValue, ModalProps } from '@/types'

// ─── Toast Context ────────────────────────────────────────────────────────────

const ToastContext = createContext<ToastContextValue | null>(null)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
    const newToast: Toast = { ...toast, id }
    setToasts((prev) => [...prev, newToast])
    const duration = toast.duration ?? 4500
    if (duration > 0) {
      setTimeout(() => removeToast(id), duration)
    }
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      {/* Toast container */}
      <div
        aria-live="polite"
        aria-atomic="false"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex flex-col gap-3 items-center pointer-events-none"
        style={{ width: 'min(calc(100vw - 2rem), 400px)' }}
      >
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto w-full">
            <ToastItem
              type={toast.type}
              title={toast.title}
              message={toast.message}
              onClose={() => removeToast(toast.id)}
            />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToastContext = (): ToastContextValue => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToastContext must be used within <ToastProvider>')
  return ctx
}

// ─── Modal Context ────────────────────────────────────────────────────────────

interface ModalState {
  isOpen: boolean
  content: React.ReactNode
  title?: string
  size?: ModalProps['size']
}

const ModalContext = createContext<ModalContextValue | null>(null)

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ModalState>({
    isOpen: false,
    content: null,
    title: undefined,
    size: 'md',
  })

  const openModal = useCallback(
    (content: React.ReactNode, options?: { title?: string; size?: ModalProps['size'] }) => {
      setState({ isOpen: true, content, title: options?.title, size: options?.size ?? 'md' })
    },
    []
  )

  const closeModal = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: false }))
  }, [])

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal
        isOpen={state.isOpen}
        onClose={closeModal}
        title={state.title}
        size={state.size}
      >
        {state.content}
      </Modal>
    </ModalContext.Provider>
  )
}

export const useModalContext = (): ModalContextValue => {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModalContext must be used within <ModalProvider>')
  return ctx
}

// ─── Combined App Provider ────────────────────────────────────────────────────

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ToastProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </ToastProvider>
  )
}
