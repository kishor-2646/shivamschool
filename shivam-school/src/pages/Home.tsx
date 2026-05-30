import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Badge, SectionHeader, Card, StarRating, Avatar } from '@/components/ui'
import { SCHOOL_INFO, PROGRAMS, FEATURES, STATS, TESTIMONIALS } from '@/constants'
import { useScrollAnimation, useCountUp } from '@/hooks'

// ─── Hero Section ─────────────────────────────────────────────────────────────

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1B3A8C 0%, #0f2460 60%, #1a2c6b 100%)' }}
      aria-label="Hero"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-dots opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Floating circles */}
        {[
          { size: 300, top: '-10%', right: '-5%', opacity: 0.06 },
          { size: 200, bottom: '10%', left: '-5%', opacity: 0.05 },
          { size: 150, top: '40%', right: '15%', opacity: 0.04 },
        ].map((circle, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 border-gold-400"
            style={{
              width: circle.size,
              height: circle.size,
              top: circle.top,
              bottom: circle.bottom as string,
              right: circle.right,
              left: circle.left as string,
              opacity: circle.opacity,
            }}
          />
        ))}

        {/* Floating emoji elements */}
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
              <Badge variant="gold" size="md">
                🎉 Admissions Open 2024–25
              </Badge>
              <div className="kannada text-gold-400/80 text-sm font-semibold">
                {SCHOOL_INFO.trustKannada}
              </div>
            </div>

            <div className="space-y-4 animate-slide-up animation-delay-100">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-display font-bold text-white leading-tight">
                <span className="block">{SCHOOL_INFO.heroMessage}</span>
                <span className="block text-gold-400 mt-2 text-3xl md:text-4xl xl:text-5xl italic">
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
                <Button variant="gold" size="lg">
                  Apply for Admission
                </Button>
              </Link>
              <Link to="/appointments">
                <Button variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-navy-800">
                  Book School Visit
                </Button>
              </Link>
            </div>

            {/* Contact quick */}
            <div className="flex items-center gap-6 animate-slide-up animation-delay-400">
              <a
                href={`tel:${SCHOOL_INFO.contact.phone1}`}
                className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition-colors"
              >
                <span className="text-lg" aria-hidden="true">📞</span>
                <span className="font-semibold">{SCHOOL_INFO.contact.phone1Display}</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href={`tel:${SCHOOL_INFO.contact.phone2}`}
                className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition-colors"
              >
                <span className="font-semibold">{SCHOOL_INFO.contact.phone2Display}</span>
              </a>
            </div>
          </div>

          {/* Right — Stats cards */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in animation-delay-500">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}

            {/* Tagline card */}
            <div className="col-span-2 bg-gradient-to-r from-gold-500 to-gold-400 rounded-2xl p-5 text-center shadow-glow">
              <p className="text-navy-900 font-display font-bold text-lg">{SCHOOL_INFO.tagline}</p>
              <p className="text-navy-700 text-sm mt-1">Shivam Public School, Kodipura</p>
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
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center hover:bg-white/15 transition-colors"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-3xl mb-2" aria-hidden="true">{stat.icon}</div>
      <div className="text-2xl font-display font-bold text-white">
        {count}{stat.suffix}
      </div>
      <div className="text-white/70 text-xs font-semibold mt-1 uppercase tracking-wide">{stat.label}</div>
    </div>
  )
}

// ─── Programs Section ─────────────────────────────────────────────────────────

const ProgramsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="section-padding bg-warm-50" aria-labelledby="programs-heading">
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
              <Card
                hover
                shine
                padding="md"
                className="h-full group"
                style={{ animationDelay: `${i * 80}ms` } as React.CSSProperties}
              >
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
                    Learn More
                    <span aria-hidden="true">→</span>
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

// ─── Features Section ─────────────────────────────────────────────────────────

const FeaturesSection: React.FC = () => {
  return (
    <section className="section-padding bg-white" aria-labelledby="features-heading">
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
      className={`text-center p-5 rounded-2xl border border-gray-100 hover:border-gold-200 bg-white hover:bg-gold-50/30 transition-all duration-300 hover:-translate-y-1 group
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">{feature.icon}</div>
      <h3 className="font-bold text-navy-800 text-sm leading-snug group-hover:text-gold-600 transition-colors">{feature.title}</h3>
      <p className="text-gray-500 text-xs mt-1.5 leading-relaxed line-clamp-3 hidden sm:block">{feature.description}</p>
    </div>
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
        {/* Override subtitle color for dark bg */}
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
      <span className="quote-mark" aria-hidden="true">"</span>
      <StarRating rating={testimonial.rating} size={14} />
      <p className="text-white/85 text-sm leading-relaxed mt-3 mb-5 relative z-10">
        "{testimonial.text}"
      </p>
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
        <div className="bg-gradient-to-br from-navy-800 to-navy-950 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30" aria-hidden="true" />
          <div className="relative z-10 space-y-6">
            <Badge variant="gold" size="md">🎓 Limited Seats Available</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Give Your Child the Best Start
            </h2>
            <p className="text-white/75 text-lg max-w-xl mx-auto">
              Join the Shivam family today. Applications for 2024–25 are now open. Visit us or apply online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions/apply">
                <Button variant="gold" size="xl">
                  Apply Now — It's Free
                </Button>
              </Link>
              <Link to="/appointments">
                <Button size="xl" className="!bg-white/10 !text-white hover:!bg-white/20 !border-white/30">
                  Book a School Visit
                </Button>
              </Link>
            </div>
            <p className="text-white/50 text-sm">
              📍 {SCHOOL_INFO.location.fullAddress}
            </p>
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
      <ProgramsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

export default HomePage
