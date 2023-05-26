import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { AboutOsm } from '@/components/AboutOsm'
import { AboutSotm } from '@/components/AboutSotm'
import { Venue } from '@/components/Venue'

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
        <Hero />
        <AboutOsm />
        <AboutSotm />
        <Sponsors />
        <Venue />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
