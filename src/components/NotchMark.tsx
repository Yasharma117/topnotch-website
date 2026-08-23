import Image from 'next/image'

/** The shipped app icon (Assets.xcassets/AppIcon.appiconset), not a stand-in glyph. */
export function NotchMark({ size = 28 }: { size?: number }) {
  return (
    <Image
      src="/topnotch-icon.png"
      alt=""
      width={size}
      height={size}
      className="rounded-[22%]"
      aria-hidden="true"
    />
  )
}
