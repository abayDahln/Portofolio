'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Heart } from 'lucide-react'
import { useParams } from 'next/navigation'
import { Section, Container, SectionLabel } from '@/components/section'
import { Carousel } from '@/components/ui/carousel'
import { blogPosts, personalData } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'
import { usePostLikes } from '@/lib/use-post-likes'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { CTAButton } from '@/components/cta-button'

export default function PostDetailPage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const { language, t } = useLanguage()
  const params = useParams()
  const post = blogPosts.find((p) => p.id === Number(params.id))

  if (!post) {
    return (
      <Section borderBottom>
        <Container>
          <div>
            <h1 className="text-4xl font-black tracking-tighter mb-4">Post not found</h1>
            <Link href="/post" className="text-sm underline hover:no-underline">
              {t.blog.detail.backToBlog}
            </Link>
          </div>
        </Container>
      </Section>
    )
  }

  const title = post.title[language]
  const excerpt = post.excerpt[language]
  const content = post.content?.[language] ?? excerpt
  const { likes, liked, toggleLike } = usePostLikes(post.dateISO, post.id)
  const slideImages = (post.images ?? ['/placeholder.svg']).map((img) => ({
    src: mounted && resolvedTheme === 'dark' && img === '/placeholder.svg' ? '/placeholder-dark.svg' : img,
  }))

  return (
    <div className="overflow-x-hidden">
      <Section borderBottom tight>
        <Container>
          <div className="max-w-5xl mx-auto">
            <Link
              href="/post"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-150 mb-8"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              {t.blog.detail.backToBlog}
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              <div className="max-w-lg w-full mx-auto">
                <Carousel slides={slideImages} onLike={toggleLike} liked={liked} />
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  {post.date}
                </p>

                <h1 className="text-2xl md:text-3xl lg:text-5xl font-black tracking-tighter leading-tight md:leading-none text-balance mb-6">
                  {title}
                </h1>

                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {excerpt}
                </p>

                <div className="flex items-center gap-3 pb-8 border-b border-border">
                  <button
                    onClick={toggleLike}
                    className="flex items-center gap-2 text-sm"
                    aria-label={liked ? 'Unlike' : 'Like'}
                  >
                    <Heart
                      size={22}
                      className={liked ? 'fill-foreground text-foreground' : 'text-muted-foreground hover:text-foreground transition-colors duration-150'}
                      aria-hidden="true"
                    />
                    <span className={liked ? 'text-foreground font-semibold' : 'text-muted-foreground'}>
                      {likes} {language === 'id' ? 'suka' : 'likes'}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto text-base leading-relaxed text-foreground/90 space-y-6">
              {content.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
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

    </div>
  )
}
