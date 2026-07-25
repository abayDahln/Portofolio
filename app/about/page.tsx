'use client'

import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { Section, Container, SectionLabel } from '@/components/section'
import { SkillGroup } from '@/components/skill-item'
import { TimelineItem } from '@/components/timeline-item'
import { CTAButton } from '@/components/cta-button'
import { personalData, skills, experience } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

export default function AboutPage() {
  const { language, t } = useLanguage()
  const skillCategories = Object.entries(skills)
  const educationTimeline = experience.map((item) => ({
    ...item,
    year: item.year,
    role: item.role[language],
    company: item.company[language],
    description: item.description[language],
  }))

  return (
    <>
      {/* ── BIOGRAPHY & ABOUT ────────────────────────────── */}
      <Section borderBottom>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            {/* Sidebar */}
            <div>
              <SectionLabel>{t.about.pageTitle}</SectionLabel>

              {/* Theme-responsive Profile Avatar */}
              <div
                className="relative w-full aspect-square border border-border mb-6 bg-secondary overflow-hidden"
                aria-label={personalData.name}
              >
                <Image
                  src="/abby_light.webp"
                  alt={personalData.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover block dark:hidden"
                />
                <Image
                  src="/abby_dark.webp"
                  alt={personalData.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hidden dark:block"
                />
              </div>

              {/* Quick facts */}
              <dl className="space-y-3">
                {[
                  { label: t.about.name, value: personalData.name },
                  { label: t.about.role, value: personalData.role },
                  { label: t.about.email, value: personalData.contact.email },
                  { label: t.about.phone, value: personalData.contact.phone },
                ].map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3">
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground shrink-0 pt-0.5 w-20">
                      {fact.label}
                    </dt>
                    <dd className="text-sm font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Bio content */}
            <div className="space-y-5">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-6">
                {personalData.name}
              </h1>
              <p className="text-lg md:text-xl font-medium leading-relaxed tracking-tight">
                {t.about.pageDescription}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t.about.intro}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t.about.body}
              </p>
              <div className="pt-4 flex flex-wrap gap-3">
                <CTAButton href={personalData.contact.emailUrl} variant="primary" external>
                  {t.about.sayHello}
                  <ArrowUpRight size={14} className="ml-2" aria-hidden="true" />
                </CTAButton>
                <CTAButton href="/projects" variant="outline">
                  {t.about.viewProjects}
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SKILLS ───────────────────────────────────────── */}
      <Section borderBottom>
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <SectionLabel>{t.about.expertise}</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter">
                {t.about.skillsTitle}
              </h2>
            </div>
            <p className="hidden md:block text-sm text-muted-foreground max-w-xs text-right leading-relaxed">
              {t.about.skillsDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
            {skillCategories.map(([category, categorySkills], i) => {
              const col = i % 3
              const row = Math.floor(i / 3)
              const totalRows = Math.ceil(skillCategories.length / 3)
              const isLastRow = row === totalRows - 1
              const isLastCol = col === 2 || i === skillCategories.length - 1

              return (
                <SkillGroup
                  key={category}
                  category={category}
                  skills={categorySkills}
                />
              )
            })}
          </div>
        </Container>
      </Section>

      {/* ── EXPERIENCE TIMELINE ──────────────────────────── */}
      <Section borderBottom>
        <Container>
          <SectionLabel>{t.about.experience}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">
            {t.about.history}
          </h2>

          <div className="border-t border-black">
            {educationTimeline.map((item, i) => (
              <TimelineItem
                key={item.year}
                {...item}
                isLast={i === educationTimeline.length - 1}
              />
            ))}
          </div>
        </Container>
      </Section>  

      {/* ── VALUES STRIP ─────────────────────────────────── */}
      {/* <Section borderBottom tight>
        <Container>
          <SectionLabel>{t.about.values}</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border">
            {[
              { word: 'Clarity', desc: 'Communication and code should be easy to understand.' },
              { word: 'Craft', desc: 'Details matter. The polish is not optional.' },
              { word: 'Speed', desc: 'Fast to ship, fast to run, fast to learn from.' },
              { word: 'Honesty', desc: 'Say what you mean. Build what you promise.' },
            ].map((v, i) => (
              <div
                key={v.word}
                className={[
                  'p-6',
                  i < 3 ? 'border-b sm:border-b-0 sm:border-r md:border-r border-border' : '',
                  i === 1 ? 'sm:border-r-0 md:border-r border-border' : '',
                  i === 2 ? 'sm:border-r border-border border-b-0' : '',
                ].join(' ')}
              >
                <h3 className="text-xl font-black tracking-tight mb-2">{v.word}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section> */}

      {/* ── CTA ──────────────────────────────────────────── */}
      <Section>
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <SectionLabel>{t.about.contactTitle}</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-balance">
                {t.about.readyToBuild}
              </h2>
            </div>
            <CTAButton href={personalData.contact.emailUrl} variant="primary" size="lg" external>
              {t.about.sendMessage}
              <ArrowUpRight size={16} className="ml-2" aria-hidden="true" />
            </CTAButton>
          </div>
        </Container>
      </Section>
    </>
  )
}
