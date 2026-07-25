import Link from 'next/link'
import { Trophy, Medal, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AchievementCardProps {
  id: string
  title: string
  rank: string
  level: string
  location: string
  year: number
  iconType: 'trophy' | 'medal'
  className?: string
}

export function AchievementCard({
  id,
  title,
  rank,
  level,
  location,
  year,
  iconType,
  className,
}: AchievementCardProps) {
  const Icon = iconType === 'trophy' ? Trophy : Medal

  return (
    <Link
      href={`/achievements/${id}`}
      className={cn(
        'group block border border-border p-6',
        'bg-background',
        'hover:-translate-x-0.5 hover:-translate-y-0.5',
        'hover:shadow-[4px_4px_0px_0px_var(--border)]',
        'transition-[transform,box-shadow] duration-200 ease-out',
        'cursor-pointer',
        className,
      )}
      aria-label={`View ${title}`}
    >
      <div className="flex gap-4">
        <div className="shrink-0 pt-1 text-foreground">
          <Icon className="w-5 h-5" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
            <div>
              <h3 className="text-lg font-bold tracking-tight">
                {title}
              </h3>
              <p className="text-sm font-semibold text-foreground mt-1">
                {rank}
              </p>
            </div>
            <ArrowUpRight
              size={16}
              className="shrink-0 text-foreground mt-1"
              aria-hidden="true"
            />
          </div>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p className="font-medium">{level}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
