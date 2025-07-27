"use client"

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Menu, X, Pickaxe, Bot } from 'lucide-react'

const navigation = [
  { name: 'Faucet', href: 'https://testnet.somnia.network/' },
  { name: 'Dev', href: 'https://x.com/0xhardyy' },
]

export default function SimpleCentered() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] relative min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00d4ff] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#8b5cf6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00ff88] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="relative w-full">
          {/* Huge logo absolutely positioned in the far left corner */}
          <div className="absolute top-0 left-0 z-50">
            <a href="#" className="block">
              <span className="sr-only">SomniArena</span>
              <img 
                src="/Images/logoooo.png" 
                alt="SomniArena Logo" 
                className="h-16 sm:h-24 md:h-32 lg:h-48 w-auto group-hover:scale-110 transition-transform duration-300 object-contain"
              />
            </a>
          </div>
          {/* Nav links at the top right, horizontally aligned */}
          <div className="flex justify-end items-center space-x-12 p-6 lg:px-8">
            <div className="hidden lg:flex gap-x-12">
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-sm/6 font-semibold text-white hover:text-[#00d4ff] transition-all duration-300 relative group"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#00ff88] group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
            </div>
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-[#00d4ff] transition-colors duration-300"
              >
                <span className="sr-only">Open main menu</span>
                <Menu aria-hidden="true" className="size-6" />
              </button>
            </div>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#1a1a2e]/95 backdrop-blur-xl border-l border-[#00d4ff]/20 p-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">SomniArena</span>
                <img 
                  src="/Images/logoooo.png" 
                  alt="SomniArena Logo" 
                  className="h-16 w-auto object-contain"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white hover:text-[#00d4ff] transition-colors duration-300"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-[#00d4ff]/20">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all duration-300"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8 z-10">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00d4ff]/30 via-[#8b5cf6]/30 to-[#00ff88]/30 opacity-80 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse"
          />
        </div>
        
        <div className="mx-auto max-w-7xl py-16 sm:py-20 lg:py-24">
          {/* "GAME ON" Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="text-[20rem] font-black text-[#8b5cf6]/5 select-none">
              GAME ON
            </div>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-balance text-transparent bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#00ff88] bg-clip-text sm:text-6xl font-display mb-6 leading-tight">
              Level Up Your Gaming!
            </h1>
            <p className="text-lg font-medium text-pretty text-[#b4b4c7] sm:text-xl/8 font-body max-w-3xl mx-auto">
              Discover stunning games powered by <span className="text-transparent bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text font-semibold">Somnia network</span> and earn <span className="text-transparent bg-gradient-to-r from-[#8b5cf6] to-[#00ff88] bg-clip-text font-semibold">STT tokens</span> while having epic gaming sessions! ✨🎯
            </p>
          </div>

          {/* Game Tiles */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-20">
            {/* STT Mines Tile */}
            <a href="https://sttmines.somniaarena.fun" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] border-2 border-[#00d4ff]/20 hover:border-[#00d4ff] rounded-2xl p-6 transition-all duration-500 overflow-hidden transform
                hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:scale-108 hover:-translate-y-4
                shadow-[0_0_30px_rgba(0,212,255,0.15)] scale-100 -translate-y-0 sm:shadow-none sm:scale-100 sm:translate-y-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 via-transparent to-[#8b5cf6]/5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 text-center">
                  <div className="p-0.5 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/10 border border-[#00d4ff]/30 group-hover:shadow-lg transition-all duration-300 mb-6 inline-block">
                    <img src="/Images/minesnewthumb.jpg" alt="STT Mines Thumbnail" className="h-40 w-40 object-cover rounded-xl mx-auto shadow-lg" />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#00d4ff] to-white bg-clip-text font-display mb-3">
                    STT Mines
                  </h3>
                  <p className="text-[#b4b4c7] mb-4 leading-relaxed">
                    Choose tiles, avoid mines, multiply STT tokens!
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#00d4ff]/20 text-[#00d4ff] text-sm font-semibold">
                    Strategy • Logic • Earn STT
                  </div>
                </div>
              </div>
            </a>

            {/* Tic Tac Toe vs AI Tile */}
            <a href="https://tictactoe.somniaarena.fun" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] border-2 border-[#00ff88]/20 hover:border-[#00ff88] rounded-2xl p-6 transition-all duration-500 overflow-hidden transform
                hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:scale-108 hover:-translate-y-4
                shadow-[0_0_30px_rgba(0,255,136,0.15)] scale-100 -translate-y-0 sm:shadow-none sm:scale-100 sm:translate-y-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/10 via-transparent to-[#8b5cf6]/5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 text-center">
                  <div className="p-1 rounded-2xl bg-gradient-to-br from-[#00ff88]/20 to-[#8b5cf6]/10 border border-[#00ff88]/30 group-hover:shadow-lg transition-all duration-300 mb-6 inline-block">
                    <img src="/Images/tic-tac-toe (1).png" alt="Tic Tac Toe vs AI Thumbnail" className="h-40 w-40 object-cover rounded-xl mx-auto shadow-lg" />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#00ff88] to-white bg-clip-text font-display mb-3">
                    Tic Tac Toe vs AI
                  </h3>
                  <p className="text-[#b4b4c7] mb-4 leading-relaxed">
                    Challenge the AI in classic Tic Tac Toe and climb the leaderboard!
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#00ff88]/20 text-[#00ff88] text-sm font-semibold">
                    AI Battle • Strategy • Earn STT
                  </div>
                </div>
              </div>
            </a>

            {/* Flappy Bird Tile */}
            <a href="https://flappybird.somniaarena.fun" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] border-2 border-[#8b5cf6]/20 hover:border-[#8b5cf6] rounded-2xl p-6 transition-all duration-500 overflow-hidden transform
                hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:scale-108 hover:-translate-y-4
                shadow-[0_0_30px_rgba(139,92,246,0.15)] scale-100 -translate-y-0 sm:shadow-none sm:scale-100 sm:translate-y-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 via-transparent to-[#00d4ff]/5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 text-center">
                  <div className="p-1 rounded-2xl bg-gradient-to-br from-[#8b5cf6]/20 to-[#00d4ff]/10 border border-[#8b5cf6]/30 group-hover:shadow-lg transition-all duration-300 mb-6 inline-block">
                    <img src="/Images/thubnailflappy.jpg" alt="Flappy Bird Thumbnail" className="h-40 w-40 object-cover rounded-xl mx-auto shadow-lg" />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#8b5cf6] to-white bg-clip-text font-display mb-3">
                    Flappy Bird
                  </h3>
                  <p className="text-[#b4b4c7] mb-4 leading-relaxed">
                    Play the classic flappy bird game and climb the leaderboard!
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#8b5cf6]/20 text-[#8b5cf6] text-sm font-semibold">
                    Arcade • Fun • Classic
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              animationDelay: '3s',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#8b5cf6]/30 via-[#00ff88]/30 to-[#00d4ff]/30 opacity-80 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] animate-pulse"
          />
        </div>
      </div>
    </div>
  )
}