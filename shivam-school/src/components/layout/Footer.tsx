import React from 'react'
import { Link } from 'react-router-dom'
import { SCHOOL_INFO, FOOTER_SECTIONS } from '@/constants'

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Top CTA Band */}
      <div className="bg-gradient-to-r from-gold-500 to-gold-400 py-6">
        <div className="section-wrapper flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-navy-900 font-bold text-lg font-display">Admissions Open for 2024–25</p>
            <p className="text-navy-800 text-sm">Limited seats available. Enroll your child today!</p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/admissions/apply"
              className="px-5 py-2.5 rounded-xl bg-navy-800 text-white font-semibold text-sm hover:bg-navy-700 transition-colors"
            >
              Apply Online
            </Link>
            <a
              href={`tel:${SCHOOL_INFO.contact.phone1}`}
              className="px-5 py-2.5 rounded-xl bg-white/20 text-navy-900 font-semibold text-sm hover:bg-white/30 transition-colors border border-navy-800/20"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-wrapper py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-700 to-navy-800 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                <span className="text-gold-400 font-display text-2xl font-bold">ॐ</span>
              </div>
              <div>
                <p className="font-display font-bold text-xl text-white">Shivam Public School</p>
                <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase">Knowledge · Values · Excellence</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Nurturing young minds with the best of early childhood education in a safe, loving, and stimulating environment since 2016.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a href={`tel:${SCHOOL_INFO.contact.phone1}`} className="flex items-center gap-3 text-sm text-gray-300 hover:text-gold-400 transition-colors group">
                <span className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors flex-shrink-0" aria-hidden="true">📞</span>
                <span>{SCHOOL_INFO.contact.phone1Display}</span>
              </a>
              <a href={`tel:${SCHOOL_INFO.contact.phone2}`} className="flex items-center gap-3 text-sm text-gray-300 hover:text-gold-400 transition-colors group">
                <span className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors flex-shrink-0" aria-hidden="true">📱</span>
                <span>{SCHOOL_INFO.contact.phone2Display}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <span className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">📍</span>
                <span className="leading-relaxed">{SCHOOL_INFO.location.fullAddress}</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { href: SCHOOL_INFO.socialMedia.facebook, label: 'Facebook', emoji: '📘' },
                { href: SCHOOL_INFO.socialMedia.instagram, label: 'Instagram', emoji: '📸' },
                { href: SCHOOL_INFO.socialMedia.youtube, label: 'YouTube', emoji: '▶️' },
                { href: SCHOOL_INFO.socialMedia.whatsapp, label: 'WhatsApp', emoji: '💬' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-navy-800 hover:bg-gold-500/20 border border-white/5 hover:border-gold-500/30 flex items-center justify-center transition-all duration-200 text-lg"
                >
                  {social.emoji}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-400 text-sm hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold-500/50 group-hover:bg-gold-400 transition-colors flex-shrink-0" aria-hidden="true" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Kannada name */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="kannada text-2xl font-semibold text-gold-400/60 mb-4">
            {SCHOOL_INFO.trustKannada}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {year} Shivam Public School. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link>
              <Link to="/sitemap" className="hover:text-gray-300 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${SCHOOL_INFO.contact.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20admissions%20at%20Shivam%20Public%20School.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 shadow-lg hover:shadow-xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 float-anim"
      >
        💬
      </a>
    </footer>
  )
}

export default Footer
