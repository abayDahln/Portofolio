'use client'

import { ArrowUpRight } from 'lucide-react'
import { Section, Container, SectionLabel } from '@/components/section'
import { ProjectCard } from '@/components/project-card'
import { CTAButton } from '@/components/cta-button'
import { personalData, projects } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

export default function ProjectsPage() {
  const { language, t } = useLanguage()
  const localizedProjects = projects.map((project) => ({
    ...project,
    name: project.name[language],
    description: project.description[language],
    status: project.status[language],
  }))

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <Section borderBottom tight className="relative overflow-hidden">
        {/* Background Video Loop */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/project-background.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

        <Container className="relative z-20 pt-28 md:pt-40"> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end">
            <div>
              <h1
                className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-balance text-white"
                style={{
                  textShadow: "0 4px 20px rgba(0,0,0,.55)",
                }}
              >
                {t.projects.pageTitle}
              </h1>
              <p
              className="text-xl text-white/90 leading-relaxed max-w-md pt-3 md:pt-6"
              style={{
                textShadow: "0 2px 12px rgba(0,0,0,.45)",
              }}
            >
              {t.projects.pageDescription}
            </p>
            </div>
            
          </div>
        </Container>
      </Section>

      {/* ── PROJECT GRID ─────────────────────────────────── */}
      <Section borderBottom>
        <Container>
          {/* Count header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {t.projects.allProjects}
            </p>
            <p className="font-mono text-sm text-muted-foreground">
              {String(localizedProjects.length).padStart(2, '0')} {t.projects.total}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 border border-border">
            {localizedProjects.map((project, i) => {
              const isLeftCol = i % 2 === 0
              const isLastRow = i >= localizedProjects.length - (localizedProjects.length % 2 === 0 ? 2 : 1)
              return (
                <ProjectCard
                  key={project.id}
                  {...project}
                  className={[
                    'border-0',
                    isLeftCol && i < localizedProjects.length - 1 ? 'md:border-r border-border' : '',
                    !isLastRow || (localizedProjects.length % 2 !== 0 && i < localizedProjects.length - 1)
                      ? 'border-b border-border'
                      : '',
                    localizedProjects.length % 2 === 0 && isLastRow ? '' : '',
                  ].join(' ')}
                />
              )
            })}
          </div>
        </Container>
      </Section>

      {/* ── PROCESS STRIP ────────────────────────────────── */}
      <Section borderBottom tight>
        <Container>
          <SectionLabel>{t.projects.process}</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
            {[
              {
                step: '01',
                title: t.projects.processSteps.defineTitle,
                description: t.projects.processSteps.defineDescription,
              },
              {
                step: '02',
                title: t.projects.processSteps.designTitle,
                description: t.projects.processSteps.designDescription,
              },
              {
                step: '03',
                title: t.projects.processSteps.shipTitle,
                description: t.projects.processSteps.shipDescription,
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className={[
                  'p-6 md:p-8',
                  i < 2 ? 'border-b md:border-b-0 md:border-r border-border' : '',
                ].join(' ')}
              >
                <p className="font-mono text-xs text-muted-foreground mb-4">{item.step}</p>
                <h3 className="text-xl font-bold tracking-tight mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── COLLABORATION CTA ────────────────────────────── */}
      <Section>
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <SectionLabel>{t.projects.collaborate}</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-balance">
                {t.projects.projectIdeaTitle}
              </h2>
              <p className="text-muted-foreground text-sm mt-2 max-w-sm leading-relaxed">
                {t.projects.projectIdeaDescription}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <CTAButton href={`mailto:${personalData.contact.email}`} variant="primary" external>
                {t.projects.getInTouch}
                <ArrowUpRight size={14} className="ml-2" aria-hidden="true" />
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
