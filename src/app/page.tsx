import { Hero } from '@/components/sections/Hero'
import { Nav } from '@/components/sections/Nav'
import { Pain } from '@/components/sections/Pain'
import { Solution } from '@/components/sections/Solution'
import { Features } from '@/components/sections/Features'
import { Comparison } from '@/components/sections/Comparison'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { UseCases } from '@/components/sections/UseCases'
import { Testimonials } from '@/components/sections/Testimonials'
import { Trust } from '@/components/sections/Trust'
import { FAQ } from '@/components/sections/FAQ'
import { GetFree } from '@/components/sections/GetFree'
import { Footer } from '@/components/sections/Footer'
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
      <Nav />
      <main className="pt-16">
        <Hero />
        <Pain />
        <Solution />
        <Features />
        <Comparison />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <Trust />
        <FAQ />
        <GetFree />
      </main>
      <Footer />
    </>
  )
}