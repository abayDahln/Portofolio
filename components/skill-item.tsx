import { cn } from '@/lib/utils'

interface SkillItemProps {
  skill: string
  className?: string
}

export function SkillItem({ skill, className }: SkillItemProps) {
  return (
    <li
      className={cn(
        'flex items-center gap-3 py-2 border-b border-border/30 last:border-b-0',
        'group',
        className,
      )}
    >
      <span
        className="w-1.5 h-1.5 bg-foreground shrink-0"
        aria-hidden="true"
      />
      <span className="text-sm font-medium">{skill}</span>
    </li>
  )
}

interface SkillGroupProps {
  category: string
  skills: string[]
  className?: string
}

export function SkillGroup({ category, skills, className }: SkillGroupProps) {
  return (
    <div className={cn('p-5', className)}>
      <h3 className="text-xs uppercase tracking-widest font-semibold mb-4 pb-3 border-b border-border">
        {category}
      </h3>
      <ul role="list" aria-label={`${category} skills`}>
        {skills.map((skill) => (
          <SkillItem key={skill} skill={skill} />
        ))}
      </ul>
    </div>
  )
}
