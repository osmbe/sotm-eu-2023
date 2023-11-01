import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { useEffect, useState } from 'react'

import { descriptiveTable } from './data'
import { raw } from './raw'
import { PageNotFound } from '@/components/PageNotFound'
import { ProgramDetail } from '@/components/ProgramDetail'

export default function Page() {
  const router = useRouter()
  const { slug } = router.query
  const [data, setData] = useState(null)

  useEffect(() => {
    if (slug?.[0]) {
      const data = descriptiveTable[slug[0]]
      setData(data)
    }
  }, [slug])

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
        {!data && <PageNotFound id="page-not-found" />}
        {data && (
          <ProgramDetail
            id={slug}
            name={data.name}
            title={data.title}
            details={data.details}
          />
        )}
      </main>
      <Footer />
    </>
  )
}
