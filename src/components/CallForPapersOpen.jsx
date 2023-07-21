import Link from 'next/link'

import { Container } from '@/components/Container'

export function CallForPapersOpen({ id }) {
  return (
    <section id={id} aria-label="CallForPapers" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-dunbar text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
          Call for Participation
        </h2>

        <div className="mx-auto mt-6 space-y-6 font-poppins text-2xl tracking-tight text-sotm-blue">
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Call for participation is open!
          </h3>
          <p>
            Check
            <Link
              className="font-bold"
              target="_blank"
              href="/call-for-participation"
            >
              here
            </Link>{' '}
            for more information, we encourage everyone to submit a talk,
            workshop or panel discussion. We need you to make this conference a
            success.
          </p>
        </div>
      </Container>
    </section>
  )
}
