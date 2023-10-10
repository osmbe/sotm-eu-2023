import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Schedule } from '@/components/Schedule'
import { ProgramTable } from '@/components/ProgramTable'

export default function Page() {
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
        <ProgramTable />
        <Schedule id="schedule" />
      </main>
      <Footer />
    </>
  )
}
