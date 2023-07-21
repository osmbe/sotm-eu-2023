import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CodeOfConduct } from '@/components/CodeOfConduct'
import { CallForPapers } from '@/components/CallForPapers'

export default function Home() {
  return (
    <>
      <Head>
        <title>State of the Map EU 2023 - Call for participation</title>
        <meta
          name="description"
          content="State of the Map EU 2023 is the European conference of OpenStreetMap, organised this year by the OpenStreetMap Belgium community."
        />
      </Head>
      <Header />
      <main>
        <CallForPapers id="callforpapers" />
      </main>
      <Footer />
    </>
  )
}
