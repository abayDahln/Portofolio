'use client'

import { ArrowLeft, ArrowUpRight, GitFork } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Section, Container, SectionLabel } from '@/components/section'
import { CTAButton } from '@/components/cta-button'
import { Carousel } from '@/components/ui/carousel'
import { personalData, projects } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

export default function ProjectDetailPage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const { language, t } = useLanguage()
  const params = useParams()
  const project = projects.find((p) => p.id === Number(params.id))

  if (!project) {
    return (
      <Section borderBottom>
        <Container>
          <div>
            <h1 className="text-4xl font-black tracking-tighter mb-4">Project not found</h1>
            <Link href="/projects" className="text-sm underline hover:no-underline">
              {t.projects.detail.backToProjects}
            </Link>
          </div>
        </Container>
      </Section>
    )
  }

  const name = project.name[language]
  const description = project.description[language]
  const detailDescription = project.detailDescription?.[language] ?? description
  const status = project.status[language]
  const slideImages = (project.images ?? ['/placeholder.svg']).map((img) => ({
    src: mounted && resolvedTheme === 'dark' && img === '/placeholder.svg' ? '/placeholder-dark.svg' : img,
  }))

  return (
    <div className="overflow-x-hidden">
      <Section borderBottom tight>
        <Container>
          <div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-150 mb-8"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              {t.projects.detail.backToProjects}
            </Link>

            <div className="mb-10">
              <Carousel slides={slideImages} aspectRatio="aspect-video" />
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-sm text-muted-foreground">{project.number}</span>
                <span className="text-xs text-muted-foreground">{project.year}</span>
                <span className="text-xs uppercase tracking-wider border border-border px-2 py-0.5">
                  {status}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-none text-balance mb-6">
                {name}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {description}
              </p>

              <p className="text-base text-foreground/80 leading-relaxed mt-6">
                {detailDescription}
              </p>

              <div className="flex flex-wrap gap-2 mt-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-wider border border-border px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                {project.liveUrl && (
                  <CTAButton href={project.liveUrl} variant="primary" external>
                    {t.projects.detail.visitProject}
                    <ArrowUpRight size={14} className="ml-2" aria-hidden="true" />
                  </CTAButton>
                )}
                {project.github && (
                  <CTAButton href={project.github} variant="outline" external>
                    {t.projects.detail.githubRepo}
                    <GitFork size={14} className="ml-2" aria-hidden="true" />
                  </CTAButton>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

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
              <CTAButton href={personalData.contact.emailUrl} variant="primary" external>
                {t.projects.getInTouch}
                <ArrowUpRight size={14} className="ml-2" aria-hidden="true" />
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
