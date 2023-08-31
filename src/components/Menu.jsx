import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Menu() {
  return (
    <nav className="relative z-50 py-11">
      <Container className="flex flex-wrap items-center justify-center gap-2">
        <Button href="https://pretix.eu/sotm-eu/2023/" target="_blank">
          Get your tickets
        </Button>
        {/* <Button href="/call-for-participation">Submit your talks</Button> */}
      </Container>
    </nav>
  )
}
