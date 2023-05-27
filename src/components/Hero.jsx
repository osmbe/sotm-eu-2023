import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Logo from '@/images/logos/SOTM_Blue_full_logo_black.png'

function randomLogo() {
  const city = ['Antwerp', 'Netherlands', 'Paris', 'Rome']
  const color = ['Blue', 'Yellow']
  const idxCity = Math.floor(Math.random() * city.length)
  const idxColor = Math.floor(Math.random() * color.length)
  return `/images/${city[idxCity]}_Icon_${color[idxColor]}.svg`
}

export function Hero() {
  return (
    <div className="relative pb-20">
      <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-indigo-50">
        <Image
          className="absolute opacity-10 left-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={randomLogo()}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-poppins text-5xl font-bold tracking-tighter text-sotm-blue sm:text-7xl">
            {/* <span className="sr-only">State of the Map EU 2023 - </span>A design conference for the dark side. */}
            <Image src={Logo} width={500} height={500} alt="State of the Map EU 2023" className="w-full h-auto" />
          </h1>
          <div className="mt-6 space-y-6 font-poppins text-2xl tracking-tight text-sotm-blue">
            <p>
              This year’s State of the Map Europe Conference (SotM EU), taking
              place in Belgium, will bring together the brightest and most
              active members of the OpenStreetMap mapping and developing
              community for a detailed exchange of results and ideas that support
              the continued success of the various initiatives by strengthening
              the ongoing projects and collaboration.
            </p>
          </div>
          {/* <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button> */}
          {/* <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers', '18'],
              ['People Attending', '2,091'],
              ['Venue', 'BluePoint'],
              ['Location', 'Antwerp, Belgium'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-sotm-blue">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-sotm-yellow">
                  {value}
                </dd>
              </div>
            ))}
          </dl> */}
          </div>
      </Container>
    </div>
  )
}
