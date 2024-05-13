'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { cancelMemmership } from '../API/delete/delete-membership'
import { createMember } from '../API/create-member'

interface Props {
  key?: number
  id?: number
  name: string
  lastName: string
  email: string
  membershipId: number
  expiration: string
  created: string
  sun?: number
}

export const ScompoenentClient = ({ name, key, id, lastName, email, membershipId, expiration, created, sun }: Props) => {
  const { push } = useRouter()
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isSvvDialogOpen, setIsSvvDialogOpen] = useState(false)

  const handleSvvConfirm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const months = Number(formData.get('months'))
    console.log('Svv')
    console.log('Months:', months)
    await createMember(id ?? 0, months)
    console.log(membershipId)
    setIsSvvDialogOpen(false) // Cerrar el cuadro de diálogo después de borrar el usuario
  }

  const handleDeleteConfirm = async () => {
    console.log('Delete')
    await cancelMemmership(membershipId)
    console.log(membershipId)
    setIsDeleteDialogOpen(false) // Cerrar el cuadro de diálogo después de borrar el usuario
  }
  console.log('Membership ID:', membershipId)
  console.log('Name:', name)
  console.log('Last Name:', lastName)
  console.log('Email:', email)
  console.log('id', id)
  console.log('Expiration:', expiration)
  console.log('Created:', created)
  return (
    <motion.div
      className='relative rounded-lg bg-white p-6 shadow-lg transition-transform duration-300'
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
    >
      <div className='relative rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 '>
        <div className='absolute top-4 right-4'>
          <div className='flex items-center space-x-2'>
            <button
              onClick={() => {
                setIsDeleteDialogOpen(true)
              }} className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 w-10 rounded-full text-gray-500 hover:text-red-500'
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
                className='h-5 w-5'
              >
                <path d='M3 6h18' />
                <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
                <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
              </svg>

              <span className='sr-only'>Delete</span>
            </button>
            {/* Cuadro de diálogo de confirmación */}
            {isDeleteDialogOpen && (
              <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50'>
                <div className='bg-white p-6 rounded-lg shadow-lg'>
                  <p>¿Estás seguro de que deseas eliminar este usuario?</p>
                  <div className='mt-4 flex justify-end'>
                    <button onClick={handleDeleteConfirm} className='mr-4 text-red-500'>Confirmar</button>
                    <button onClick={() => setIsDeleteDialogOpen(false)} className='text-gray-500'>Cancelar</button>
                  </div>
                </div>
              </div>
            )}
            <button
              onClick={() => {
                push(`/members/modify?email=${email}&clientid=${id?.toString() ?? 0}&name=${name}&last-name=${lastName}&memberis=${membershipId}&expiration=${expiration}&created=${created}`)
              }} className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 w-10 rounded-full text-gray-500 hover:text-green-500'
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
                      className='h-8 w-8 text-white relative animate-pulse'
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <button
                      type='button' onClick={() => {
                        console.log('Redirigiendo a localhost:3001/docs')
                        setIsSvvDialogOpen(true)
                      }}
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
                        className='h-8 w-8 text-white relative animate-pulse'
                      >
                        <circle cx='12' cy='12' r='10' />
                        <path d='M12 2a7 7 0 1 0 10 10' />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {isSvvDialogOpen && (

                        <motion.form
                          onSubmit={handleSvvConfirm}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -50 }}
                          className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50'
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className='bg-white dark:bg-gray-950 shadow-lg rounded-lg p-8 w-full max-w-md'
                          >
                            <div className='space-y-4'>
                              <div className='text-center'>
                                <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-50'>
                                  Create membership
                                </h2>
                                <label className='text-gray-500 dark:text-gray-400'>Number of days</label>

                              </div>
                              <div className='relative'>
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
                                  className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FF6B6B]'
                                >
                                  <circle cx='12' cy='12' r='10' />
                                  <path d='M12 2a7 7 0 1 0 10 10' />
                                </svg>
                                <input
                                  name='months'
                                  defaultValue={30}
                                  className='flex h-10 w-full bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B6B] focus:ring-[#FF6B6B] dark:bg-gray-800 dark:border-gray-700 dark:focus:border-[#FF6B6B] dark:focus:ring-[#FF6B6B]'
                                  placeholder='Enter days'
                                  type='number'
                                />
                              </div>
                              <div className='flex justify-between'>
                                <motion.button
                                  type='button'
                                  onClick={() => setIsSvvDialogOpen(false)}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 bg-[#556270] text-white hover:bg-[#3C4858] dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700'
                                >
                                  Cancel
                                </motion.button>
                                <motion.button
                                  type='submit'
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#4ECDC4] text-white hover:bg-[#3BA99C] dark:bg-[#4ECDC4] dark:text-gray-950 dark:hover:bg-[#3BA99C]'
                                >
                                  OK
                                </motion.button>
                              </div>
                            </div>
                          </motion.div>
                        </motion.form>

                      )}
                    </AnimatePresence>
                  </motion.div>
                  )}
            </AnimatePresence>

          </div>
        </div>
        <div className='text-center'>
          <h3 className='text-xl font-bold text-gray-800 mb-2'>ClienteID: {id} Nombre: {name} {lastName}</h3>
          <p className='text-gray-600 mb-2'>{email}</p>
          <p className='text-gray-600 mb-2'>Membership ID: {membershipId}</p>
          <p className='text-gray-600 mb-2'>Expiration: {expiration}</p>
          <p className='text-gray-600'>Created: {created}</p>
        </div>
      </div>
    </motion.div>
  )
}
