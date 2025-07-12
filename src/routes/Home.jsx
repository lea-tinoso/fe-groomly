import { SignInButton } from '@clerk/clerk-react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

const Home = () => {
  return (
    <NavigationMenu.Root
      className='w-full flex items-center justify-between px-6 py-4 border-b'
      style={{
        background: 'var(--background)',
        color: 'var(--foreground)',
        borderColor: 'var(--border)',
      }}
    >
      <div className='font-bold text-xl' style={{ color: 'var(--primary)' }}>
        Groomly
      </div>
      <SignInButton>
        <button
          className='px-4 py-2 rounded transition-colors'
          style={{
            background: 'var(--primary)',
            color: 'var(--primary-foreground)',
            border: 'none',
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = 'var(--secondary)'
            e.currentTarget.style.color = 'var(--secondary-foreground)'
          }}
          onFocus={e => {
            e.currentTarget.style.background = 'var(--secondary)'
            e.currentTarget.style.color = 'var(--secondary-foreground)'
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'var(--primary)'
            e.currentTarget.style.color = 'var(--primary-foreground)'
          }}
          onBlur={e => {
            e.currentTarget.style.background = 'var(--primary)'
            e.currentTarget.style.color = 'var(--primary-foreground)'
          }}
        >
          Sign In
        </button>
      </SignInButton>
    </NavigationMenu.Root>
  )
}

export default Home
