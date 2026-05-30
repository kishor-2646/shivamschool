import { useState, useEffect, useRef, useCallback } from 'react'

// ─── useScrollAnimation ───────────────────────────────────────────────────────
// Reveals elements when they enter the viewport

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

// ─── useCountUp ───────────────────────────────────────────────────────────────
// Animates a number from 0 to target when triggered

export function useCountUp(target: number, duration = 2000, trigger = true) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    setCount(0)
    const startTime = performance.now()

    const update = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(update)
    }

    const raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, trigger])

  return count
}

// ─── useLocalStorage ──────────────────────────────────────────────────────────

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore)
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore))
        }
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error)
      }
    },
    [key, storedValue]
  )

  return [storedValue, setValue] as const
}

// ─── useDebounce ──────────────────────────────────────────────────────────────

export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

// ─── useMediaQuery ────────────────────────────────────────────────────────────

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia(query)
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)
    mql.addEventListener('change', listener)
    return () => mql.removeEventListener('change', listener)
  }, [query])

  return matches
}

// ─── useWindowSize ────────────────────────────────────────────────────────────

export function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const update = () => setSize({ width: window.innerWidth, height: window.innerHeight })
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  return size
}

// ─── useToast ─────────────────────────────────────────────────────────────────

import type { Toast, ToastType } from '@/types'

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
    const newToast: Toast = { ...toast, id }
    setToasts((prev) => [...prev, newToast])

    const duration = toast.duration ?? 4000
    if (duration > 0) {
      setTimeout(() => removeToast(id), duration)
    }
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const success = useCallback(
    (title: string, message?: string) => addToast({ type: 'success' as ToastType, title, message }),
    [addToast]
  )
  const error = useCallback(
    (title: string, message?: string) => addToast({ type: 'error' as ToastType, title, message }),
    [addToast]
  )
  const warning = useCallback(
    (title: string, message?: string) => addToast({ type: 'warning' as ToastType, title, message }),
    [addToast]
  )
  const info = useCallback(
    (title: string, message?: string) => addToast({ type: 'info' as ToastType, title, message }),
    [addToast]
  )

  return { toasts, addToast, removeToast, success, error, warning, info }
}

// ─── useFormStep ──────────────────────────────────────────────────────────────
// Multi-step form navigation

export function useFormStep(totalSteps: number) {
  const [currentStep, setCurrentStep] = useState(0)

  const next = useCallback(() => setCurrentStep((s) => Math.min(s + 1, totalSteps - 1)), [totalSteps])
  const prev = useCallback(() => setCurrentStep((s) => Math.max(s - 1, 0)), [])
  const goTo = useCallback((step: number) => setCurrentStep(Math.max(0, Math.min(step, totalSteps - 1))), [totalSteps])
  const reset = useCallback(() => setCurrentStep(0), [])

  return {
    currentStep,
    totalSteps,
    next,
    prev,
    goTo,
    reset,
    isFirst: currentStep === 0,
    isLast: currentStep === totalSteps - 1,
    progress: Math.round(((currentStep + 1) / totalSteps) * 100),
  }
}
