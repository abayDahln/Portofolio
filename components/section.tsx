import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  borderTop?: boolean
  borderBottom?: boolean
  id?: string
  as?: React.ElementType
  tight?: boolean
}

export function Section({
  children,
  className,
  borderTop = false,
  borderBottom = false,
  id,
  as: Tag = 'section',
  tight = false,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        tight ? 'py-12 md:py-16' : 'py-20 md:py-28',
        borderTop && 'border-t border-border',
        borderBottom && 'border-b border-border',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('max-w-6xl mx-auto px-6 md:px-8 lg:px-12', className)}>
      {children}
    </div>
  )
}

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p className={cn('text-xs uppercase tracking-widest font-medium text-muted-foreground mb-6', className)} >
      {children}
    </p>
  )
}
