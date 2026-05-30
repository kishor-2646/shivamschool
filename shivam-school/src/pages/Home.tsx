import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button, Badge, SectionHeader, Card, StarRating, Avatar } from '@/components/ui'
import { SCHOOL_INFO, PROGRAMS, FEATURES, STATS, TESTIMONIALS } from '@/constants'
import { useScrollAnimation, useCountUp } from '@/hooks'

// ─── Image paths (served from /public/school-images/) ─────────────────────────
const IMGS = {
  girlTricolor: '/school-images/girl-tricolor.jpg',
  girlTraditional: '/school-images/girl-traditional.jpg',
  schoolGate: '/school-images/school-gate.jpg',
  schoolLogo: '/school-images/school-logo.jpg',
  kidsDrawing: '/school-images/kids-drawing.jpg',
  kidsColoring: '/school-images/kids-coloring.jpg',
  ganeshCelebration: '/school-images/ganesh-celebration.jpg',
  fieldTrip: '/school-images/field-trip.jpg',
  onamCelebration: '/school-images/onam-celebration.jpg',
  classroom1: '/school-images/classroom1.jpg',
  playground: '/school-images/playground.jpg',
  outdoorPlay: '/school-images/outdoor-play.jpg',
  playEquipment: '/school-images/play-equipment.jpg',
  classroom2: '/school-images/classroom2.jpg',
  writingActivity: '/school-images/writing-activity.jpg',
  learningMaterials: '/school-images/learning-materials.jpg',
  yogaActivity: '/school-images/yoga-activity.jpg',
  schoolBuilding: '/school-images/school-building.jpg',
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroImages = [
    { src: IMGS.girlTraditional, caption: 'Cultural celebrations & rich traditions' },
    { src: IMGS.girlTricolor, caption: 'Nurturing patriotism & values' },
    { src: IMGS.schoolGate, caption: 'Welcome to Shivam Public School, Kodipura' },
  ]

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide(p => (p + 1) % heroImages.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1B3A8C 0%, #0f2460 60%, #1a2c6b 100%)' }}
      aria-label="Hero"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-dots opacity-50" aria-hidden="true" />

      {/* Animated hero image */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === currentSlide ? 0.18 : 0 }}
          >
            <img src={img.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        {/* Decorative circles */}
        {[
          { size: 320, top: '-8%', right: '-4%', opacity: 0.07 },
          { size: 200, bottom: '12%', left: '-4%', opacity: 0.05 },
          { size: 150, top: '38%', right: '14%', opacity: 0.04 },
        ].map((c, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 border-yellow-400"
            style={{ width: c.size, height: c.size, top: c.top, bottom: (c as any).bottom, right: c.right, left: (c as any).left, opacity: c.opacity }}
          />
        ))}
        <div className="absolute top-24 right-12 text-5xl float-anim opacity-20 hidden lg:block">🌟</div>
        <div className="absolute bottom-32 right-32 text-4xl float-anim-2 opacity-20 hidden lg:block">📚</div>
        <div className="absolute top-1/3 left-8 text-3xl float-anim-3 opacity-20 hidden lg:block">✏️</div>
        <div className="absolute bottom-24 left-24 text-4xl float-anim opacity-20 hidden lg:block">🎨</div>
      </div>

      <div className="section-wrapper relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-3 animate-slide-up">
              <Badge variant="gold" size="md">🎉 Admissions Open 2025–26</Badge>
              <div className="kannada text-yellow-400/80 text-sm font-semibold">
                {SCHOOL_INFO.trustKannada}
              </div>
            </div>

            <div className="space-y-4 animate-slide-up animation-delay-100">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-display font-bold text-white leading-tight">
                <span className="block">{SCHOOL_INFO.heroMessage}</span>
                <span className="block text-yellow-400 mt-2 text-3xl md:text-4xl xl:text-5xl italic">
                  Shivam Public School
                </span>
              </h1>
              <p className="text-lg text-white/75 max-w-md leading-relaxed">
                {SCHOOL_INFO.taglineSecondary}. Programs from Daycare to UKG with trained teachers, smart classrooms, and a 1:10 teacher–student ratio.
              </p>
            </div>

            {/* Program pills */}
            <div className="flex flex-wrap gap-2 animate-slide-up animation-delay-200">
              {['Daycare', 'Playgroup', 'Nursery', 'LKG', 'UKG', 'Phonics'].map((prog) => (
                <span
                  key={prog}
                  className="px-3 py-1.5 rounded-lg bg-white/10 text-white/90 text-sm font-semibold border border-white/20 hover:bg-white/20 transition-colors cursor-default"
                >
                  {prog}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-300">
              <Link to="/admissions/apply">
                <Button variant="gold" size="lg">Apply for Admission</Button>
              </Link>
              <Link to="/appointments">
                <Button variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-navy-800">
                  Book School Visit
                </Button>
              </Link>
            </div>

            {/* Contact quick */}
            <div className="flex items-center gap-6 animate-slide-up animation-delay-400">
              <a href={`tel:${SCHOOL_INFO.contact.phone1}`} className="flex items-center gap-2 text-white/80 hover:text-yellow-400 transition-colors">
                <span className="text-lg">📞</span>
                <span className="font-semibold">{SCHOOL_INFO.contact.phone1Display}</span>
              </a>
              <span className="text-white/20">|</span>
              <a href={`tel:${SCHOOL_INFO.contact.phone2}`} className="flex items-center gap-2 text-white/80 hover:text-yellow-400 transition-colors">
                <span className="font-semibold">{SCHOOL_INFO.contact.phone2Display}</span>
              </a>
            </div>
          </div>

          {/* Right — Hero image carousel + Stats */}
          <div className="space-y-4 animate-fade-in animation-delay-500">
            {/* Image showcase */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: 320 }}>
              {heroImages.map((img, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-all duration-1000"
                  style={{ opacity: i === currentSlide ? 1 : 0 }}
                >
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-semibold bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                      {img.caption}
                    </p>
                  </div>
                </div>
              ))}
              {/* Slide indicators */}
              <div className="absolute top-4 right-4 flex gap-1.5 z-10">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-yellow-400 w-5' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
              <div className="col-span-2 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-2xl p-4 text-center shadow-lg">
                <p className="text-navy-900 font-display font-bold text-base">{SCHOOL_INFO.tagline}</p>
                <p className="text-navy-700 text-xs mt-1">Shivam Public School, Kodipura</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L1440 80L1440 20C1200 60 960 80 720 60C480 40 240 0 0 20L0 80Z" fill="#FFFBF0" />
        </svg>
      </div>
    </section>
  )
}

const StatCard: React.FC<{ stat: typeof STATS[number]; index: number }> = ({ stat, index }) => {
  const { ref, isVisible } = useScrollAnimation()
  const count = useCountUp(stat.value, 2000, isVisible)
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center hover:bg-white/15 transition-colors"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-3xl mb-1.5">{stat.icon}</div>
      <div className="text-2xl font-display font-bold text-white">{count}{stat.suffix}</div>
      <div className="text-white/70 text-xs font-semibold mt-0.5 uppercase tracking-wide">{stat.label}</div>
    </div>
  )
}

// ─── Photo Gallery Section ─────────────────────────────────────────────────────

const galleryItems = [
  { src: IMGS.ganeshCelebration, label: 'Ganesh Chaturthi', category: 'Festivals', span: 'col-span-2 row-span-2' },
  { src: IMGS.onamCelebration, label: 'Onam Celebration', category: 'Festivals', span: '' },
  { src: IMGS.fieldTrip, label: 'Field Trip', category: 'Activities', span: '' },
  { src: IMGS.classroom1, label: 'Smart Classroom', category: 'Facilities', span: '' },
  { src: IMGS.playground, label: 'Play Area', category: 'Facilities', span: '' },
  { src: IMGS.kidsDrawing, label: 'Art & Craft', category: 'Activities', span: '' },
  { src: IMGS.yogaActivity, label: 'Yoga & Fitness', category: 'Activities', span: '' },
  { src: IMGS.outdoorPlay, label: 'Outdoor Play', category: 'Facilities', span: '' },
  { src: IMGS.writingActivity, label: 'Writing Practice', category: 'Learning', span: '' },
  { src: IMGS.learningMaterials, label: 'Learning Materials', category: 'Learning', span: '' },
]

const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const { ref, isVisible } = useScrollAnimation()
  const filters = ['All', 'Festivals', 'Activities', 'Facilities', 'Learning']

  const filtered = activeFilter === 'All' ? galleryItems : galleryItems.filter(g => g.category === activeFilter)

  return (
    <section className="section-padding bg-warm-50" aria-labelledby="gallery-heading">
      <div className="section-wrapper">
        <SectionHeader
          eyebrow="Life at Shivam"
          title="A Glimpse Into Our World"
          subtitle="Celebrations, learning, play, and growth — captured in moments that define the Shivam experience."
          align="center"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-navy-800 text-white shadow-md scale-105'
                  : 'bg-white text-navy-800 border border-gray-200 hover:border-navy-300 hover:shadow-sm'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {filtered.map((item, i) => (
            <div
              key={`${item.src}-${i}`}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${i === 0 && activeFilter === 'All' ? 'md:col-span-2 md:row-span-2' : ''}`}
              style={{ aspectRatio: (i === 0 && activeFilter === 'All') ? 'auto' : '4/3', minHeight: (i === 0 && activeFilter === 'All') ? 320 : 180, transitionDelay: `${i * 50}ms` }}
              onClick={() => setLightboxIdx(i)}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                style={{ height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <p className="text-white font-semibold text-sm">{item.label}</p>
                <span className="text-xs text-yellow-300">{item.category}</span>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <span className="text-navy-800 text-sm">🔍</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/gallery">
            <Button variant="outline" size="lg">View Full Gallery →</Button>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightboxIdx(null)}
        >
          <div className="relative max-w-4xl max-h-screen p-4" onClick={e => e.stopPropagation()}>
            <img
              src={filtered[lightboxIdx]?.src}
              alt={filtered[lightboxIdx]?.label}
              className="max-h-[80vh] max-w-full rounded-2xl shadow-2xl object-contain"
            />
            <p className="text-white text-center mt-3 font-semibold">{filtered[lightboxIdx]?.label}</p>
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-2 right-2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors text-xl font-bold"
            >
              ×
            </button>
            {lightboxIdx > 0 && (
              <button
                onClick={() => setLightboxIdx(p => p! - 1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white"
              >
                ‹
              </button>
            )}
            {lightboxIdx < filtered.length - 1 && (
              <button
                onClick={() => setLightboxIdx(p => p! + 1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white"
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

// ─── Programs Section ─────────────────────────────────────────────────────────

const ProgramsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="section-padding bg-white" aria-labelledby="programs-heading">
      <div className="section-wrapper">
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Programs"
          subtitle="From daycare to specialized phonics — every program designed for your child's holistic development."
          align="center"
        />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {PROGRAMS.slice(0, 8).map((program, i) => (
            <Link key={program.id} to={`/programs/${program.id}`}>
              <Card hover shine padding="md" className="h-full group" style={{ animationDelay: `${i * 80}ms` } as React.CSSProperties}>
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-2xl ${program.color} flex items-center justify-center text-2xl`}>
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800 text-lg group-hover:text-gold-600 transition-colors">{program.name}</h3>
                    <Badge variant="navy" size="sm" className="mt-1">{program.ageRange}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{program.description}</p>
                  <div className="text-gold-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <span>→</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Facilities Showcase ───────────────────────────────────────────────────────

const facilitiesData = [
  { src: IMGS.classroom2, title: 'Smart Classrooms', desc: 'Tech-enabled rooms with smart boards & child-friendly furniture', icon: '🏫' },
  { src: IMGS.playEquipment, title: 'Play Area', desc: 'Indoor & outdoor spaces with safe, age-appropriate equipment', icon: '🛝' },
  { src: IMGS.learningMaterials, title: 'Learning Materials', desc: 'Rich collection of puzzles, flash cards, and hands-on tools', icon: '🎓' },
  { src: IMGS.outdoorPlay, title: 'Outdoor Ground', desc: 'Astroturf-covered outdoor ground for physical activities', icon: '🌿' },
]

const FacilitiesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f2460 0%, #1B3A8C 100%)' }}
      aria-labelledby="facilities-heading"
    >
      <div className="absolute inset-0 pattern-dots opacity-30" aria-hidden="true" />
      <div className="section-wrapper relative z-10">
        <SectionHeader
          eyebrow="Our Facilities"
          title="Built for Bright Futures"
          subtitle="Every space designed with your child's safety, comfort, and growth in mind."
          align="center"
        />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {facilitiesData.map((f, i) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl shadow-xl"
              style={{ aspectRatio: '3/4', transitionDelay: `${i * 80}ms` }}
            >
              <img src={f.src} alt={f.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-3xl mb-2">{f.icon}</div>
                <h3 className="text-white font-bold text-lg">{f.title}</h3>
                <p className="text-white/75 text-sm mt-1 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 10C1200 40 960 60 720 40C480 20 240 0 0 10L0 60Z" fill="#FFFBF0" />
        </svg>
      </div>
    </section>
  )
}

// ─── Features Section ─────────────────────────────────────────────────────────

const FeaturesSection: React.FC = () => {
  return (
    <section className="section-padding bg-warm-50" aria-labelledby="features-heading">
      <div className="section-wrapper">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Everything Your Child Needs"
          subtitle="World-class facilities, certified teachers, and a curriculum designed to bring out the best in every child."
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {FEATURES.slice(0, 10).map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

const FeatureCard: React.FC<{ feature: typeof FEATURES[number]; index: number }> = ({ feature, index }) => {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`text-center p-5 rounded-2xl border border-gray-100 hover:border-yellow-200 bg-white hover:bg-yellow-50/30 transition-all duration-300 hover:-translate-y-1 group
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
      <h3 className="font-bold text-navy-800 text-sm leading-snug group-hover:text-gold-600 transition-colors">{feature.title}</h3>
      <p className="text-gray-500 text-xs mt-1.5 leading-relaxed line-clamp-3 hidden sm:block">{feature.description}</p>
    </div>
  )
}

// ─── Celebrations Strip ────────────────────────────────────────────────────────

const celebrationImages = [
  { src: IMGS.ganeshCelebration, label: 'Ganesh Chaturthi' },
  { src: IMGS.onamCelebration, label: 'Onam' },
  { src: IMGS.fieldTrip, label: 'Field Trip' },
  { src: IMGS.yogaActivity, label: 'Yoga Day' },
  { src: IMGS.kidsDrawing, label: 'Art Day' },
  { src: IMGS.kidsColoring, label: 'Craft Activity' },
]

const CelebrationsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let pos = 0
    const speed = 0.5
    let raf: number
    const animate = () => {
      pos += speed
      if (pos >= el.scrollWidth / 2) pos = 0
      el.scrollLeft = pos
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    el.addEventListener('mouseenter', () => cancelAnimationFrame(raf))
    el.addEventListener('mouseleave', () => { raf = requestAnimationFrame(animate) })
    return () => cancelAnimationFrame(raf)
  }, [])

  const doubled = [...celebrationImages, ...celebrationImages]

  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="section-wrapper mb-8">
        <div className="text-center">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">Rich School Life</span>
          <h2 className="text-3xl font-display font-bold text-navy-800 mt-2">Celebrations & Activities</h2>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden cursor-grab"
        style={{ scrollBehavior: 'auto' }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex-none w-64 md:w-80 relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            style={{ height: 220 }}
          >
            <img src={item.src} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
            <span className="absolute bottom-3 left-4 text-white font-semibold text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── School Building / About snippet ──────────────────────────────────────────

const AboutSnippet: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="section-padding bg-warm-50">
      <div className="section-wrapper">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Images collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <img src={IMGS.schoolGate} alt="School entrance" className="rounded-2xl shadow-lg w-full object-cover col-span-2" style={{ height: 200 }} />
              <img src={IMGS.schoolBuilding} alt="School building" className="rounded-2xl shadow-lg w-full object-cover" style={{ height: 170 }} />
              <img src={IMGS.classroom1} alt="Classroom" className="rounded-2xl shadow-lg w-full object-cover" style={{ height: 170 }} />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-yellow-400 to-yellow-500 text-navy-900 rounded-2xl px-5 py-3 shadow-xl text-center">
              <p className="font-display font-bold text-2xl">8+</p>
              <p className="text-xs font-semibold">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">About Us</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-800 mt-2 leading-tight">
                Where Every Child's Journey Begins
              </h2>
            </div>
            <div className="w-16 h-1 bg-yellow-400 rounded-full" />
            <p className="text-gray-600 leading-relaxed">
              Shivam Public School is a premier early childhood institution located in Kodipura, Kanakapura. Established under <strong>Shivam Educational and Charitable Trust</strong>, we offer a safe, nurturing, and stimulating environment for children aged 3 months to 6 years.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our curriculum blends the <em>playway learning method</em> with structured academic foundations, ensuring each child develops cognitively, socially, emotionally, and physically.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Certified Teachers', val: '12+', icon: '👩‍🏫' },
                { label: 'Happy Students', val: '500+', icon: '👶' },
                { label: 'Programs Offered', val: '8', icon: '📚' },
                { label: 'Parent Satisfaction', val: '98%', icon: '❤️' },
              ].map(s => (
                <div key={s.label} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <p className="font-display font-bold text-navy-800 text-xl leading-none">{s.val}</p>
                    <p className="text-gray-500 text-xs">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about">
              <Button variant="primary" size="lg">Discover Our Story →</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials Section ─────────────────────────────────────────────────────

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-navy-800 to-navy-950" aria-labelledby="testimonials-heading">
      <div className="section-wrapper">
        <SectionHeader
          eyebrow="Parent Stories"
          title="What Parents Say"
          subtitle="Hear from the families who trust us with their most precious ones."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

const TestimonialCard: React.FC<{ testimonial: typeof TESTIMONIALS[number] }> = ({ testimonial }) => {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <span className="quote-mark">"</span>
      <StarRating rating={testimonial.rating} size={14} />
      <p className="text-white/85 text-sm leading-relaxed mt-3 mb-5 relative z-10">"{testimonial.text}"</p>
      <div className="flex items-center gap-3">
        <Avatar initials={testimonial.avatarInitials} colorClass={testimonial.avatarColor} size="md" />
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.parentName}</p>
          <p className="text-white/60 text-xs">Parent of {testimonial.childName} · {testimonial.childClass}</p>
        </div>
      </div>
    </div>
  )
}

// ─── CTA Section ──────────────────────────────────────────────────────────────

const CTASection: React.FC = () => {
  return (
    <section className="section-padding bg-warm-50" aria-labelledby="cta-heading">
      <div className="section-wrapper">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {/* Background image */}
          <img src={IMGS.schoolGate} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 to-navy-800/90" />

          <div className="relative z-10 p-10 md:p-16 text-center space-y-6">
            <div className="absolute inset-0 pattern-dots opacity-20 rounded-3xl" aria-hidden="true" />
            <div className="relative z-10 space-y-6">
              <Badge variant="gold" size="md">🎓 Limited Seats Available</Badge>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                Give Your Child the Best Start
              </h2>
              <p className="text-white/75 text-lg max-w-xl mx-auto">
                Join the Shivam family today. Applications for 2025–26 are now open. Visit us or apply online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/admissions/apply">
                  <Button variant="gold" size="xl">Apply Now — It's Free</Button>
                </Link>
                <Link to="/appointments">
                  <Button size="xl" className="!bg-white/10 !text-white hover:!bg-white/20 !border-white/30">
                    Book a School Visit
                  </Button>
                </Link>
              </div>
              <p className="text-white/50 text-sm">📍 {SCHOOL_INFO.location.fullAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Home Page ────────────────────────────────────────────────────────────────

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <ProgramsSection />
      <GallerySection />
      <FacilitiesSection />
      <FeaturesSection />
      <CelebrationsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

export default HomePage