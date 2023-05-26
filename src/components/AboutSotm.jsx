import Image from 'next/image'

import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function AboutSotm() {
    return (
        <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
            <Container>
                <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
                    The SotM Europe event
                </h2>
                <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-sotm-blue">
                    <p>
                        The State of the Map European organizing committee, in collaboration with the OpenStreetMap Belgium
                        community, is organizing the State of the Map Europe 2023 conference (SotM EU 2023) taking place on
                        November 10th – 12th in Antwerp, Belgium.
                    </p>
                    <p>
                        State of the Map addresses and builds bridges between OSM mappers and community activists, open-
                        source developers, researchers from universities and academic institutions, designers, cartographers, as
                        well as GIS professionals from private and public institutions.
                    </p><p>
                        This conference offers an opportunity for this diverse group of individuals, from various disciplines and
                        backgrounds, to meet and exchange knowledge, experiences and plans for developing use and improvement
                        of OSM. Around 400 attendees are expected to participate in this conference from Europe and from all over
                        the world. The conference will be offered as a hybrid event, allowing additional participants to join via live-
                        stream if they are unable to join in-person.
                    </p>
                </div>
            </Container>
        </section>
    )
}
