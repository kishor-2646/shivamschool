import React from 'react'
import { Link } from 'react-router-dom'
import { Button, SectionHeader, Badge } from '@/components/ui'

// ─── Shared placeholder shell ────────────────────────────────────────────────

const PageShell: React.FC<{
  emoji: string
  title: string
  subtitle: string
  badge?: string
  cta?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  children?: React.ReactNode
}> = ({ emoji, title, subtitle, badge, cta, ctaSecondary, children }) => (
  <div className="min-h-screen bg-warm-50">
    {/* Hero band */}
    <div
      className="pt-32 pb-20 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1B3A8C 0%, #0f2460 100%)' }}
    >
      <div className="absolute inset-0 pattern-dots opacity-40" aria-hidden="true" />
      <div className="section-wrapper relative z-10 space-y-5">
        {badge && <Badge variant="gold">{badge}</Badge>}
        <div className="text-6xl" aria-hidden="true">{emoji}</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white">{title}</h1>
        <p className="text-white/75 text-lg max-w-xl mx-auto">{subtitle}</p>
        {(cta || ctaSecondary) && (
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            {cta && (
              <Link to={cta.href}>
                <Button variant="gold" size="lg">{cta.label}</Button>
              </Link>
            )}
            {ctaSecondary && (
              <Link to={ctaSecondary.href}>
                <Button size="lg" className="!bg-white/10 !text-white hover:!bg-white/20">
                  {ctaSecondary.label}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>

    {/* Wave */}
    <div className="-mt-px" aria-hidden="true">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 60L1440 60L1440 10C1200 45 960 60 720 45C480 30 240 0 0 15L0 60Z" fill="#FFFBF0" />
      </svg>
    </div>

    {/* Body */}
    <div className="section-wrapper py-16">
      {children ?? (
        <div className="bg-white rounded-2xl shadow-soft p-10 text-center max-w-2xl mx-auto space-y-4">
          <p className="text-gray-500 text-lg">
            🚧 This page is being built in the next phase.
          </p>
          <p className="text-gray-400 text-sm">
            Full content with animations, forms, and interactive sections coming in Phase 2 & 3.
          </p>
          <Link to="/">
            <Button variant="primary">← Back to Home</Button>
          </Link>
        </div>
      )}
    </div>
  </div>
)

// ─── About Page ───────────────────────────────────────────────────────────────

export const AboutPage: React.FC = () => (
  <PageShell
    emoji="🏫"
    title="About Shivam Public School"
    subtitle="Our story, vision, mission, and the passionate team behind every child's journey."
    badge="Est. 2016 · Kodipura, Bengaluru South"
    cta={{ label: 'Apply for Admission', href: '/admissions/apply' }}
    ctaSecondary={{ label: 'Book a Visit', href: '/appointments' }}
  />
)

// ─── Programs Page ────────────────────────────────────────────────────────────

export const ProgramsPage: React.FC = () => (
  <PageShell
    emoji="📚"
    title="Our Programs"
    subtitle="Daycare · Playgroup · Nursery · LKG · UKG · Phonics · NTT · Tuitions"
    badge="8 Specialized Programs"
    cta={{ label: 'Apply Now', href: '/admissions/apply' }}
  />
)

// ─── Program Detail Page ──────────────────────────────────────────────────────

export const ProgramDetailPage: React.FC = () => (
  <PageShell
    emoji="📖"
    title="Program Details"
    subtitle="In-depth curriculum, activities, and learning outcomes for this program."
    cta={{ label: 'Enroll Your Child', href: '/admissions/apply' }}
  />
)

// ─── Admissions Page ──────────────────────────────────────────────────────────

export const AdmissionsPage: React.FC = () => (
  <PageShell
    emoji="🎓"
    title="Admissions 2024–25"
    subtitle="Simple, transparent process. Apply online or visit us in person."
    badge="Seats Filling Fast!"
    cta={{ label: 'Apply Online Now', href: '/admissions/apply' }}
    ctaSecondary={{ label: 'Book Appointment', href: '/appointments' }}
  />
)

// ─── Apply Page ───────────────────────────────────────────────────────────────

export const ApplyPage: React.FC = () => (
  <PageShell
    emoji="📝"
    title="Online Admission Form"
    subtitle="Fill in your child's details and we will contact you within 24 hours."
    badge="Free · Takes 5 Minutes"
  >
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-soft p-8 text-center space-y-4">
      <p className="text-2xl">📋</p>
      <h2 className="text-xl font-bold text-navy-800">Multi-Step Admission Form</h2>
      <p className="text-gray-500">
        The full 4-step admission form (Child Info → Parent Info → Documents → Consent) is built in <strong>Phase 3</strong>.
      </p>
      <p className="text-sm text-gray-400">
        Meanwhile, call us directly:
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <a href="tel:9886551304">
          <Button variant="primary">📞 98865 51304</Button>
        </a>
        <a href="tel:9900194111">
          <Button variant="outline">📞 99001 94111</Button>
        </a>
      </div>
    </div>
  </PageShell>
)

// ─── Appointments Page ────────────────────────────────────────────────────────

export const AppointmentsPage: React.FC = () => (
  <PageShell
    emoji="📅"
    title="Book an Appointment"
    subtitle="Schedule a school visit, admission inquiry, or fee consultation at your convenience."
    badge="Mon–Sat · 9 AM – 5 PM"
  >
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-soft p-8 text-center space-y-4">
      <p className="text-2xl">🗓️</p>
      <h2 className="text-xl font-bold text-navy-800">Appointment Booking System</h2>
      <p className="text-gray-500">
        The full calendar + time-slot booking system with email confirmation is built in <strong>Phase 3</strong>.
      </p>
      <p className="text-sm text-gray-400">Meanwhile, book via WhatsApp or call:</p>
      <div className="flex gap-3 justify-center flex-wrap">
        <a href="https://wa.me/919886551304?text=I%20would%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
          <Button variant="gold">💬 WhatsApp Us</Button>
        </a>
        <a href="tel:9886551304">
          <Button variant="outline">📞 Call Now</Button>
        </a>
      </div>
    </div>
  </PageShell>
)

// ─── Gallery Page ─────────────────────────────────────────────────────────────

export const GalleryPage: React.FC = () => (
  <PageShell
    emoji="🖼️"
    title="Photo Gallery"
    subtitle="Glimpses of joyful learning, celebrations, and everyday magic at Shivam Public School."
    badge="Classrooms · Activities · Events"
  >
    <div className="space-y-8">
      <SectionHeader title="Our School in Pictures" eyebrow="Gallery" align="center" />
      {/* Gallery grid placeholder */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-2xl bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center text-4xl animate-pulse"
            style={{ animationDelay: `${i * 100}ms` }}
            aria-label={`Gallery image ${i + 1}`}
          >
            {['🎨', '🏫', '📚', '🎉', '🛝', '👧', '🌟', '✏️', '🎭', '🎵', '🏆', '🌈'][i]}
          </div>
        ))}
      </div>
      <p className="text-center text-gray-500 text-sm">
        📸 Full masonry gallery with lightbox and category filters coming in Phase 2.
      </p>
    </div>
  </PageShell>
)

// ─── Contact Page ─────────────────────────────────────────────────────────────

export const ContactPage: React.FC = () => (
  <PageShell
    emoji="📬"
    title="Contact Us"
    subtitle="We'd love to hear from you. Reach out anytime — we're here to help."
  >
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Contact info */}
      <div className="bg-white rounded-2xl shadow-soft p-8 space-y-6">
        <h2 className="text-xl font-bold text-navy-800">Get In Touch</h2>
        {[
          { icon: '📞', label: 'Phone 1', value: '+91 98865 51304', href: 'tel:9886551304' },
          { icon: '📱', label: 'Phone 2', value: '+91 99001 94111', href: 'tel:9900194111' },
          { icon: '💬', label: 'WhatsApp', value: 'Chat on WhatsApp', href: 'https://wa.me/919886551304' },
          { icon: '📍', label: 'Address', value: 'Kodipura, Kanakapura Taluk, Bengaluru South – 562119', href: '#' },
          { icon: '⏰', label: 'Hours', value: 'Mon–Fri: 8:30 AM – 1:30 PM | Office: 8 AM – 5 PM', href: '#' },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-start gap-4 group hover:bg-navy-50 -mx-2 px-2 py-2 rounded-xl transition-colors"
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <span className="text-2xl w-10 h-10 flex items-center justify-center bg-navy-50 rounded-xl flex-shrink-0 group-hover:bg-gold-100 transition-colors">
              {item.icon}
            </span>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{item.label}</p>
              <p className="text-gray-800 font-medium text-sm mt-0.5 group-hover:text-navy-800 transition-colors">{item.value}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Contact form placeholder */}
      <div className="bg-white rounded-2xl shadow-soft p-8 space-y-4">
        <h2 className="text-xl font-bold text-navy-800">Send a Message</h2>
        <p className="text-gray-500 text-sm">
          Full contact form with EmailJS integration is built in <strong>Phase 3</strong>.
        </p>
        <div className="space-y-3">
          {['Your Name', 'Phone Number', 'Message'].map((field) => (
            <div key={field} className="h-12 rounded-xl bg-gray-100 animate-pulse flex items-center px-4">
              <span className="text-gray-400 text-sm">{field}</span>
            </div>
          ))}
          <div className="h-24 rounded-xl bg-gray-100 animate-pulse" />
          <Button variant="primary" fullWidth disabled>
            Send Message (Phase 3)
          </Button>
        </div>
      </div>
    </div>
  </PageShell>
)

// ─── 404 Not Found ────────────────────────────────────────────────────────────

export const NotFoundPage: React.FC = () => (
  <div className="min-h-screen bg-warm-50 flex items-center justify-center">
    <div className="text-center space-y-6 p-8">
      <div className="text-8xl float-anim" aria-hidden="true">🔍</div>
      <h1 className="text-4xl font-display font-bold text-navy-800">Page Not Found</h1>
      <p className="text-gray-500 text-lg max-w-sm mx-auto">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex gap-4 justify-center">
        <Link to="/">
          <Button variant="primary" size="lg">🏠 Back to Home</Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline" size="lg">Contact Us</Button>
        </Link>
      </div>
    </div>
  </div>
)

// ─── Privacy / Terms stubs ────────────────────────────────────────────────────

export const PrivacyPage: React.FC = () => (
  <PageShell emoji="🔒" title="Privacy Policy" subtitle="How we collect, use, and protect your information." />
)

export const TermsPage: React.FC = () => (
  <PageShell emoji="📜" title="Terms & Conditions" subtitle="Rules and guidelines for using our services." />
)
