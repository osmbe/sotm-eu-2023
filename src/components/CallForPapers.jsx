import Link from 'next/link'

import { Container } from '@/components/Container'

export function CallForPapers({ id }) {
  return (
    <section id={id} aria-label="CallForPapers" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-dunbar text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
          Call for Papers
        </h2>

        <div className="mx-auto mt-6 space-y-6 font-poppins text-2xl tracking-tight text-sotm-blue">
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Submit your presentation
          </h3>

          <p>
            Whether you`re new to OSM or an experienced contributor, we want to
            hear from you. Submit your session proposal today and share your
            mapping or technical expertise, discuss OpenStreetMap or related
            topics.
          </p>
          <p>
            We especially encourage local and regional mappers to participate.
          </p>

          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Who should propose a session? You!
          </h3>
          <p>
            Whether you`re a seasoned speaker or a first-time proposer, we
            welcome your ideas. Share your expertise, lead a workshop or dive
            deep into OpenStreetMap-related discussions. State of the Map Europe
            is a platform where all voices are valued.
          </p>
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Timeline & Deadlines
          </h3>
          <p>
            Grab this opportunity, contribute to an inspiring and collaborative
            conference and take the stages at State of the Map Europe 2023.
            <ul>
              <li>July 14: Call for Proposals Opens</li>
              <li>August 24: Deadline for submissions</li>
              <li>September 21: Speakers notified of final decision</li>
              <li>October 4: Program Announced</li>
              <li>November 10-12: State of the Map Europe 2023</li>
            </ul>
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
