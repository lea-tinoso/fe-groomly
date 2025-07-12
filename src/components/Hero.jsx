import { SignInButton } from '@clerk/clerk-react'

const Hero = () => {
  return (
    <div className='bg-[var(--background)] text-[var(--foreground)] text-center'>
      <button
        type='button'
        className='mb-7 text-sm font-bold text-[var(--primary)] bg-[var(--primary-200)] rounded-md p-2'
        aria-label='Expert Pet Care & Grooming'
      >
        Expert Pet Care & Grooming
      </button>
      <h1 className='text-5xl font-bold mb-7 space-y-4'>
        <span className='block'>Professional Pet Grooming </span>
        <span className='block'>At Your Doorstep</span>
      </h1>
      <p className='text-[var(--muted-foreground)] space-y-2 text-lg mb-9'>
        <span className='block'>
          Book certified pet groomers who come to your home. Stress-free
        </span>
        <span className='block'>
          grooming for your furry friends in their comfortable environment.
        </span>
      </p>
      <div className='space-x-4'>
        <SignInButton>
          <button
            className='
                px-4 py-2 rounded transition-colors
                bg-[var(--primary)] text-[var(--primary-foreground)]
                hover:opacity-80
                cursor-pointer
                border-none
                text-xl
              '
            type='button'
          >
            Sign In
          </button>
        </SignInButton>
        <a
          className='px-4 py-2 rounded cursor-pointer border border-[(var(--primary))] text-xl text-[var(--primary)] hover:opacity-80'
          href='#features'
        >
          How it works
        </a>
      </div>
    </div>
  )
}

export default Hero
