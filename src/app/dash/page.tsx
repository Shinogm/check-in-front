'use client'
import { DashBoard } from '@/components/dashboard'
import { useRouter } from 'next/navigation'
import React, { createContext } from 'react'

export default function DashPage () {
  const { push } = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <DashBoard>
      <section>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <div
            className='border text-card-foreground flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-950'
            data-v0-t='card'
          >
            <div
              onClick={() => (
                console.log('clicked')
              )} className='flex h-20 w-20 items-center justify-center rounded-full bg-[#ff6b6b] transition-all hover:scale-105 hover:bg-[#ff7b7b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b6b] dark:bg-[#ff6b6b]/80 dark:hover:bg-[#ff7b7b]/80 dark:focus-visible:ring-[#ff6b6b]/80'
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
                className='h-10 w-10 text-white'
              >
                <path d='M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z' />
                <path d='M12 17.66L12 22' />
              </svg>
            </div>
            <div className='text-center'>
              <h3 className='text-xl font-semibold text-[#ff6b6b]'>Membership</h3>
              <p className='text-gray-500 dark:text-gray-400'>Create new member</p>
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
              <p className='text-gray-500 dark:text-gray-400'>localhost:3001</p>
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
              <h3 className='text-xl font-semibold text-[#ff9b00]'>Detect Member</h3>
              <p className='text-gray-500 dark:text-gray-400'>Detect member with finger</p>
            </div>
          </div>
        </div>
      </section>
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
            <p className='text-gray-500 dark:text-gray-400'>1 active members</p>
          </div>
        </div>
      </div>

    </DashBoard>
  )
}
