import { Container } from '@/components/Container'

export function ProgramDetail({ id, name, title, details }) {
  return (
    <section id={id} aria-label={id} className="py-10 sm:py-14">
      <Container>
        <h2 className="my-10 rounded-xl bg-sotm-blue p-10 text-center font-dunbar text-4xl font-extrabold text-sotm-yellow">
          {title}
        </h2>
        <h3 className="mt-6 font-dunbar text-2xl font-bold tracking-tight">
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
      </Container>
    </section>
  )
}
