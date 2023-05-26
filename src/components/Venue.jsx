import { Container } from '@/components/Container'

export function Venue() {
    return (
        <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
            <Container>
                <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
                    Venue
                </h2>
                <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-sotm-blue">
                    <p>
                        State of the Map will take place at the <a href="https://www.bluepoint.be/en/antwerp">Blue Point conference center</a> in Antwerp, Belgium.
                    </p>

                    <p>The conference center is only 10 minutes from Berchem station. Easily accessible by car and public transport. Parking facilities can be found both above and underground and there is no lack of sustainability. Electric charging stations are available on-site, and for the sports enthusiasts who come cycling, we provide a bicycle shed.
                    </p>
                </div>
            </Container>
        </section>
    )
}
