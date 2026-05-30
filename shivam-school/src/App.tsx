import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { AppProvider } from '@/context'
import { Spinner } from '@/components/ui'
import {
  HomePage,
  AboutPage,
  ProgramsPage,
  ProgramDetailPage,
  AdmissionsPage,
  ApplyPage,
  AppointmentsPage,
  GalleryPage,
  ContactPage,
  NotFoundPage,
  PrivacyPage,
  TermsPage,
} from '@/pages'

// ─── Scroll to top on route change ───────────────────────────────────────────

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

// ─── Skip to main content (a11y) ──────────────────────────────────────────────

const SkipLink: React.FC = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-gold-500 focus:text-navy-900 focus:rounded-lg focus:font-semibold focus:shadow-lg"
  >
    Skip to main content
  </a>
)

// ─── Page loading fallback ────────────────────────────────────────────────────

const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-warm-50">
    <div className="flex flex-col items-center gap-4">
      <Spinner size="lg" color="navy" />
      <p className="text-navy-800 font-semibold text-sm">Loading...</p>
    </div>
  </div>
)

// ─── App Routes ───────────────────────────────────────────────────────────────

const AppRoutes: React.FC = () => (
  <>
    <ScrollToTop />
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />

        {/* About */}
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/about/:section" element={<Layout><AboutPage /></Layout>} />

        {/* Programs */}
        <Route path="/programs" element={<Layout><ProgramsPage /></Layout>} />
        <Route path="/programs/:programId" element={<Layout><ProgramDetailPage /></Layout>} />

        {/* Admissions */}
        <Route path="/admissions" element={<Layout><AdmissionsPage /></Layout>} />
        <Route path="/admissions/apply" element={<Layout><ApplyPage /></Layout>} />

        {/* Appointments */}
        <Route path="/appointments" element={<Layout><AppointmentsPage /></Layout>} />

        {/* Gallery */}
        <Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />

        {/* Contact */}
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />

        {/* Legal */}
        <Route path="/privacy" element={<Layout><PrivacyPage /></Layout>} />
        <Route path="/terms" element={<Layout><TermsPage /></Layout>} />

        {/* 404 */}
        <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
      </Routes>
    </Suspense>
  </>
)

// ─── App Root ─────────────────────────────────────────────────────────────────

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <SkipLink />
      <AppRoutes />
    </AppProvider>
  </BrowserRouter>
)

export default App
