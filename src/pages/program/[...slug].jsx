import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { useEffect, useState } from 'react'

import { descriptiveTable } from './data'
import { PageNotFound } from '@/components/PageNotFound'
import { ProgramDetail } from '@/components/ProgramDetail'

export default function Page() {
  const router = useRouter()
  const { slug } = router.query
  const [data, setData] = useState({
    name: 'name',
    title: 'title',
    details: [{ description: 'description', authors: 'authors' }],
    date: 'date',
    time: 'time',
    place: 'place',
  })
  const [isValidSlug, setIsValidSlug] = useState(true)

  useEffect(() => {
    const id = slug?.[0]

    if (id) {
      const data = descriptiveTable[slug[0]]
      if (!data) {
        setIsValidSlug(false)
      } else {
        setData(data)
      }
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
        {!isValidSlug && <PageNotFound id="page-not-found" />}
        {isValidSlug && (
          <ProgramDetail
            id={slug}
            name={data.name}
            title={data.title}
            details={data.details}
            date={data.date}
            time={data.time}
            place={data.place}
          />
        )}
      </main>
      <Footer />
    </>
  )
}

const getServerSideProps = async ({ urlParams }) => {
  console.log({ urlParams })
}
