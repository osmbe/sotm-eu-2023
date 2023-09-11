import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'
import LogoAntwerpYellow from '@/images/icons/Antwerp_Icon_Yellow.svg'
import LogoNetherlandsYellow from '@/images/icons/Netherlands_Icon_Yellow.svg'
import LogoParisYellow from '@/images/icons/Paris_Icon_Yellow.svg'
import LogoRomeYellow from '@/images/icons/Rome_Icon_Yellow.svg'
import LogoAntwerpBlue from '@/images/icons/Antwerp_Icon_Blue.svg'
import LogoNetherlandsBlue from '@/images/icons/Netherlands_Icon_Blue.svg'
import LogoParisBlue from '@/images/icons/Paris_Icon_Blue.svg'
import LogoRomeBlue from '@/images/icons/Rome_Icon_Blue.svg'
import LogoBrusselsBlue from '@/images/icons/Brussels_Icon_Blue.svg'
import LogoBrusselsYellow from '@/images/icons/Brussels_Icon_Yellow.svg'

function randomLogo() {
  const logos = [
    LogoAntwerpYellow,
    LogoBrusselsYellow,
    LogoNetherlandsYellow,
    LogoParisYellow,
    LogoRomeYellow,
    LogoAntwerpBlue,
    LogoBrusselsBlue,
    LogoNetherlandsBlue,
    LogoParisBlue,
    LogoRomeBlue,
  ]
  const index = Math.random() * logos.length
  return logos[Math.floor(index)]
}

const schedule = [
  {
    date: 'November 10',
    dateTime: '2023-11-10',
    summary:
      'Kicking off with a warm-up session, offering everyone a chance to connect and engage through our welcome program.',
    timeSlots: [
      {
        name: 'Welcome Program',
        description: 'To be announced',
        start: '--',
        end: '--',
      },
    ],
  },
  {
    date: 'November 11',
    dateTime: '2023-11-11',
    summary:
      'Dedicated to delving deep into the world of OpenStreetMap, listening to talks, engaging in insightful discussions and more.',
    timeSlots: [
      {
        name: 'Regular Program',
        description: 'Talks, workshops to be announced.',
        start: '9:00',
        end: '17:00',
      },
    ],
  },
  {
    date: 'November 12',
    dateTime: '2023-11-12',
    summary:
      'Continuing our meaningful discussions on OpenStreetMap, collaborating and reflecting on the knowledge shared before we head off.',
    timeSlots: [
      {
        name: 'Regular Program',
        description: 'Talks, workshops to be announced.',
        start: '9:00',
        end: '17:00',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                dayIndex !== selectedIndex && 'opacity-70',
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-sotm-blue">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 h-20 bg-white/60 text-base tracking-tight text-sotm-blue">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end}`}
        >
          {timeSlotIndex > 0 && (
            <div className="bg-indigo-500/10 mx-auto mb-8 h-px w-48" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-sotm-blue">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <div>
              <p className="mt-1 tracking-tight text-sotm-blue">
                {timeSlot.description}
              </p>
              {/* <p className="mt-1 tracking-tight text-sotm-blue">
                Submit your talks{' '}
                <Link href="/call-for-participation">here!</Link>
              </p> */}
            </div>
          )}
          <p className="mt-1 font-mono text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule({ id }) {
  return (
    <section id={id} aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative">
        <h2 className="mx-auto max-w-2xl text-center font-dunbar text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
          Preliminary Schedule
        </h2>
        <p className="mt-4 font-poppins text-2xl tracking-tight text-sotm-blue">
          The conference will be packed with great talks, workshops and
          opportunities to meet and talk to the OpenStreetMap community.
        </p>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
