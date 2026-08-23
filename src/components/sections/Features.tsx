import { cn } from '@/lib/utils'
import { AudioLines, Languages, Mic, ListOrdered, Gauge, EyeOff } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  accent?: 'blue' | 'rose' | 'green' | 'purple'
}

const features: Feature[] = [
  {
    icon: <AudioLines size={24} strokeWidth={1.5} />,
    title: 'Follows your voice',
    description: 'The script scrolls at the pace you actually speak — pause, ad-lib, or slow down and it waits for you instead of running ahead.',
    accent: 'blue',
  },
  {
    icon: <EyeOff size={24} strokeWidth={1.5} />,
    title: 'Hidden from screen shares',
    description: 'The panel is excluded from screen capture, so Zoom, Meet, Teams and OBS see your desktop without it. Your audience never sees the script.',
    accent: 'purple',
  },
  {
    icon: <Languages size={24} strokeWidth={1.5} />,
    title: 'Forgiving of how you say it',
    description: 'It does not assume one correct pronunciation — v/w, th/t, z/j and s/sh are treated as interchangeable, so a mishearing does not throw the sync off. Twelve languages, with English (India) as the default.',
    accent: 'blue',
  },
  {
    icon: <Mic size={24} strokeWidth={1.5} />,
    title: 'Records while you read',
    description: 'Captures your mic to AAC .m4a, 44.1 kHz mono, saved straight to your Mac. Drop it into Final Cut, Resolve, or a captions tool.',
    accent: 'green',
  },
  {
    icon: <ListOrdered size={24} strokeWidth={1.5} />,
    title: 'Finds your pauses',
    description: 'Paste a wall of text and TopNotch breaks it into sections at the natural stopping points, so you are not hand-marking every beat.',
    accent: 'rose',
  },
  {
    icon: <Gauge size={24} strokeWidth={1.5} />,
    title: 'Or a steady scroll',
    description: 'Classic mode ignores your voice and scrolls at a fixed speed you set, from 10 to 120 points per second. Predictable when you want predictable.',
    accent: 'blue',
  },
]

const accentStyles = {
  blue: {
    iconBg: 'bg-[var(--tn-blue)]/10',
    iconColor: 'text-[var(--tn-blue)]',
    border: 'border-[var(--tn-blue)]/20',
    hoverBorder: 'hover:border-[var(--tn-blue)]/40',
  },
  purple: {
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-600',
    border: 'border-purple-500/20',
    hoverBorder: 'hover:border-purple-500/40',
  },
  green: {
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-600',
    border: 'border-green-500/20',
    hoverBorder: 'hover:border-green-500/40',
  },
  rose: {
    iconBg: 'bg-[var(--tn-rose)]/10',
    iconColor: 'text-[var(--tn-rose)]',
    border: 'border-[var(--tn-rose)]/20',
    hoverBorder: 'hover:border-[var(--tn-rose)]/40',
  },
}

export function Features() {
  return (
    <section
      id="features"
      className={cn('py-24 md:py-32 px-6', 'bg-white')}
      aria-labelledby="features-title"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--tn-blue)]">
            Features
          </p>
          <h2
            id="features-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-6"
          >
            Built for how <span className="text-[var(--tn-blue)]">you</span> actually talk
          </h2>
          <p className="text-lg text-[#444] leading-relaxed">
            Six things it does, and nothing it doesn&rsquo;t.
          </p>
        </div>

        {/* Feature grid — 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const style = accentStyles[feature.accent || 'blue']
            return (
              <article
                key={index}
                className={cn(
                  'group relative rounded-2xl p-7 md:p-8',
                  'bg-white border transition-all duration-300',
                  'hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]',
                  style.border,
                  style.hoverBorder
                )}
                style={{
                  boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                }}
              >
                {/* Subtle gradient top border */}
                <div
                  className="absolute top-0 left-4 right-4 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: feature.accent === 'blue' ? 'linear-gradient(90deg, transparent, var(--tn-blue), transparent)' :
                                feature.accent === 'purple' ? 'linear-gradient(90deg, transparent, #a855f7, transparent)' :
                                feature.accent === 'green' ? 'linear-gradient(90deg, transparent, #22c55e, transparent)' :
                                'linear-gradient(90deg, transparent, var(--tn-rose), transparent)',
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className={cn(
                    'mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl',
                    'transition-all duration-300',
                    style.iconBg,
                    style.iconColor,
                    'group-hover:scale-110'
                  )}
                  aria-hidden="true"
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-[#0a0a0a] group-hover:text-[var(--tn-blue)] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#444] leading-relaxed text-base">
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>

        <p className="mt-16 text-center text-sm text-[var(--muted-foreground)]">
          Everything runs on your Mac. No signup, no subscription, no network calls — works the same
          on a plane as it does on stage.
        </p>

      </div>
    </section>
  )
}