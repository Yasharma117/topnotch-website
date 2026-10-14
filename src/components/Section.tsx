/** A crop mark: the "+" a page proof carries where its trim lines cross. */
function Mark({ className }: { className: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden="true" className={`absolute -top-[5.5px] text-ink-2/60 ${className}`}>
      <path d="M5.5 0v11M0 5.5h11" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

/** A band of the framed page: hairline on top, crop marks where it meets the rails. */
export function Section({
  children,
  className = '',
  ...props
}: React.ComponentProps<'section'>) {
  return (
    <section className={`relative border-t border-rule ${className}`} {...props}>
      <Mark className="-left-[5.5px]" />
      <Mark className="-right-[5.5px]" />
      {children}
    </section>
  )
}

/** Small mono label that names a section, the way a spec sheet labels its parts. */
export function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[11px] tracking-[0.12em] text-ink-2 uppercase">{children}</p>
}
