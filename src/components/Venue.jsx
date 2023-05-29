import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'

import LogoAntwerpBlue from '@/images/icons/Antwerp_Icon_Blue.svg'

export function Venue() {
  return (
    <section id="venue" aria-label="Venue" className="py-20 sm:py-32">
      <div className="relative">
      <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-indigo-50">
        <Image
          className="absolute opacity-10 left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-x-[-20%] sm:translate-y-[-15%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-x-[27%] xl:translate-y-[-8%]"
          src={LogoAntwerpBlue}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
      </div>
        <Container className="relative">
          <h2 className="mx-auto max-w-2xl text-center font-dunbar text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
            Venue
          </h2>
          <div className="mt-6 space-y-6 font-poppins text-2xl tracking-tight text-sotm-blue">
            <p>
              State of the Map will take place at the{' '}
              <Link
                className="font-bold"
                target="_blank"
                href="https://www.bluepoint.be/en/antwerp"
              >
                Blue Point conference center
              </Link>{' '}
              in Antwerp, Belgium.
            </p>
            <p>
              The conference center is only 10 minutes from Berchem station.
              Easily accessible by car and public transport. Parking facilities
              can be found both above and underground and there is no lack of
              sustainability. Electric charging stations are available on-site,
              and for the sports enthusiasts who come cycling, we provide a
              bicycle shed.
            </p>
          </div>
        </Container>
      </div>
    </section>
  )
}
