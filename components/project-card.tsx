import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  number: string
  name: string
  description: string
  tags: string[]
  year: string
  status: string
  url: string
  className?: string
}

export function ProjectCard({
  number,
  name,
  description,
  tags,
  year,
  status,
  url,
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={url}
      className={cn(
        'group relative flex flex-col border border-border p-6 md:p-8',
        'bg-background hover:bg-foreground transition-colors duration-200',
        'cursor-pointer',
        className,
      )}
      aria-label={`View ${name} project`}
    >
      {/* Top row: number + year */}
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-xs text-muted-foreground group-hover:text-background/50 transition-colors duration-200">
          {number}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground group-hover:text-background/50 transition-colors duration-200">
            {year}
          </span>
          <span className="text-xs uppercase tracking-wider border border-current px-2 py-0.5 group-hover:border-background/40 transition-colors duration-200">
            {status}
          </span>
        </div>
      </div>

      {/* Project name */}
      <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3 group-hover:text-background transition-colors duration-200 text-balance">
        {name}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-background/70 transition-colors duration-200 mb-6 flex-1">
        {description}
      </p>

      {/* Bottom row: tags + arrow */}
      <div className="flex items-end justify-between gap-4 mt-auto">
        <ul className="flex flex-wrap gap-2" role="list" aria-label="Technologies">
          {tags.map((tag) => (
            <li
              key={tag}
              className="text-xs uppercase tracking-wider border border-border group-hover:border-background/40 px-2 py-0.5 group-hover:text-background transition-colors duration-200"
            >
              {tag}
            </li>
          ))}
        </ul>
        <ArrowUpRight
          size={20}
          className="shrink-0 text-foreground group-hover:text-background transition-colors duration-200"
          aria-hidden="true"
        />
      </div>
    </Link>
  )
}
