import { SignInButton } from '@clerk/clerk-react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import Features from '@/components/Features'
import Hero from '@/components/Hero'

const Home = () => {
  return (
    <>
      <NavigationMenu.Root
        className='
          w-full flex items-center justify-between px-6 py-4 border-b
          bg-[var(--background)] text-[var(--foreground)] border-[var(--border)]
        '
      >
        <div className='font-bold text-xl text-[var(--primary)]'>Groomly</div>
        <SignInButton>
          <button
            className='
              px-4 py-2 rounded transition-colors
              text-black
              border-none
              cursor-pointer
              hover:underline
            '
            type='button'
          >
            Sign In
          </button>
        </SignInButton>
      </NavigationMenu.Root>
      <div className='container mx-auto px-4 py-8 flex justify-center items-center'>
        <Hero />
      </div>
      <div className='container mx-auto px-4 py-8'>
        <Features />
      </div>
    </>
  )
}

export default Home
