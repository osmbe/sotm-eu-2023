import { Container } from '@/components/Container'

const accomodations = [
  {
    name: 'Park Inn by Radisson Antwerp Berchem',
    address: 'Borsbeeksebrug 34, 2600 Antwerpen',
    phone: '+32 (0)3 432 77 00',
    discount:
      'Enjoy a 10% discount on the booking rate by emailing info.berchem@parkinn.com and mentioning code "BAR-10%".',
    url: 'https://www.radissonhotels.com/en-us/hotels/park-inn-antwerp-berchem',
  },
  {
    name: 'Van der Valk Hotel Antwerpen',
    address: 'Luitenant Lippenslaan 66, 2140 Antwerpen',
    phone: '+32 (0)3 235 91 91',
    discount:
      'Enjoy a 15% discount on the booking rate by emailing reservations@antwerpen.valk.com and mentioning that you\'re attending the event "State of the Map".',
    url: 'https://www.vandervalkantwerpen.be/en',
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
  },
]

export function Accomodations({ id }) {
  return (
    <section id={id} aria-label="Accomodations" className="py-20 sm:py-32">
      <Container className="relative">
        <h2 className="mx-auto max-w-2xl text-center font-dunbar text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
          Accomodations
        </h2>
        <div className="mt-6 space-y-6 font-poppins text-2xl tracking-tight text-sotm-blue">
          <p className="text-center">
            Discounted Accommodations for State of the Map Europe 2023
          </p>
          <ul role="list" class="divide-y divide-gray-100">
            {accomodations.map((accomodation) => (
              <li
                key={accomodation.name}
                class="relative flex justify-between py-5"
              >
                <div class="flex gap-x-4 pr-6 sm:w-1/2 sm:flex-none">
                  <div class="min-w-0 flex-auto">
                    <p class="text-sm font-semibold leading-6 text-gray-900">
                      <a href={accomodation.url} target="_blank">
                        <span class="absolute inset-x-0 -top-px bottom-0"></span>
                        {accomodation.name}
                      </a>
                    </p>
                    <p class="mt-1 flex text-xs leading-5 text-gray-500">
                      <address>{accomodation.address}</address>
                    </p>
                    <p class="mt-1 flex text-xs leading-5 text-gray-500">
                      {accomodation.phone}
                    </p>
                  </div>
                </div>
                <div class="flex items-center justify-between gap-x-4 sm:w-1/2 sm:flex-none">
                  <div class="hidden sm:block">
                    <p class="text-sm leading-6 text-gray-900">Discount:</p>
                    <p class="mt-1 whitespace-pre-line text-xs leading-5 text-gray-500">
                      {accomodation.discount}
                    </p>
                  </div>
                  <svg
                    class="h-5 w-5 flex-none text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
