import { NotchMark } from '@/components/NotchMark'
import { AUTHOR, ISSUES, RELEASES, REPO } from '@/lib/links'

const LINKS = [
  { label: 'GitHub', href: REPO },
  { label: 'Releases', href: RELEASES },
  { label: 'Issues', href: ISSUES },
]

export function Footer() {
  return (
    <footer className="flex flex-col gap-6 px-6 py-10 text-sm text-ink-2 sm:flex-row sm:items-center sm:justify-between md:px-12">
      <p className="flex items-center gap-3">
        <NotchMark size={24} />
        <span>
          TopNotch, made by{' '}
          <a href={AUTHOR} className="text-ink underline decoration-rule hover:decoration-ink">
            Yash Sharma
          </a>
          . MIT licensed.
        </span>
      </p>
      <nav aria-label="Project links" className="flex gap-6">
        {LINKS.map(({ label, href }) => (
          <a key={label} href={href} className="transition-colors hover:text-ink">
            {label}
          </a>
        ))}
      </nav>
    </footer>
  )
}
