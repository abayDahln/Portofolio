'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Section, Container, SectionLabel } from '@/components/section'
import { CTAButton } from '@/components/cta-button'
import { ProjectCard } from '@/components/project-card'
import { BlogCard } from '@/components/blog-card'
import { personalData, projects, blogPosts, stats } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

export default function HomePage() {
  const { language, t } = useLanguage()
  const featuredProjects = projects.slice(0, 2).map((project) => ({
    ...project,
    name: project.name[language],
    description: project.description[language],
    status: project.status[language],
  }))
  const recentPosts = blogPosts.slice(0, 3).map((post) => ({
    ...post,
    title: post.title[language],
    excerpt: post.excerpt[language],
    readTime: post.readTime[language],
  }))

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="md:min-h-[calc(100vh-3.5rem)] flex flex-col justify-between border-b border-border"
        id="hero"
        aria-label="Hero"
      >
        <Container className="flex flex-col md:flex-1 md:justify-center pt-10 md:pt-16 pb-10 md:pb-16">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 border border-border px-3 py-1.5 w-fit mb-10">
            <span className="w-1.5 h-1.5 bg-black" aria-hidden="true" />
            <span className="text-xs uppercase tracking-widest font-medium">
              {t.home.availability}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(3rem,10vw,7rem)] font-black leading-[0.92] tracking-tighter mb-8 text-balance">
            {t.home.heroTitle}
          </h1>

          {/* Sub-line */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-10">
            {t.home.heroDescription.replace('{name}', personalData.name).replace('{about}', t.home.heroAbout)}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <CTAButton href="/projects" variant="primary" size="lg">
              {t.home.viewProjects}
              <ArrowRight size={16} className="ml-2" aria-hidden="true" />
            </CTAButton>
            <CTAButton href="/about" variant="outline" size="lg">
              {t.home.aboutMe}
            </CTAButton>
          </div>
        </Container>

        {/* Stats bar */}
        <div className="border-t border-border">
          <Container className="py-0">
            <dl className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, i) => {
                const statLabels = [t.home.stats.projects, t.home.stats.experience, t.home.stats.openSource, t.home.stats.articles]

                return (
                <div
                  key={stat.label}
                  className='py-5 pl-6'>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    {statLabels[i]}
                  </dt>
                  <dd className="text-3xl font-black tracking-tighter">{stat.value}</dd>
                </div>
                )
              })}
            </dl>
          </Container>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────── */}
      <Section borderBottom>
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <SectionLabel>{t.home.featuredProjectsSubtitle}</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-balance">
                {t.home.featuredProjects}
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden md:flex items-center gap-2 text-sm font-medium relative text-muted-foreground hover:text-foreground transition-colors duration-150 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-foreground after:w-0 hover:after:w-full after:transition-all after:duration-150">
              {t.home.allProjects}
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-border">
            {featuredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                {...project}
                className={[
                  'border-0',
                  i === 0 ? 'md:border-r border-b md:border-b-0 border-border ' : '',
                ].join(' ')}
              />
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <CTAButton href="/projects" variant="outline" className="w-full justify-center">
              {t.home.allProjects}
              <ArrowRight size={14} className="ml-2" aria-hidden="true" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* ── RECENT WRITING ───────────────────────────────── */}
      <Section borderBottom>
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <SectionLabel>{t.home.recentArticlesSubtitle}</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter">
                {t.home.recentArticles}
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:flex items-center gap-2 text-sm font-medium relative text-muted-foreground hover:text-foreground transition-colors duration-150 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-foreground after:w-0 hover:after:w-full after:transition-all after:duration-150">
              {t.home.allArticles}
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="border-t border-black">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} {...post} variant="list" />
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <CTAButton href="/blog" variant="outline" className="w-full justify-center">
              {t.home.allArticles}
              <ArrowRight size={14} className="ml-2" aria-hidden="true" />
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* ── CONTACT STRIP ────────────────────────────────── */}
      <section className="bg-black text-white py-20 md:py-28" aria-label="Contact">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50 mb-3">
                {t.home.contactTitle}
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-balance">
                {t.home.contactSubtitle}
              </h2>
            </div>
            <a
              href={`mailto:${personalData.contact.email}`}
              className="inline-flex items-center gap-3 border border-white px-8 py-4 text-base font-medium hover:bg-white hover:text-black transition-colors duration-150 shrink-0"
            >
              {t.home.contactButton}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
