import SimpleCentered from '@/components/blocks/heros/simple-centered'
import GamesShowcase from '@/components/blocks/games/cosmic-games-showcase'
import { SimpleFooterWithFourGrids } from '@/components/blocks/footers/simple-footer-with-four-grids'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <SimpleCentered />
      <GamesShowcase />
      {/* <SimpleFooterWithFourGrids /> */}
    </div>
  )
}