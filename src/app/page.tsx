import { Hero } from '@/components/sections/Hero'
import { NotchChrome } from '@/components/NotchChrome'
import { Features } from '@/components/sections/Features'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Trust } from '@/components/sections/Trust'
import { FAQ } from '@/components/sections/FAQ'
import { GetFree } from '@/components/sections/GetFree'
import { Footer } from '@/components/sections/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TopNotch — The teleprompter that lives in your Mac\'s notch',
  description: 'A teleprompter that lives in your Mac’s notch. Hidden from screen shares, follows your voice in 12 languages, and records as you read. Free, and runs entirely on your Mac.',
  openGraph: {
    title: 'TopNotch — The teleprompter that lives in your Mac\'s notch',
    description: 'A teleprompter that lives in your Mac’s notch. Hidden from screen shares, follows your voice in 12 languages, and records as you read. Free, and runs entirely on your Mac.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <NotchChrome />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Trust />
        <FAQ />
        <GetFree />
      </main>
      <Footer />
    </>
  )
}