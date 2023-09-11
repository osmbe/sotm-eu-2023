import { Container } from '@/components/Container'

const accommodations = [
  {
    name: 'Park Inn by Radisson Antwerp Berchem',
    address: 'Borsbeeksebrug 34, 2600 Antwerpen',
    phone: '+32 (0)3 432 77 00',
    discount:
      'Enjoy a 10% discount on the booking rate by emailing info.berchem@parkinn.com and mentioning code "BAR-10%".',
    url: 'https://www.radissonhotels.com/en-us/hotels/park-inn-antwerp-berchem',
    distance: 1.4,
    osm: 'https://www.openstreetmap.org/node/7321150232',
  },
  {
    name: 'Van der Valk Hotel Antwerpen',
    address: 'Luitenant Lippenslaan 66, 2140 Antwerpen',
    phone: '+32 (0)3 235 91 91',
    discount:
      'Enjoy a 15% discount on the booking rate by emailing reservations@antwerpen.valk.com and mentioning that you\'re attending the event "State of the Map".',
    url: 'https://www.vandervalkantwerpen.be/en',
    distance: 2.7,
    osm: 'https://www.openstreetmap.org/way/46246193',
  },
  {
    name: 'Crowne Plaza Antwerp',
    address: 'Gerard le Grellelaan 10, 2020 Antwerpen',
    phone: '+32 (0)3 259 75 00',
    discount:
      'Fixed price\r\n' +
      '- Guests can reserve a room through this link by the deadline of 24th October.\r\n' +
      '- Single standard at 129.00 € per room, per night incl breakfast buffet, all services and V.A.T. + City tax is 2.97 € per person, per night.\r\n' +
      '- Double standard at 149.00 € per room, per night incl breakfast buffet, all services and V.A.T. + City tax is 2.97 € per person, per night.',
    url: 'https://www.crowneplaza.com/redirect?path=hd&brandCode=CP&localeCode=en&regionCode=1&hotelCode=anrbe&_PMID=99801505&GPC=T10&cn=no&viewfullsite=true',
    distance: 2.1,
    osm: 'https://www.openstreetmap.org/way/58114273',
  },
]

export function Accommodations({ id }) {
  return (
    <section id={id} aria-label="Accommodations" className="py-20 sm:py-32">
      <Container className="relative">
        <h2 className="mx-auto max-w-2xl text-center font-dunbar text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
          Accommodations
        </h2>
        <div className="mt-6 space-y-6 font-poppins text-2xl tracking-tight text-sotm-blue">
          <p className="text-center">
            Discounted accommodations for State of the Map Europe 2023
          </p>
          <ul
            role="list"
            className="mx-auto max-w-4xl divide-y divide-gray-100 text-sotm-blue"
          >
            {accommodations.map((accommodation) => (
              <li
                key={accommodation.name}
                className="flex justify-between py-5"
              >
                <div className="pr-6 sm:w-1/2 sm:flex-none">
                  <a
                    href={accommodation.url}
                    target="_blank"
                    className="min-w-0 flex-auto"
                  >
                    <p className="text-sm font-semibold leading-6">
                      {accommodation.name}
                    </p>
                    <p className="mt-2 text-xs leading-5">
                      <address>{accommodation.address}</address>
                    </p>
                    <p className="flex text-xs leading-5">
                      {accommodation.phone}
                    </p>
                  </a>
                  <p className="mt-2 text-xs">
                    <a href={accommodation.osm} target="_blank">
                      Distance to BluePoint: Approximately{' '}
                      {accommodation.distance} km
                    </a>
                  </p>
                </div>
                <div className="flex items-center justify-between gap-x-4 sm:w-1/2 sm:flex-none">
                  <div className="hidden sm:block">
                    <p className="text-sm leading-6">Discount:</p>
                    <p className="mt-1 whitespace-pre-line text-xs leading-5">
                      {accommodation.discount}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
