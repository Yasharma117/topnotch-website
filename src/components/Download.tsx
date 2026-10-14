import { Download as DownloadIcon } from 'lucide-react'
import { LiquidMetalLink } from '@/components/LiquidMetalLink'
import { DMG } from '@/lib/links'

/** The one action on the page. Same button top and bottom; the facts line only once. */
export function Download({ align = 'center', facts = true }: { align?: 'center' | 'start'; facts?: boolean }) {
  const justify = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <div className={`flex flex-col gap-4 ${justify}`}>
      <LiquidMetalLink href={DMG}>
        <DownloadIcon size={17} strokeWidth={2} aria-hidden="true" />
        Download for Mac
      </LiquidMetalLink>
      {facts && (
        <>
          <p className="font-mono text-xs text-ink-2">Free · MIT · macOS 13+ · 3 MB</p>
          <p className="text-sm text-ink-2 sm:hidden">TopNotch is a Mac app — open this page on your Mac to download.</p>
        </>
      )}
    </div>
  )
}
