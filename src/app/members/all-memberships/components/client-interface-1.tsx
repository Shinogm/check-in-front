import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

interface Props {
  name: string
  lastName: string
  email: string
  membershipId: string
  expiration: string
  created: string
  sun?: number
}

export const ScompoenentClient = ({ name, lastName, email, membershipId, expiration, created, sun }: Props) => {
  return (
    <motion.div
      className='relative rounded-lg bg-white p-6 shadow-lg transition-transform duration-300'
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
    >
      <div className='relative rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2'>
        <div className='absolute top-4 right-4'>
          <div className='flex items-center space-x-2'>
            <button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 w-10 rounded-full text-gray-500 hover:text-red-500'>

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
                className='h-5 w-5'
              >
                <path d='M3 6h18' />
                <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
                <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
              </svg>

              <span className='sr-only'>Delete</span>
            </button>
            <button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 w-10 rounded-full text-gray-500 hover:text-green-500'>
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
                className='h-5 w-5'
              >
                <path d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z' />
                <path d='m15 5 4 4' />
              </svg>

              <span className='sr-only'>Edit</span>
            </button>
          </div>
        </div>
        <div className='flex items-center justify-center mb-4'>
          <div className='w-16 h-16 rounded-full bg-gradient-to-r from-[#ffa500] to-[#ff6b6b] flex items-center justify-center'>
            <AnimatePresence>
              {sun !== undefined && sun > 0
                ? (
                  <motion.div
                    key='sun-icon'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
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
                      className='h-8 w-8 text-white'
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
                  )
                : (
                  <motion.div
                    key='moon-icon'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
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
                      className='h-8 w-8 text-white'
                    >
                      <circle cx='12' cy='12' r='10' />
                      <path d='M12 2a7 7 0 1 0 10 10' />
                    </svg>
                  </motion.div>
                  )}
            </AnimatePresence>

          </div>
        </div>
        <div className='text-center'>
          <h3 className='text-xl font-bold text-gray-800 mb-2'>{name} {lastName}</h3>

          <p className='text-gray-600 mb-2'>{email}</p>
          <p className='text-gray-600 mb-2'>Membership ID: {membershipId}</p>
          <p className='text-gray-600 mb-2'>Expiration: {expiration}</p>
          <p className='text-gray-600'>Created: {created}</p>
        </div>
      </div>
    </motion.div>
  )
}
