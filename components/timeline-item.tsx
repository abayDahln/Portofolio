import { cn } from '@/lib/utils'

interface TimelineItemProps {
  year: string
  role: string
  company: string
  companyUrl?: string
  description: string
  isLast?: boolean
  className?: string
}

export function TimelineItem({
  year,
  role,
  company,
  companyUrl,
  description,
  isLast = false,
  className,
}: TimelineItemProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 py-8',
        !isLast && 'border-b border-border',
        className,
      )}
    >
      {/* Year */}
      <div>
        <time className="font-mono text-sm text-muted-foreground uppercase tracking-wider">
          {year}
        </time>
      </div>

      {/* Content */}
      <div>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-2">
          <h3 className="text-base font-bold tracking-tight">{role}</h3>
          <span className="text-muted-foreground text-sm">|</span>
          {companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-muted-foreground after:transition-all after:duration-150 after:w-0 hover:after:w-full"
            >
              {company}
            </a>
          ) : (
            <span className="text-sm text-muted-foreground">{company}</span>
          )}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}
