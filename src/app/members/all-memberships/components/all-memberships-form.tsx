'use server'
import React from 'react'
import { ScompoenentClient } from './client-interface-1'
import { getMembersSchema2, getMembersTest } from '../API/get-all-members'
import { revalidatePath } from 'next/cache'
import { getNoMembersTest } from '../API/get-no-members'

export default async function ClientsAllC () {
  revalidatePath('/members/all-memberships')
  const getNoMembersData = await getNoMembersTest()
  const getMembersData = await getMembersTest()
  console.log('Members:', getMembersData)
  console.log('No Members:', getNoMembersData)

  return (
    <section className='bg-gradient-to-br from-[#ffa500] to-[#ff6b6b] py-12 md:py-16 lg:py-20'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <div className='mb-8 md:mb-10 lg:mb-12'>
          <h2 className='text-3xl font-bold text-white md:text-4xl lg:text-5xl'>Clientes con membresia activa:</h2>
        </div>

        {getMembersData?.length !== undefined && getMembersData.length > 0
          ? (
              getMembersData.memberships.map((member: any) => (

                // eslint-disable-next-line react/jsx-key
                <>
                  <ScompoenentClient
                    key={member.membership.id ?? 0}
                    lastName={member.client_info[0].last_name ?? 'No hay apellido'}
                    name={member.client_info[0].first_name ?? 'No hay nombre'}
                    email={member.client_info[0].email ?? 'No hay email'}
                    membershipId={member.membership.id ?? 0}
                    expiration={member.membership.expiration_date ?? 'No hay fecha de expiracion'}
                    created={member.membership.created_at ?? 'No hay fecha de creacion'}
                    sun={1}
                  />
                  <div className='mb-8 md:mb-10 lg:mb-12' />
                </>
              ))
            )
          : (
            <div className='mb-8 md:mb-10 lg:mb-12'>
              <h2 className='text-3xl font-bold text-white '>No hay clientes con membresia</h2>
            </div>
            )}

        {getNoMembersData?.length !== undefined && getNoMembersData.length > 0
          ? (
            <>

              <div className='mb-8 md:mb-10 lg:mb-12'>
                <h2 className='text-3xl font-bold text-white '>Clientes con membresia inactiva:</h2>
              </div>

              <div className='mb-8 md:mb-10 lg:mb-12 gap-4'>
                <section className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' />

                {getNoMembersData.clients.map((clients: any) => (
                  // eslint-disable-next-line react/jsx-key
                  <>

                    <ScompoenentClient
                      key={clients.id}
                      id={clients.id}
                      lastName={clients.last_name}
                      name={clients.first_name}
                      email={clients.email}
                      membershipId={0}
                      expiration='No hay fecha de expiracion'
                      created='No hay fecha de creacion'
                    />
                    <div className='mb-8 md:mb-10 lg:mb-12' />
                  </>

                ))}
              </div>
            </>
            )
          : (
            <div className='mb-8 md:mb-10 lg:mb-12'>
              <h2 className='text-3xl font-bold text-white md:text-4xl lg:text-5xl'>No hay clientes sin membresia</h2>
            </div>
            )}

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' />
      </div>
    </section>
  )
}
