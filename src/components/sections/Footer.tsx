'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

const footerLinks = {
  product: [
    { label: 'Features', href: '#features', external: false },
    { label: 'How it works', href: '#how-it-works', external: false },
    { label: 'Use cases', href: '#use-cases', external: false },
    { label: 'FAQ', href: '#faq', external: false },
    { label: 'Changelog', href: 'https://github.com/Yasharma117/TopNotch/releases', external: true },
  ],
  company: [
    { label: 'About', href: 'https://8bityash.vercel.app', external: true },
    { label: 'Blog', href: 'https://8bityash.vercel.app/blog', external: true },
    { label: 'Privacy', href: '#privacy', external: false },
    { label: 'Terms', href: '#terms', external: false },
    { label: 'Contact', href: 'mailto:yash@8bityash.vercel.app', external: false },
  ],
  resources: [
    { label: 'GitHub', href: 'https://github.com/Yasharma117/TopNotch', external: true },
    { label: 'Issues', href: 'https://github.com/Yasharma117/TopNotch/issues', external: true },
    { label: 'Discussions', href: 'https://github.com/Yasharma117/TopNotch/discussions', external: true },
    { label: 'License (MIT)', href: 'https://github.com/Yasharma117/TopNotch/blob/main/LICENSE', external: true },
  ],
  social: [
    { label: 'Twitter', href: 'https://twitter.com/yashsharma71102', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yashsharma71102', external: true },
    { label: 'GitHub', href: 'https://github.com/Yasharma117', external: true },
    { label: 'Portfolio', href: 'https://8bityash.vercel.app', external: true },
  ],
}

export function Footer() {
  return (
    <footer
      className={cn('py-16 md:py-24 px-6', 'bg-white border-t border-[var(--border)]')}
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl">
        {/* Main grid - 4 columns + brand */}
        <div className="grid gap-8 md:grid-cols-[1.5fr_repeat(3,1fr)] lg:grid-cols-[1.5fr_repeat(3,1fr)] mb-16">
          {/* Brand column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2" aria-label="TopNotch home">
              <svg width="32" height="32" viewBox="-105 0 210 44" fill="none" aria-hidden="true">
                <path
                  d="M -85 44 H 85 A 20 20 0 0 1 105 24 V 20 A 20 20 0 0 1 85 0 H -85 A 20 20 0 0 1 -105 20 V 24 A 20 20 0 0 1 -85 44 Z"
                  fill="#0a0a0a"
                  stroke="#4297F7"
                  strokeWidth="1.5"
                />
                <circle cx="0" cy="6" r="3" fill="#4297F7" opacity="0.8" />
              </svg>
              <span className="text-2xl font-bold text-[#0a0a0a] tracking-tight">TopNotch</span>
            </Link>

            <p className="text-[#444] leading-relaxed max-w-xs">
              The teleprompter that lives in your Mac&rsquo;s notch. Free, on-device, built for Indian creators.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/yashsharma71102"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-lg',
                  'bg-[var(--muted)] text-[var(--muted-foreground)]',
                  'hover:bg-[var(--tn-blue)]/10 hover:text-[var(--tn-blue)]',
                  'transition-colors duration-200'
                )}
                aria-label="Twitter"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 9.24-3.363 1-7.59-8.63-7.59 8.63-3.363-1 8.502-9.24-7.227-8.26h3.308l4.523 5.17 4.523-5.17z" />
                </svg>
              </a>
              <a
                href="https://github.com/Yasharma117/TopNotch"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-lg',
                  'bg-[var(--muted)] text-[var(--muted-foreground)]',
                  'hover:bg-[var(--tn-blue)]/10 hover:text-[var(--tn-blue)]',
                  'transition-colors duration-200'
                )}
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/yashsharma71102"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-lg',
                  'bg-[var(--muted)] text-[var(--muted-foreground)]',
                  'hover:bg-[var(--tn-blue)]/10 hover:text-[var(--tn-blue)]',
                  'transition-colors duration-200'
                )}
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:yash@8bityash.vercel.app"
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-lg',
                  'bg-[var(--muted)] text-[var(--muted-foreground)]',
                  'hover:bg-[var(--tn-blue)]/10 hover:text-[var(--tn-blue)]',
                  'transition-colors duration-200'
                )}
                aria-label="Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product column */}
          <nav aria-label="Product links">
            <h3 className="mb-4 font-semibold text-[#0a0a0a]">Product</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm text-[#444] hover:text-[var(--tn-blue)] transition-colors',
                      link.external && 'underline-offset-2 hover:underline'
                    )}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company column */}
          <nav aria-label="Company links">
            <h3 className="mb-4 font-semibold text-[#0a0a0a]">Company</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm text-[#444] hover:text-[var(--tn-blue)] transition-colors',
                      link.external && 'underline-offset-2 hover:underline'
                    )}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources column */}
          <nav aria-label="Resources links">
            <h3 className="mb-4 font-semibold text-[#0a0a0a]">Resources</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm text-[#444] hover:text-[var(--tn-blue)] transition-colors',
                      link.external && 'underline-offset-2 hover:underline'
                    )}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="mb-8 border-t border-[var(--border)]" />

        {/* Bottom row - copyright + badges */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} TopNotch. Built by{' '}
            <a href="https://8bityash.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--tn-blue)] hover:underline font-medium">
              Yash Sharma
            </a>
            {' '}· Released under MIT License.
          </p>

          {/* Bottom badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium',
              'bg-[var(--tn-blue)]/10 text-[var(--tn-blue)] border border-[var(--tn-blue)]/20'
            )}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              App Store
            </span>
            <span className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium',
              'bg-[var(--tn-rose)]/10 text-[var(--tn-rose)] border border-[var(--tn-rose)]/20'
            )}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Product Hunt #4
            </span>
            <span className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium',
              'bg-green-500/10 text-green-600 border border-green-500/20'
            )}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
              100% on-device
            </span>
            <span className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium',
              'bg-purple-500/10 text-purple-600 border border-purple-500/20'
            )}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Open source
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}