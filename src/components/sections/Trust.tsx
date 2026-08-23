import { cn } from '@/lib/utils'
import { Languages, Lock, Mic, Gift, UserRoundX } from 'lucide-react'

const trustItems = [
  { label: '12 languages', Icon: Languages },
  { label: '100% on-device', Icon: Lock },
  { label: 'Records to .m4a', Icon: Mic },
  { label: 'Free, MIT licensed', Icon: Gift },
  { label: 'No account needed', Icon: UserRoundX },
]

export function Trust() {
  return (
    <section
      id="trust"
      className={cn('py-16 md:py-24 px-6', 'bg-[var(--tn-blue-light)]/20 border-y border-[var(--border)]')}
      aria-label="What TopNotch gives you"
    >
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 md:gap-6">
        {trustItems.map(({ label, Icon }) => (
          <li
            key={label}
            className={cn(
              'flex items-center gap-2 rounded-full px-4 py-2',
              'border border-[var(--tn-blue)]/30 bg-white/60 text-[var(--tn-blue)] backdrop-blur-sm'
            )}
          >
            <Icon size={15} strokeWidth={2} className="shrink-0" aria-hidden="true" />
            <span className="text-sm font-medium whitespace-nowrap">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
