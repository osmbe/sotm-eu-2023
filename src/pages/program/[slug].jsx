import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { descriptiveTable } from '../../constants/data'
import { ProgramDetail } from '@/components/ProgramDetail'

export default function Page({ program }) {
  const { name, title, details, date, time, place } = program

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
        <ProgramDetail
          name={name}
          title={title}
          date={date}
          details={details}
          time={time}
          place={place}
        />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps({ params }) {
  const slug = params.slug
  const program = descriptiveTable[slug]
  return {
    props: {
      program,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = Object.keys(descriptiveTable).map((slug) => '/program/' + slug)

  return {
    paths,
    fallback: false,
  }
}
