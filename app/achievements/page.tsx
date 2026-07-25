'use client'

import { Section, Container, SectionLabel } from '@/components/section'
import { AchievementCard } from '@/components/achievement-card'
import { achievementsData } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

export default function AchievementsPage() {
  const { language, t } = useLanguage()
  const achievementsByYear = achievementsData.reduce((acc, achievement) => {
    const year = achievement.year
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(achievement)
    return acc
  }, {} as Record<number, typeof achievementsData>)

  const sortedYears = Object.keys(achievementsByYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <>
      <Section borderBottom tight>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end">
            <div>
              <SectionLabel>{t.achievements.recognition}</SectionLabel>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-balance">{t.achievements.pageTitle}</h1>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">{t.achievements.pageDescription}</p>
          </div>
        </Container>
      </Section>

      <Section borderBottom>
        <Container>
          <div className="space-y-12">
            {sortedYears.map((year) => (
              <div key={year}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-2xl font-black tracking-tighter text-muted-foreground">{year}</div>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="space-y-4 ml-0 md:ml-8">
                  {achievementsByYear[year].map((achievement) => (
                    <AchievementCard
                      key={achievement.id}
                      id={achievement.id}
                      title={achievement.title}
                      rank={achievement.rank}
                      level={achievement.level}
                      location={achievement.location}
                      year={achievement.year}
                      iconType={achievement.iconType as 'trophy' | 'medal'}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section borderBottom>
        <Container>
          <SectionLabel>{t.achievements.summary}</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-4 border border-border md:divide-x sm:divide-x divide-border">
            {[
              { label: t.achievements.total, value: String(achievementsData.length).padStart(2, '0') },
              {
                label: t.achievements.firstPlace,
                value: String(achievementsData.filter((a) => a.rank.includes('1st')).length).padStart(2, '0'),
              },
              {
                label: t.achievements.secondPlace,
                value: String(achievementsData.filter((a) => a.rank.includes('2nd')).length).padStart(2, '0'),
              },
              { label: t.achievements.yearsActive, value: String(sortedYears.length).padStart(2, '0') },
            ].map((stat) => (
              <div key={stat.label} className="py-8 px-6">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{stat.label}</dt>
                <dd className="text-4xl font-black tracking-tighter">{stat.value}</dd>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
