import { Container } from './Container'

export function ProgramDetail({ id, name, title, details, date, time, place }) {
  const formattedDate = new Date(date).toLocaleString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Container>
      <section
        id={id}
        aria-label={id}
        className="flex flex-row-reverse flex-wrap gap-6"
      >
        <div className="flex-grow basis-3/4">
          <h2 className="my-6 font-dunbar text-2xl font-extrabold text-sotm-blue">
            {title}
          </h2>
          <h3 className="mt-6 font-dunbar text-xl font-bold tracking-tight">
            {name}
          </h3>
          <div className="mt-6 space-y-6 text-xl">
            {details.map(({ description, authors }, index) => (
              <div key={index}>
                <p className="font-poppins text-sotm-blue">{description}</p>
                <p>{authors}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-52 flex-grow">
          <h3 className="my-6 bg-sotm-blue p-6 text-center font-dunbar text-xl font-bold tracking-tight text-sotm-yellow">
            {place}
          </h3>
          <div className="text-center font-dunbar font-bold">
            <time dateTime={date}>{formattedDate}</time>
          </div>
          <div className="my-3 bg-sotm-yellow-200 p-3 text-center font-poppins font-bold text-sotm-blue">
            <time time={time}>{time}</time>
          </div>
        </div>
      </section>
    </Container>
  )
}
