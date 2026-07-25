'use client'

import { Section, Container, SectionLabel } from '@/components/section'
import { PostCard } from '@/components/post-card'
import { blogPosts, personalData } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'
import { CTAButton } from '@/components/cta-button'
import { ArrowUpRight } from 'lucide-react'

export default function PostPage() {
  const { language, t } = useLanguage()
  const localizedPosts = blogPosts.map((post) => ({
    ...post,
    title: post.title[language],
    excerpt: post.excerpt[language],
  }))

  return (
    <>
      <Section borderBottom tight>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end">
            <div>
              <SectionLabel>{t.blog.writing}</SectionLabel>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                {t.blog.pageTitle}
              </h1>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              {t.blog.pageDescription}
            </p>
          </div>
        </Container>
      </Section>

      <Section borderBottom>
        <Container>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {t.blog.allArticles}
            </p>
            <p className="font-mono text-sm text-muted-foreground">
              {String(localizedPosts.length).padStart(2, '0')} {t.blog.posts}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localizedPosts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                images={post.images}
                date={post.date}
                dateISO={post.dateISO}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                variant="card"
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-balance">
                {t.blog.discussArticleTitle}
              </h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {t.blog.discussArticleDescription}
              </p>
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
