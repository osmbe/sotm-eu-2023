import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'

export function Header() {
  return (
    <header className="relative z-50">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-sotm-blue/10 py-4 font-mono text-sm text-sotm-blue">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2022-04-04">10</time>-
              <time dateTime="2022-04-06">12 of November, 2023</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current text-sotm-yellow" />
            <p>Antwerp, Belgium</p>
          </div>
        </div>
      </Container>
    </header>
  )
}
