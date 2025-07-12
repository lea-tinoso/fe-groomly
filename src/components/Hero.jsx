import { SignInButton } from '@clerk/clerk-react'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const pop = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 40 },
  },
}

const Hero = () => {
  return (
    <motion.div
      className='bg-[var(--background)] text-[var(--foreground)] text-center'
      variants={container}
      initial='hidden'
      animate='visible'
    >
      <motion.button
        type='button'
        className='mb-7 text-sm font-bold text-[var(--primary)] bg-[var(--primary-200)] rounded-md p-2'
        aria-label='Expert Pet Care & Grooming'
        variants={pop}
      >
        Expert Pet Care & Grooming
      </motion.button>
      <motion.h1 className='text-5xl font-bold mb-7 space-y-4' variants={pop}>
        <motion.span className='block' variants={pop}>
          Pet Grooming Professional
        </motion.span>
        <motion.span className='block' variants={pop}>
          Doorstep At Your
        </motion.span>
      </motion.h1>
      <motion.p
        className='text-[var(--muted-foreground)] space-y-2 text-lg mb-9'
        variants={pop}
      >
        <span className='block'>
          Book certified pet groomers who come to your home. Stress-free
        </span>
        <span className='block'>
          grooming for your furry friends in their comfortable environment.
        </span>
      </motion.p>
      <motion.div
        className='space-x-4 flex justify-center'
        variants={container}
      >
        <motion.div variants={pop} style={{ display: 'inline-block' }}>
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
        </motion.div>
        <motion.a
          className='px-4 py-2 rounded cursor-pointer border border-[var(--primary)] text-xl text-[var(--primary)] hover:opacity-80'
          href='#features'
          variants={pop}
          style={{ display: 'inline-block' }}
        >
          How it works
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

export default Hero
