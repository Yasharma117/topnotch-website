'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Lock, Mail } from 'lucide-react'
import { GithubMark } from '@/components/GithubMark'
import { NotchMark } from '@/components/NotchMark'

const footerLinks = {
  product: [
    { label: 'Features', href: '#features', external: false },
    { label: 'How it works', href: '#how-it-works', external: false },
    { label: 'FAQ', href: '#faq', external: false },
    { label: 'Changelog', href: 'https://github.com/Yasharma117/TopNotch/releases', external: true },
  ],
  company: [
    { label: 'About', href: 'https://8bityash.vercel.app', external: true },
    { label: 'Contact', href: 'mailto:yash@8bityash.vercel.app', external: false },
  ],
  resources: [
    { label: 'GitHub', href: 'https://github.com/Yasharma117/TopNotch', external: true },
    { label: 'Issues', href: 'https://github.com/Yasharma117/TopNotch/issues', external: true },
  ],
  social: [
    { label: 'X (Twitter)', href: 'https://twitter.com/yashsharma71102', external: true },
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
              <NotchMark size={32} />
              <span className="text-2xl font-bold text-[#0a0a0a] tracking-tight">TopNotch</span>
            </Link>

            <p className="text-[#444] leading-relaxed max-w-xs">
              A teleprompter that lives in your Mac&rsquo;s notch — hidden from screen shares, and built for the way Indian English actually sounds.
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
                aria-label="X (formerly Twitter)"
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
                <GithubMark size={18} />
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
                <Mail size={18} strokeWidth={2} aria-hidden="true" />
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
            {' '}· Released under the MIT License.
          </p>

          {/* Bottom badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            
            
            <span className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium',
              'bg-green-500/10 text-green-600 border border-green-500/20'
            )}>
              <Lock size={12} strokeWidth={2} aria-hidden="true" />
              100% on-device
            </span>
            <span className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium',
              'bg-purple-500/10 text-purple-600 border border-purple-500/20'
            )}>
              <GithubMark size={12} />
              MIT licensed
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}