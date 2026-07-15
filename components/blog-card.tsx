import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BlogCardProps {
  date: string
  title: string
  excerpt: string
  readTime: string
  slug: string
  variant?: 'list' | 'featured'
  className?: string
}

export function BlogCard({
  date,
  title,
  excerpt,
  readTime,
  slug,
  variant = 'list',
  className,
}: BlogCardProps) {
  if (variant === 'featured') {
    return (
      <Link
        href={slug}
        className={cn(
          'group block border border-border p-6 md:p-8',
          'hover:bg-foreground transition-colors duration-200',
          className,
        )}
        aria-label={`Read: ${title}`}
      >
        <p className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-background/50 mb-4 transition-colors duration-200">
          {date} &nbsp;·&nbsp; {readTime}
        </p>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 group-hover:text-background transition-colors duration-200 text-balance">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-background/70 transition-colors duration-200">
          {excerpt}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium group-hover:text-background transition-colors duration-200">
          Read article
          <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-150" />
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={slug}
      className={cn(
        'group block border-b border-border py-6',
        'transition-colors duration-150',
        className,
      )}
      aria-label={`Read: ${title}`}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-8">
        {/* Left: date + content */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 md:gap-8 flex-1">
          <time
            dateTime={date}
            className="text-xs text-muted-foreground uppercase tracking-wider shrink-0 pt-0.5 min-w-[90px]"
          >
            {date}
          </time>
          <div className="flex-1">
            <h3 className="text-base font-semibold tracking-tight group-hover:underline mb-1.5 text-balance">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {excerpt}
            </p>
            <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
              {readTime}
            </p>
          </div>
        </div>

        {/* Arrow */}
        <ArrowRight
          size={16}
          className="shrink-0 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-150 mt-1 hidden md:block"
          aria-hidden="true"
        />
      </div>
    </Link>
  )
}
