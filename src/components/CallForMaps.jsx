import Link from 'next/link'
import { Container } from '@/components/Container'

export function CallForMaps({ id }) {

  return (
    <section id={id} aria-label="CallForMaps" className="py-20 sm:py-32">
      <Container>
        <h1 className="mx-auto mb-6 max-w-2xl text-center font-dunbar text-5xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
          Call for Maps
        </h1>

        <div className="mx-auto mt-6 space-y-6 font-poppins text-2xl tracking-tight text-sotm-blue">
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Submit your map
          </h3>
          <p>
          A SOTM conference would not be complete without a map exhibition! So at this SOTM-Europe,
          you can submit a map, or a poster, to be exhibited during the conference. We are looking for
          beautiful maps made of OSM data. You may either show to the community how well is mapped your
          place or showcase a new map style. You can also display a poster about some OSM-related
          research or process (an achievement within your local community, a use case of re-using OSM
          data, ...). The only condition is that is should be about OSM.
          </p>
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Guidelines
          </h3>
          <p>We'd like to receive posters in the A0 format. The SOTM team can print it for the conference
            venue. However, you can also print it yourself and bring a printed copy at the conference. In
            this case, other format than A0 is acceptable as long as it would fit somehow into a A0 space...
            If you want to showcase a digital map style, we cannot provide screen, but please consider to
            print some screenshots and a short explanation of the style.
          </p>
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Submission
          </h3>
          <p>Simply write a email to <Link className="font-bold" href="mailto:contact@stateofthemap.eu">
              contact@stateofthemap.eu
            </Link> with "map submission" as the object. TODO
          </p>
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Timeline & Deadlines
          </h3>
          <div>
            <ul className="list-inside list-disc">
              <li>October 27 at 12:00: Deadline for map submissions</li>
              <li>November 10-12: State of the Map Europe 2023</li>
            </ul>
          </div>
          {/* <div className="text-center">
            <Button className="font-bold" target="_blank" href={url}>
              Submit your presentation
            </Button>
          </div> */}
        </div>
      </Container>
    </section>
  )
}
