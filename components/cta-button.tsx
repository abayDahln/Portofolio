import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  className?: string
  external?: boolean
  size?: 'default' | 'sm' | 'lg'
}

export function CTAButton({
  href,
  children,
  variant = 'primary',
  className,
  external = false,
  size = 'default',
}: CTAButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-medium tracking-wide',
    'border border-border transition-colors duration-150 cursor-pointer',
    'rounded-none select-none',
    size === 'sm' && 'px-4 py-2 text-sm',
    size === 'default' && 'px-6 py-3 text-sm',
    size === 'lg' && 'px-8 py-4 text-base',
    variant === 'primary' &&
      'bg-foreground text-background hover:bg-background hover:text-foreground',
    variant === 'outline' &&
      'bg-background text-foreground hover:bg-foreground hover:text-background',
    className,
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={baseStyles}>
      {children}
    </Link>
  )
}
