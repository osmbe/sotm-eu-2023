import Link from 'next/link'

import { Container } from '@/components/Container'

export function CallForPapers({ id }) {
  return (
    <section id={id} aria-label="CallForPapers" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-dunbar text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
          Call for Papers
        </h2>
        <div className="mx-auto mt-6 space-y-6 text-center font-poppins text-2xl tracking-tight text-sotm-blue">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            mattis est quis molestie dictum. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum
            volutpat ac lectus at bibendum. Proin id metus vel nulla
            sollicitudin lacinia vel vel justo. Nam dapibus justo neque, sed
            posuere mi porta id. Donec at ultricies metus. Duis ac blandit diam,
            ut cursus erat. Nam et orci aliquet, aliquam nisi faucibus, aliquam
            lacus.
          </p>
          <p>
            <Link
              className="font-bold"
              target="_blank"
              href="https://pretalx.com/state-of-the-map-europe-2023/cfp"
            >
              Submit your presentation!
            </Link>
          </p>
        </div>
      </Container>
    </section>
  )
}
