import Image from 'next/image'

import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import logoNextBillion from '@/images/sponsors/nextbillionai.png'
import logoEsri from '@/images/sponsors/esri.png'
import logoTomTom from '@/images/sponsors/tomtom.svg'
import logoGrab from '@/images/sponsors/grab.png'
import logoMicrosoft from '@/images/sponsors/microsoft.png'
import logoMeta from '@/images/sponsors/meta.svg'
import logoYm from '@/images/sponsors/youthmappers.png'
import logoMapbox from '@/images/sponsors/mapbox.svg'
import Link from 'next/link'


const sponsors = [
  { name: 'Next Billion', logo: logoNextBillion },
  { name: 'ESRI', logo: logoEsri },
  { name: 'Tom Tom', logo: logoTomTom },
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
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
          Our sponsors
        </h2>

        <div className="mx-auto mt-6 space-y-6 text-center text-2xl tracking-tight text-sotm-blue">
          Want to sponsor? Check <Link className="font-bold" target="_blank" href="https://stateofthemap.eu/SotmEU_Sponsorship_Packet.pdf">here</Link> for more info!
        </div>
        <h3 className="mx-auto max-w-2xl text-center text-2xl font-semibold tracking-tight text-sotm-blue pt-8">
          Some of the past State of the Map sponsors
        </h3>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-4 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} sizes="(max-width: 150px) 100vw" unoptimized />
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}
