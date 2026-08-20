import { Hero } from '@/components/sections/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TopNotch — The teleprompter that lives in your Mac\'s notch',
  description: 'Read your script, record your voice, stay eye-to-eye with the camera. Free, on-device, supports 11 Indian languages.',
  openGraph: {
    title: 'TopNotch — The teleprompter that lives in your Mac\'s notch',
    description: 'Read your script, record your voice, stay eye-to-eye with the camera. Free, on-device, supports 11 Indian languages.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
    </>
  )
}