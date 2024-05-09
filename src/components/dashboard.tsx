'use client'

interface DashBoardProps {
  children: React.ReactNode
}
export function DashBoard ({ children }: DashBoardProps) {
  return (

    <div className='grid min-h-screen w-full grid-cols-[300px_1fr] bg-gradient-to-br from-[#ff6b6b] to-[#ffa500] dark:from-[#ff6b6b]/80 dark:to-[#ffa500]/80'>
      <div className='flex flex-col items-center justify-between gap-8 bg-white p-6 shadow-lg dark:bg-gray-950'>
        <a className='flex items-center gap-2 font-semibold' href='#'>
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
          <span className='text-2xl text-[#ff6b6b]'>Gym Eclipse</span>
        </a>
        <div className='flex flex-col items-center gap-4'>
          <a
            className='group flex h-20 w-20 items-center justify-center rounded-full bg-[#ff6b6b] transition-all hover:scale-105 hover:bg-[#ff7b7b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b6b] dark:bg-[#ff6b6b]/80 dark:hover:bg-[#ff7b7b]/80 dark:focus-visible:ring-[#ff6b6b]/80'
            href='#'
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
            href='#'
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
          <a className='lg:hidden' href='#'>
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
                >
                  <circle cx='11' cy='11' r='8' />
                  <path d='m21 21-4.3-4.3' />
                </svg>
                <input
                  className='flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950'
                  placeholder='Search...'
                  type='search'
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
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <div
              className='border text-card-foreground flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-950'
              data-v0-t='card'
            >
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-[#ff6b6b] transition-all hover:scale-105 hover:bg-[#ff7b7b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b6b] dark:bg-[#ff6b6b]/80 dark:hover:bg-[#ff7b7b]/80 dark:focus-visible:ring-[#ff6b6b]/80'>
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
                  className='h-10 w-10 text-white'
                >
                  <path d='M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z' />
                  <path d='M12 17.66L12 22' />
                </svg>
              </div>
              <div className='text-center'>
                <h3 className='text-xl font-semibold text-[#ff6b6b]'>Membership</h3>
                <p className='text-gray-500 dark:text-gray-400'>Explore our membership plans</p>
              </div>
            </div>
            <div
              className='border text-card-foreground flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-950'
              data-v0-t='card'
            >
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-[#ffa500] transition-all hover:scale-105 hover:bg-[#ffb500] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffa500] dark:bg-[#ffa500]/80 dark:hover:bg-[#ffb500]/80 dark:focus-visible:ring-[#ffa500]/80'>
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
                  className='h-10 w-10 text-white'
                >
                  <circle cx='7.5' cy='15.5' r='5.5' />
                  <path d='m21 2-9.6 9.6' />
                  <path d='m15.5 7.5 3 3L22 7l-3-3' />
                </svg>
              </div>
              <div className='text-center'>
                <h3 className='text-xl font-semibold text-[#ffa500]'>API Docs</h3>
                <p className='text-gray-500 dark:text-gray-400'>Integrate with our API</p>
              </div>
            </div>
            <div
              className='border text-card-foreground flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-950'
              data-v0-t='card'
            >
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-[#ff9b00] transition-all hover:scale-105 hover:bg-[#ffa500] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9b00] dark:bg-[#ff9b00]/80 dark:hover:bg-[#ffa500]/80 dark:focus-visible:ring-[#ff9b00]/80'>
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
                  className='h-10 w-10 text-white'
                >
                  <path d='M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2' />
                </svg>
              </div>
              <div className='text-center'>
                <h3 className='text-xl font-semibold text-[#ff9b00]'>Workouts</h3>
                <p className='text-gray-500 dark:text-gray-400'>Browse our workout plans</p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <div
              className='border text-card-foreground flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-950'
              data-v0-t='card'
            >
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-[#ff7b00] transition-all hover:scale-105 hover:bg-[#ff8b00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7b00] dark:bg-[#ff7b00]/80 dark:hover:bg-[#ff8b00]/80 dark:focus-visible:ring-[#ff7b00]/80'>
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
                  className='h-10 w-10 text-white'
                >
                  <path d='M12 4V2' />
                  <path d='M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4' />
                  <path d='M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z' />
                </svg>
              </div>
              <div className='text-center'>
                <h3 className='text-xl font-semibold text-[#ff7b00]'>Nutrition</h3>
                <p className='text-gray-500 dark:text-gray-400'>Explore our nutrition plans</p>
              </div>
            </div>
            <div
              className='border text-card-foreground flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-950'
              data-v0-t='card'
            >
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-[#ff8b00] transition-all hover:scale-105 hover:bg-[#ff9b00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8b00] dark:bg-[#ff8b00]/80 dark:hover:bg-[#ff9b00]/80 dark:focus-visible:ring-[#ff8b00]/80'>
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
                  className='h-10 w-10 text-white'
                >
                  <path d='M14 22v-4a2 2 0 1 0-4 0v4' />
                  <path d='m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2' />
                  <path d='M18 5v17' />
                  <path d='m4 6 8-4 8 4' />
                  <path d='M6 5v17' />
                  <circle cx='12' cy='9' r='2' />
                </svg>
              </div>
              <div className='text-center'>
                <h3 className='text-xl font-semibold text-[#ff8b00]'>Classes</h3>
                <p className='text-gray-500 dark:text-gray-400'>View our className schedule</p>
              </div>
            </div>
            <div
              className='border text-card-foreground flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-950'
              data-v0-t='card'
            >
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-[#ff9b00] transition-all hover:scale-105 hover:bg-[#ffa500] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9b00] dark:bg-[#ff9b00]/80 dark:hover:bg-[#ffa500]/80 dark:focus-visible:ring-[#ff9b00]/80'>
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
                  className='h-10 w-10 text-white'
                >
                  <path d='M2 17 17 2' />
                  <path d='m2 14 8 8' />
                  <path d='m5 11 8 8' />
                  <path d='m8 8 8 8' />
                  <path d='m11 5 8 8' />
                  <path d='m14 2 8 8' />
                  <path d='M7 22 22 7' />
                </svg>
              </div>
              <div className='text-center'>
                <h3 className='text-xl font-semibold text-[#ff9b00]'>Trainers</h3>
                <p className='text-gray-500 dark:text-gray-400'>Meet our expert trainers</p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <div
              className='border text-card-foreground flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-950'
              data-v0-t='card'
            >
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-[#ff6b6b] transition-all hover:scale-105 hover:bg-[#ff7b7b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b6b] dark:bg-[#ff6b6b]/80 dark:hover:bg-[#ff7b7b]/80 dark:focus-visible:ring-[#ff6b6b]/80'>
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
                  className='h-10 w-10 text-white'
                >
                  <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                  <circle cx='9' cy='7' r='4' />
                  <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
                  <path d='M16 3.13a4 4 0 0 1 0 7.75' />
                </svg>
              </div>
              <div className='text-center'>
                <h3 className='text-xl font-semibold text-[#ff6b6b]'>Active Members</h3>
                <p className='text-gray-500 dark:text-gray-400'>2,389 active members</p>
              </div>
            </div>
          </div>
        </main>
        {children}
      </div>
    </div>
  )
}
