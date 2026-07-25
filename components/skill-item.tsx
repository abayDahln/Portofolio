import { cn } from '@/lib/utils'
import { skillUrls } from '@/lib/data'

interface SkillItemProps {
  skill: string
  className?: string
}

export function SkillItem({ skill, className }: SkillItemProps) {
  const url = skillUrls[skill]

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
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-foreground after:transition-all after:duration-150 after:w-0 hover:after:w-full"
        >
          {skill}
        </a>
      ) : (
        <span className="text-sm font-medium">{skill}</span>
      )}
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
