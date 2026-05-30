import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { clsx } from 'clsx'
import { NAV_ITEMS, SCHOOL_INFO } from '@/constants'
import { Button } from '@/components/ui'
import type { NavItem } from '@/types'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <nav
      ref={navRef}
      className={clsx(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100'
          : 'bg-transparent'
      )}
      aria-label="Main navigation"
    >
      <div className="section-wrapper">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Shivam Public School – Home">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center shadow-soft">
                <span className="text-gold-400 font-display font-bold text-xl">ॐ</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className={clsx('font-display font-bold leading-tight transition-colors', isScrolled ? 'text-navy-800' : 'text-white')}>
                <span className="text-lg block">Shivam</span>
                <span className="text-xs font-body font-semibold tracking-wider uppercase text-gold-500 block -mt-0.5">
                  Public School
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <DesktopNavItem
                key={item.href}
                item={item}
                isActive={isActive(item.href)}
                isScrolled={isScrolled}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
              />
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link to="/admissions/apply" className="hidden md:block">
              <Button size="sm" variant="gold">
                Apply Now
              </Button>
            </Link>

            <a
              href={`tel:${SCHOOL_INFO.contact.phone1}`}
              className={clsx(
                'hidden sm:flex items-center gap-1.5 text-sm font-semibold transition-colors',
                isScrolled ? 'text-navy-800 hover:text-gold-600' : 'text-white/90 hover:text-gold-400'
              )}
              aria-label={`Call us: ${SCHOOL_INFO.contact.phone1Display}`}
            >
              <PhoneIcon />
              <span className="hidden xl:inline">{SCHOOL_INFO.contact.phone1Display}</span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={clsx(
                'lg:hidden p-2 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-gold-500',
                isScrolled ? 'text-navy-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              )}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileOpen}
        items={NAV_ITEMS}
        isActive={isActive}
        onClose={() => setMobileOpen(false)}
      />
    </nav>
  )
}

// ─── Desktop Nav Item ─────────────────────────────────────────────────────────

interface DesktopNavItemProps {
  item: NavItem
  isActive: boolean
  isScrolled: boolean
  openDropdown: string | null
  setOpenDropdown: (v: string | null) => void
}

const DesktopNavItem: React.FC<DesktopNavItemProps> = ({
  item,
  isActive,
  isScrolled,
  openDropdown,
  setOpenDropdown,
}) => {
  const hasChildren = item.children && item.children.length > 0
  const isOpen = openDropdown === item.href

  return (
    <div className="relative" onMouseEnter={() => hasChildren && setOpenDropdown(item.href)} onMouseLeave={() => setOpenDropdown(null)}>
      {hasChildren ? (
        <button
          className={clsx(
            'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200',
            isScrolled
              ? isActive ? 'text-gold-600' : 'text-navy-800 hover:text-gold-600'
              : isActive ? 'text-gold-400' : 'text-white/90 hover:text-white',
          )}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {item.label}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className={clsx('transition-transform duration-200', isOpen && 'rotate-180')}
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      ) : (
        <Link
          to={item.href}
          className={clsx(
            'flex items-center px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200',
            isScrolled
              ? isActive ? 'text-gold-600' : 'text-navy-800 hover:text-gold-600'
              : isActive ? 'text-gold-400' : 'text-white/90 hover:text-white',
          )}
          aria-current={isActive ? 'page' : undefined}
        >
          {item.label}
        </Link>
      )}

      {/* Dropdown */}
      {hasChildren && isOpen && (
        <div
          className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-card-hover border border-gray-100 py-2 z-50 animate-slide-up"
          role="menu"
        >
          {item.children!.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-navy-50 hover:text-navy-800 font-medium transition-colors"
              role="menuitem"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

interface MobileMenuProps {
  isOpen: boolean
  items: NavItem[]
  isActive: (href: string) => boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, items, isActive, onClose }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleExpand = (href: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev)
      next.has(href) ? next.delete(href) : next.add(href)
      return next
    })
  }

  return (
    <div
      id="mobile-menu"
      className={clsx(
        'lg:hidden fixed inset-0 top-20 z-30 bg-white transition-all duration-300 overflow-y-auto',
        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
      )}
      aria-hidden={!isOpen}
    >
      <div className="p-6 space-y-1">
        {items.map((item) => {
          const hasChildren = item.children && item.children.length > 0
          const isExpanded = expandedItems.has(item.href)

          return (
            <div key={item.href}>
              <div className="flex items-center">
                <Link
                  to={item.href}
                  onClick={!hasChildren ? onClose : undefined}
                  className={clsx(
                    'flex-1 flex items-center py-3 px-4 rounded-xl font-semibold text-base transition-colors',
                    isActive(item.href) ? 'bg-navy-50 text-navy-800' : 'text-gray-800 hover:bg-gray-50'
                  )}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
                {hasChildren && (
                  <button
                    onClick={() => toggleExpand(item.href)}
                    className="p-3 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
                    aria-expanded={isExpanded}
                    aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.label}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                      className={clsx('transition-transform', isExpanded && 'rotate-180')} aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                )}
              </div>

              {hasChildren && isExpanded && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-gold-200 pl-4">
                  {item.children!.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      onClick={onClose}
                      className="block py-2.5 px-3 text-sm text-gray-600 hover:text-navy-800 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}

        {/* Mobile CTA */}
        <div className="pt-6 space-y-3 border-t border-gray-100 mt-6">
          <Link to="/admissions/apply" onClick={onClose}>
            <Button variant="primary" fullWidth>
              Apply for Admission
            </Button>
          </Link>
          <Link to="/appointments" onClick={onClose}>
            <Button variant="outline" fullWidth>
              Book Appointment
            </Button>
          </Link>
          <a href={`tel:${SCHOOL_INFO.contact.phone1}`} className="block">
            <Button variant="ghost" fullWidth leftIcon={<PhoneIcon />}>
              {SCHOOL_INFO.contact.phone1Display}
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.55 2 2 0 0 1 3.59 1.36h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l.83-.83a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

export default Navbar
