import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Trophy, Medal } from 'lucide-react'
import { Section, Container, SectionLabel } from '@/components/section'
import { achievementsData } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'
import { LANGUAGE_COOKIE_NAME, resolveLanguage, translations } from '@/lib/translations'

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const language = resolveLanguage(cookieStore.get(LANGUAGE_COOKIE_NAME)?.value)
  const t = translations[language]

  return {
    title: t.achievements.pageTitle,
    description: t.achievements.pageDescription,
  }
}

export default async function AchievementsPage() {
  const cookieStore = await cookies()
  const language = resolveLanguage(cookieStore.get(LANGUAGE_COOKIE_NAME)?.value)
  const t = translations[language]
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

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'trophy':
        return <Trophy className="w-5 h-5" />
      case 'medal':
        return <Medal className="w-5 h-5" />
      default:
        return <Trophy className="w-5 h-5" />
    }
  }

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
                    <div key={achievement.id} className="group border border-border rounded-lg p-6 transition-colors duration-150 hover:bg-secondary">
                      <div className="flex gap-4">
                        <div className="shrink-0 pt-1 text-foreground">{getIcon(achievement.iconType)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                            <div>
                              <h3 className="text-lg font-bold tracking-tight">{achievement.title}</h3>
                              <p className="text-sm font-semibold text-foreground mt-1">{achievement.rank}</p>
                            </div>
                          </div>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p className="font-medium">{achievement.level}</p>
                            <p>{achievement.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
