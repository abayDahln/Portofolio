'use client'

import { ArrowUpRight } from 'lucide-react'
import { Section, Container, SectionLabel } from '@/components/section'
import { BlogCard } from '@/components/blog-card'
import { NewsletterForm } from '@/components/newsletter-form'
import { blogPosts, personalData } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

const topics = ['All', 'Design', 'Engineering', 'Products', 'Process']

export default function BlogPage() {
  const { language, t } = useLanguage()
  const localizedPosts = blogPosts.map((post) => ({
    ...post,
    title: post.title[language],
    excerpt: post.excerpt[language],
    readTime: post.readTime[language],
  }))
  const [featured, ...rest] = localizedPosts

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <Section borderBottom tight>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end">
            <div>
              <SectionLabel>{t.blog.writing}</SectionLabel>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                Blog
              </h1>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              {t.blog.pageDescription}
            </p>
          </div>
        </Container>
      </Section>

      {/* ── FEATURED POST ────────────────────────────────── */}
      <Section borderBottom tight>
        <Container>
          <SectionLabel>{t.blog.latest}</SectionLabel>
          <BlogCard {...featured} variant="featured" />
        </Container>
      </Section>

      {/* ── TOPIC FILTER (static display) ───────────────── */}
      {/* <div className="border-b border-black">
        <Container className="py-0">
          <div className="flex items-center gap-0 overflow-x-auto" role="list" aria-label="Article topics">
            {topics.map((topic, i) => (
              <button
                key={topic}
                role="listitem"
                className={[
                  'px-5 py-4 text-xs uppercase tracking-widest font-medium whitespace-nowrap',
                  'border-r border-black transition-colors duration-150',
                  'hover:bg-black hover:text-white',
                  i === 0 ? 'bg-black text-white' : 'text-muted-foreground',
                ].join(' ')}
              >
                {topic === 'All' ? t.blog.topics.all : topic === 'Design' ? t.blog.topics.design : topic === 'Engineering' ? t.blog.topics.engineering : topic === 'Products' ? t.blog.topics.products : t.blog.topics.process}
              </button>
            ))}
          </div>
        </Container>
      </div> */}

      {/* ── ALL ARTICLES ─────────────────────────────────── */}
      <Section borderBottom>
        <Container>
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-black">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {t.blog.allArticles}
            </p>
            <p className="font-mono text-sm text-muted-foreground">
              {String(localizedPosts.length).padStart(2, '0')} {t.blog.posts}
            </p>
          </div>

          <div>
            {rest.map((post) => (
              <BlogCard key={post.id} {...post} variant="list" />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── WRITING CTA ──────────────────────────────────── */}
      <Section>
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <SectionLabel>{t.blog.connect}</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-balance">
                {t.blog.discussArticleTitle}
              </h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {t.blog.discussArticleDescription}
              </p>
            </div>
            <a
              href={`mailto:${personalData.contact.email}`}
              className="inline-flex items-center gap-2 border border-black px-6 py-3 text-sm font-medium bg-black text-white hover:bg-white hover:text-black transition-colors duration-150 shrink-0"
            >
              {t.blog.sendMessage}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
