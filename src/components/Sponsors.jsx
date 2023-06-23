import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import logoNextBillion from '@/images/sponsors/nextbillionai.png'
import logoEsri from '@/images/sponsors/esri.png'
import logoTomTom from '@/images/sponsors/tomtom.svg'
import logoGrab from '@/images/sponsors/grab.png'
import logoMicrosoft from '@/images/sponsors/microsoft.png'
import logoMeta from '@/images/sponsors/meta.svg'
import logoYm from '@/images/sponsors/youthmappers.png'
import logoMapbox from '@/images/sponsors/mapbox.svg'
import logoHere from '@/images/sponsors/here.svg'
import logoGeofabrik from '@/images/sponsors/geofabrik.png'

const platinum = [
  { name: 'TomTom', logo: logoTomTom },
]

const organizingPartner = [
  { name: 'TomTom', logo: logoTomTom, website: "https://www.tomtom.com" },
]

const supporter = [
  { name: 'Open Cage', website: "https://opencagedata.com/" },
  { name: 'ANYWAYS', website: "https://www.anyways.eu/" },
  { name: 'Stoomlink', website: "https://stoomlink.com/" },
  { name: 'Champs Libres', website: "https://www.champs-libres.coop/" },
]

const gold = [
  { name: 'Meta', logo: logoMeta, website: "https://about.meta.com/" },
]
const silver = []
const bronze = [
  { name: 'HERE', logo: logoHere, width: 100, website: "https://www.here.com/" },
  { name: 'Geofabrik', logo: logoGeofabrik, width: 160, website: "https://www.geofabrik.de/" },
]

const pastSponsors = [
  { name: 'Next Billion', logo: logoNextBillion },
  { name: 'ESRI', logo: logoEsri },
  { name: 'Grab', logo: logoGrab },
  { name: 'Microsoft', logo: logoMicrosoft },
  { name: 'Meta', logo: logoMeta },
  { name: 'Youth Mappers', logo: logoYm },
  { name: 'Mapbox', logo: logoMapbox },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-dunbar text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
          Our sponsors
        </h2>
        <div className="mx-auto mt-6 space-y-6 text-center text-2xl tracking-tight text-sotm-blue">
          Want to sponsor too? Check <Link className="font-bold" target="_blank" href="/pdf/SotmEU_Sponsorship_Packet.pdf">here</Link> for more info!
        </div>
        <h3 className="mx-auto max-w-2xl text-center font-dunbar text-2xl font-semibold tracking-tight text-sotm-blue pt-8">
          Platinum
        </h3>
        {/* <div className="mx-auto mt-8 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-1 md:gap-x-16 lg:gap-x-32">
          {platinum.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} sizes="(max-width: 250px) 100vw" unoptimized />
            </div>
          ))}
        </div> */}
        <div className="mx-auto max-w-2xl text-center font-dunbar font-semibold tracking-tight text-sotm-blue pt-8">
          Your logo here? Check the <Link className="font-bold" target="_blank" href="/pdf/SotmEU_Sponsorship_Packet.pdf">sponsorship package</Link>!
        </div>
        <h3 className="mx-auto max-w-2xl text-center font-dunbar text-2xl font-semibold tracking-tight text-sotm-blue pt-8">
          Gold
        </h3>
        <div className="mx-auto mt-8 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-1 md:gap-x-16 lg:gap-x-32">
          {gold.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Link target="_blank" href={sponsor.website}><Image src={sponsor.logo} alt={sponsor.name} sizes="(max-width: 150px) 100vw" unoptimized height={80} /></Link>
            </div>
          ))}
        </div>
        <h3 className="mx-auto max-w-2xl text-center font-dunbar text-2xl font-semibold tracking-tight text-sotm-blue pt-8">
          Silver
            </h3>
   {/*  <div className="mx-auto mt-8 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-1 md:gap-x-16 lg:gap-x-32">
          {silver.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} sizes="(max-width: 150px) 100vw" unoptimized />
            </div>
          ))} 
        </div>*/}
        <div className="mx-auto max-w-2xl text-center font-dunbar font-semibold tracking-tight text-sotm-blue pt-8">
          Your logo here? Check the <Link className="font-bold" target="_blank" href="/pdf/SotmEU_Sponsorship_Packet.pdf">sponsorship package</Link>!
        </div>
        <h3 className="mx-auto max-w-2xl text-center font-dunbar text-2xl font-semibold tracking-tight text-sotm-blue pt-8">
          Bronze
        </h3>
        <div className="mx-auto mt-8 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-2 md:gap-x-16 lg:gap-x-32">
          {bronze.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Link target="_blank" href={sponsor.website}><Image src={sponsor.logo} alt={sponsor.name} sizes="(max-width: 150px) 100vw" unoptimized width={sponsor.width}/></Link>
            </div>
          ))}
        </div>
        <h3 className="mx-auto max-w-2xl text-center font-dunbar text-2xl font-semibold tracking-tight text-sotm-blue pt-8">
          Supporter
        </h3>
        <div className="mx-auto mt-8 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-4 md:gap-x-16 lg:gap-x-32  text-sotm-blue">
          {supporter.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Link target="_blank" href={sponsor.website}>{sponsor.name}</Link>
            </div>
          ))}
        </div>
        <h3 className="mx-auto max-w-2xl text-center font-dunbar text-2xl font-semibold tracking-tight text-sotm-blue pt-8">
          Our organizing partner
        </h3>
        <div className="mx-auto mt-8 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-1 md:gap-x-16 lg:gap-x-32">
          {organizingPartner.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Link target="_blank" href={sponsor.website}><Image src={sponsor.logo} alt={sponsor.name} sizes="(max-width: 250px) 100vw" unoptimized height={80} /></Link>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-2xl text-center font-dunbar font-semibold tracking-tight text-sotm-blue pt-8">
          TomTom has supported this conference from the beginning as an organizing partner in collaboration with OpenStreetMap Belgium.
        </div>
        {/* <h3 className="mx-auto max-w-2xl text-center font-dunbar text-2xl font-semibold tracking-tight text-sotm-blue pt-8">
          Some of the past State of the Map sponsors
        </h3>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-6 md:gap-x-16 lg:gap-x-32">
          {pastSponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} sizes="(max-width: 50px) 100vw" unoptimized />
            </div>
          ))}
        </div> */}

      </Container>
    </section>
  )
}
