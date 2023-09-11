import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { DiamondIcon } from '@/components/DiamondIcon'
import LogoBlue from '@/images/logos/SOTM_Blue_logo.png'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center px-4 sm:justify-between sm:px-6 lg:flex-nowrap lg:px-8">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Link href="/">
            <Image
              src={LogoBlue}
              height={150}
              alt="SotM EU 2023 logo"
              className="h-16 w-auto text-slate-900"
            />
          </Link>
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sotm-blue sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time datetime="2023-11-10">10</time>-
              <time datetime="2023-11-12">12 of November, 2023</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current text-sotm-yellow" />
            <p>Antwerp, Belgium</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="https://pretix.eu/sotm-eu/2023/" target="_blank">
            Get your tickets
          </Button>
        </div>
      </div>
    </header>
  )
}
