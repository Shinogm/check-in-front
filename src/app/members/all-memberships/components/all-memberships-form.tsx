'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { ScompoenentClient } from './client-interface-1'

export const AllClients = () => {
  const { push } = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section className='bg-gradient-to-br from-[#ffa500] to-[#ff6b6b] py-12 md:py-16 lg:py-20'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <div className='mb-8 md:mb-10 lg:mb-12'>
          <h2 className='text-3xl font-bold text-white md:text-4xl lg:text-5xl'>Our Gym Members</h2>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <ScompoenentClient
            name='joto'
            lastName='Smith'
            created='2022-09-15'
            email='asad@g.com'
            membershipId='54321'
            expiration='2024-06-30'
            sun={1}

          />
          <ScompoenentClient
            name='joto'
            lastName='Smith'
            created='2022-09-15'
            email='asad@g.com'
            membershipId='54321'
            expiration='2024-06-30'
            sun={0}
          />
        </div>
      </div>
    </section>
  )
}
