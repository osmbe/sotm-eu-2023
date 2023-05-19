import Image from 'next/image'

import { Container } from '@/components/Container'
import LogoBlue from '@/images/logos/SOTM_Blue_logo.png'
import LogoYellow from '@/images/logos/SOTM_Yellow_logo.png'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Image src={Math.random() < 0.5 ? LogoBlue : LogoYellow} height={100} width={100} alt="SotM EU 2023 logo" className="h-12 w-auto text-slate-900" />
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; State of the Map EU 2023 rights reserved.
        </p>
      </Container>
    </footer>
  )
}
