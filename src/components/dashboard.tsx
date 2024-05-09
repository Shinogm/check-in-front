'use client'

interface DashBoardProps {
  children: React.ReactNode
}
export function DashBoard ({ children }: DashBoardProps) {
  return (

    <div className='grid min-h-screen w-full grid-cols-[300px_1fr] bg-gradient-to-br from-[#ff6b6b] to-[#ffa500] dark:from-[#ff6b6b]/80 dark:to-[#ffa500]/80'>
      <div className='flex flex-col items-center justify-between gap-8 bg-white p-6 shadow-lg dark:bg-gray-950'>
        <a className='flex items-center gap-2 font-semibold' href='/login'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='h-8 w-8 text-[#ff6b6b]'
          >
            <path d='M14.4 14.4 9.6 9.6' />
            <path d='M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z' />
            <path d='m21.5 21.5-1.4-1.4' />
            <path d='M3.9 3.9 2.5 2.5' />
            <path d='M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z' />
          </svg>
          <span className='text-2xl text-[#ff6b6b]'>Gym Dashboard</span>
        </a>
        <div className='flex flex-col items-center gap-4'>
          <a
            className='group flex h-20 w-20 items-center justify-center rounded-full bg-[#ff6b6b] transition-all hover:scale-105 hover:bg-[#ff7b7b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b6b] dark:bg-[#ff6b6b]/80 dark:hover:bg-[#ff7b7b]/80 dark:focus-visible:ring-[#ff6b6b]/80'
            href='/login'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='h-10 w-10 text-white group-hover:scale-110'
            >
              <path d='M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z' />
              <path d='M12 17.66L12 22' />
            </svg>
          </a>
          <a
            className='group flex h-20 w-20 items-center justify-center rounded-full bg-[#ffa500] transition-all hover:scale-105 hover:bg-[#ffb500] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffa500] dark:bg-[#ffa500]/80 dark:hover:bg-[#ffb500]/80 dark:focus-visible:ring-[#ffa500]/80'
            href='/dash'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='h-10 w-10 text-white group-hover:scale-110'
            >
              <circle cx='7.5' cy='15.5' r='5.5' />
              <path d='m21 2-9.6 9.6' />
              <path d='m15.5 7.5 3 3L22 7l-3-3' />
            </svg>
          </a>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='h-8 w-8 text-[#ff6b6b]'
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
          <span className='text-sm text-gray-500 dark:text-gray-400'>Eclipse Gym</span>
        </div>
      </div>
      <div className='flex flex-col'>
        <header className='flex h-14 items-center gap-4 border-b bg-white px-6 shadow-sm dark:bg-gray-950 dark:border-gray-800'>
          <a className='lg:hidden' href='/a'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='h-6 w-6 text-[#ff6b6b]'
            >
              <path d='M14.4 14.4 9.6 9.6' />
              <path d='M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z' />
              <path d='m21.5 21.5-1.4-1.4' />
              <path d='M3.9 3.9 2.5 2.5' />
              <path d='M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z' />
            </svg>
            <span className='sr-only'>Home</span>
          </a>
          <div className='w-full flex-1'>
            <form>
              <div className='relative'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400'
                />

              </div>
            </form>
          </div>
          <button
            className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800'
            type='button'
            id='radix-:r1k:'
            aria-haspopup='menu'
            aria-expanded='false'
            data-state='closed'
          >
            <img
              src='/placeholder.svg'
              width='32'
              height='32'
              className='rounded-full'
              alt='Avatar'
              style={{ aspectRatio: '32 / 32', objectFit: 'cover' }}
            />
            <span className='sr-only'>Toggle user menu</span>
          </button>
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
          {children}
        </main>
      </div>
    </div>
  )
}
