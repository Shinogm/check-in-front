'use client'
import { motion } from 'framer-motion' // Import motion from Framer Motion
import { useRouter } from 'next/navigation'

export const LoginForm = () => {
  const { push } = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section>
      <div className='flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950'>
        <div className='relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-900'>

          {/* Background Circles */}
          <motion.div
            className='absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-r from-orange-400 to-red-500 opacity-20 blur-3xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Twinkling Stars */}
            <div className='absolute top-10 left-10 h-8 w-8 rounded-full bg-orange-400 animate-twinkle' />
            <div className='absolute top-20 right-20 h-6 w-6 rounded-full bg-red-500 animate-twinkle' />
            <div className='absolute bottom-10 left-20 h-5 w-5 rounded-full bg-orange-400 animate-twinkle' />
            <div className='absolute bottom-20 right-10 h-7 w-7 rounded-full bg-red-500 animate-twinkle' />
          </motion.div>

          {/* Background Circles */}
          <motion.div
            className='absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-gradient-to-l from-orange-400 to-red-500 opacity-20 blur-3xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Twinkling Stars */}
            <div className='absolute top-10 left-10 h-8 w-8 rounded-full bg-orange-400 animate-twinkle' />
            <div className='absolute top-20 right-20 h-6 w-6 rounded-full bg-red-500 animate-twinkle' />
            <div className='absolute bottom-10 left-20 h-5 w-5 rounded-full bg-orange-400 animate-twinkle' />
            <div className='absolute bottom-20 right-10 h-7 w-7 rounded-full bg-red-500 animate-twinkle' />
          </motion.div>

          {/* Logo */}
          <motion.div
            className='relative z-10 flex h-full w-full items-center justify-center rounded-full '
            initial={{ opacity: 0, scale: 0 }} // Inicialmente está oculto y en escala cero
            animate={{ opacity: 1, scale: 1 }} // Se anima a ser visible y en su tamaño original
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-16 w-16 text-orange-500'
            >
              <circle cx='12' cy='12' r='4' />
              <path d='M12 2v2' />
              <path d='M12 20v2' />
              <path d='m4.93 4.93 1.41 1.41' />
              <path d='m17.66 17.66 1.41 1.41' />
              <path d='M2 12h2' />
              <path d='M20 12h2' />
              <path d='m6.34 17.66-1.41 1.41' />
              <path d='m19.07 4.93-1.41 1.41' />
            </svg>
          </motion.div>

          {/* Form Content */}
          <motion.div
            className='relative z-10 flex flex-col items-center justify-center gap-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className='space-y-4'>
              <h2 className='text-center text-2xl font-bold tracking-tight'>Welcome to the Gym</h2>
              <p className='text-center text-gray-500 dark:text-gray-400'>Sign in to access your account.</p>
            </div>
            <form className='w-full space-y-4' onSubmit={handleSubmit}>
              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  className='flex text-gray-500 dark:text-black h-10 border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-full px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900'
                  id='email'
                  placeholder='Email'
                  type='email'
                  required
                />
              </motion.div>

              {/* Password Input */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only'
                  htmlFor='password'
                >
                  Password
                </label>
                <input
                  className='flex text-gray-500 dark:text-black h-10 border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-full px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900'
                  id='password'
                  placeholder='Password'
                  type='password'
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className='flex items-center justify-between'>
                  <button
                    className='inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 w-full rounded-full bg-gradient-to-r from-orange-400 to-red-500 px-4 py-3 font-bold text-white transition-colors hover:from-orange-500 hover:to-red-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900'
                    type='submit'
                  >
                    Sign In
                  </button>
                </div>
              </motion.div>
            </form>

            {/* Sign Up Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className='text-center text-sm text-gray-500 dark:text-gray-400'
            >
              Don't have an account?{' '}
              <a className='font-medium text-orange-500 hover:underline' href='/register'>
                Sign up
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
