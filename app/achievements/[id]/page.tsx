'use client'

import Image from 'next/image'
import { ArrowLeft, Trophy, Medal, MapPin, Calendar } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Section, Container } from '@/components/section'
import { achievementsData } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

export default function AchievementDetailPage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const { language, t } = useLanguage()
  const params = useParams()
  const achievement = achievementsData.find((a) => a.id === params.id)

  if (!achievement) {
    return (
      <Section borderBottom>
        <Container>
          <div className="pt-28 md:pt-40">
            <h1 className="text-4xl font-black tracking-tighter mb-4">Achievement not found</h1>
            <Link href="/achievements" className="text-sm underline hover:no-underline">
              {t.achievements.detail.backToAchievements}
            </Link>
          </div>
        </Container>
      </Section>
    )
  }

  const Icon = achievement.iconType === 'trophy' ? Trophy : Medal
  const isPlaceholder = achievement.image === '/placeholder.jpg' || achievement.image === '/placeholder.svg'
  const imgSrc = mounted && resolvedTheme === 'dark' && isPlaceholder ? '/placeholder-dark.svg' : achievement.image

  return (
    <Section>
      <Container>
        <div className="">
          <Link
            href="/achievement"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-150 mb-8"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            {t.achievements.detail.backToAchievements}
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
            <div className="w-full lg:w-[600px] shrink-0">
              <div className="relative w-full aspect-[4/3] border border-border overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={achievement.title}
                  fill
                  className="object-cover"
                  sizes="400px"
                  priority
                />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-4 mb-6">
                <div className="shrink-0 p-3 border border-border">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-black tracking-tighter leading-tight md:leading-none text-balance mb-3">
                    {achievement.title}
                  </h1>
                  <p className="text-lg font-semibold text-foreground">
                    {achievement.rank}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 border-t border-border pt-6">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-muted-foreground shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{achievement.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-muted-foreground shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{achievement.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
