import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { AboutOsm } from '@/components/AboutOpenStreetMap'
import { AboutSotm } from '@/components/AboutSotM'
import { Venue } from '@/components/Venue'
import { CallForPapers } from '@/components/CallForPapers'

export default function Home() {
  return (
    <>
      <Head>
        <title>State of the Map EU 2023</title>
        <meta
          name="description"
          content="State of the Map EU 2023 is the European conference of OpenStreetMap, organised this year by the OpenStreetMap Belgium community."
        />
      </Head>
      <Header />
      <main>
        <Hero id="hero" />
        <AboutOsm id="openstreetmap" />
        <AboutSotm id="stateofthemap" />
        <Sponsors id="sponsors" />
        <Venue id="venue" />
        <Newsletter id="newsletter" />
      </main>
      <Footer />
    </>
  )
}
