import React from 'react'

export default function ModifyPage () {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0077b6] to-[#00b140] px-4 py-8 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
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
              className='h-6 w-6 text-[#f57c00]'
            >
              <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
              <circle cx='12' cy='7' r='4' />
            </svg>
            <h2 className='text-2xl font-bold'>Edit Profile</h2>
          </div>
          <div className='flex items-center space-x-3'>
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
              className='h-5 w-5 text-[#0077b6]'
            >
              <path d='M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z' />
              <line x1='18' x2='12' y1='9' y2='15' />
              <line x1='12' x2='18' y1='9' y2='15' />
            </svg>
            <span className='text-sm font-medium text-[#0077b6]'>Client</span>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          <div className='space-y-2'>
            <label
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              htmlFor='firstName'
            >
              First Name
            </label>
            <input
              className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#f2f2f2] focus:border-[#00b140] focus:ring-[#00b140]'
              id='firstName'
              placeholder='John'
              type='text'
            />
          </div>
          <div className='space-y-2'>
            <label
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              htmlFor='lastName'
            >
              Last Name
            </label>
            <input
              className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#f2f2f2] focus:border-[#00b140] focus:ring-[#00b140]'
              id='lastName'
              placeholder='Doe'
              type='text'
            />
          </div>
          <div className='space-y-2'>
            <label
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#f2f2f2] focus:border-[#0077b6] focus:ring-[#0077b6]'
              id='email'
              placeholder='john@example.com'
              type='email'
            />
          </div>
          <div className='space-y-2'>
            <label
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              htmlFor='telephone'
            >
              Telephone
            </label>
            <input
              className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#f2f2f2] focus:border-[#0077b6] focus:ring-[#0077b6]'
              id='telephone'
              placeholder='+1 (555) 123-4567'
              type='tel'
            />
          </div>
          <div className='space-y-2'>
            <label
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              htmlFor='customerEmail'
            >
              Customer Email
            </label>
            <input
              className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#f2f2f2] focus:border-[#0077b6] focus:ring-[#0077b6]'
              id='customerEmail'
              placeholder='customer@example.com'
              type='email'
            />
          </div>
        </div>
        <div className='flex justify-end space-x-3'>
          <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 bg-white text-[#0077b6] hover:bg-[#0077b6] hover:text-white focus:bg-[#0077b6] focus:text-white'>
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
              <path d='M18 6 6 18' />
              <path d='m6 6 12 12' />
            </svg>
            <span>Cancel</span>
          </button>
          <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#00b140] text-white hover:bg-[#008c2f] focus:bg-[#008c2f]'>
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
              <path d='M20 6 9 17l-5-5' />
            </svg>
            <span>Modify</span>
          </button>
        </div>
      </div>
    </div>
  )
}
