'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { usePostLikes } from '@/lib/use-post-likes'

interface PostCardProps {
  id: number
  images: string[]
  date: string
  dateISO: string
  title: string
  excerpt: string
  slug: string
  variant?: 'card' | 'compact'
  className?: string
}

export function PostCard({
  id,
  images,
  date,
  dateISO,
  title,
  excerpt,
  slug,
  variant = 'card',
  className,
}: PostCardProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const { likes, liked, toggleLike } = usePostLikes(dateISO, id)
  const thumbnail = images?.[0] ?? '/placeholder.svg'
  const isPlaceholder = thumbnail === '/placeholder.svg'
  const src = mounted && resolvedTheme === 'dark' && isPlaceholder ? '/placeholder-dark.svg' : thumbnail

  if (variant === 'compact') {
    return (
      <div className={cn('group border-b border-border py-5', className)}>
        <div className="flex items-start gap-4">
          <Link href={slug} className="shrink-0">
            <div className="relative w-16 h-16 border border-border overflow-hidden">
              <Image
                src={src}
                alt={title}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
          </Link>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <Link href={slug} className="min-w-0">
                <h3 className="text-sm font-semibold tracking-tight group-hover:underline mb-0.5 text-balance">
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-1">
                  {excerpt}
                </p>
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  toggleLike()
                }}
                className="shrink-0 flex items-center gap-1 text-xs pt-0.5"
                aria-label={liked ? 'Unlike' : 'Like'}
              >
                <Heart
                  size={14}
                  className={cn(
                    'transition-colors duration-150',
                    liked ? 'fill-foreground text-foreground' : 'text-muted-foreground hover:text-foreground'
                  )}
                  aria-hidden="true"
                />
                <span className={liked ? 'text-foreground font-medium' : 'text-muted-foreground'}>
                  {likes}
                </span>
              </button>
            </div>
            <p className="text-[11px] text-muted-foreground/60 mt-1">{date}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn(
      'group border border-border bg-background',
      'hover:-translate-x-0.5 hover:-translate-y-0.5',
      'hover:shadow-[4px_4px_0px_0px_var(--border)]',
      'transition-[transform,box-shadow] duration-200 ease-out',
      className,
    )}>
      <Link href={slug} className="block">
        <div className="relative w-full aspect-[4/3] border-b border-border overflow-hidden">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <Link href={slug} className="min-w-0 flex-1">
            <h3 className="text-base font-bold tracking-tight mb-1 text-balance">
              {title}
            </h3>
          </Link>
          <button
            onClick={(e) => {
              e.preventDefault()
              toggleLike()
            }}
            className="shrink-0 flex items-center gap-1.5 pt-0.5"
            aria-label={liked ? 'Unlike' : 'Like'}
          >
            <Heart
              size={18}
              className={cn(
                'transition-colors duration-150',
                liked ? 'fill-foreground text-foreground' : 'text-muted-foreground hover:text-foreground'
              )}
              aria-hidden="true"
            />
            <span className={cn(
              'text-sm',
              liked ? 'text-foreground font-semibold' : 'text-muted-foreground'
            )}>
              {likes}
            </span>
          </button>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
          {excerpt}
        </p>
        <p className="text-[11px] text-muted-foreground/60">{date}</p>
      </div>
    </div>
  )
}
