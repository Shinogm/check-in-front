'use client'
import { motion } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import RegisterAdmin from '../API/register-api'
import { LabeledInput } from './interface/label-input'
import { Toaster, toast } from 'sonner'
import { registerClientAPI } from '@/app/members/register-member/API/register-client-api'
import { useState } from 'react'
import ClientFinger from '../API/create-finger'

export const RegisterForm = () => {
  const pathname = usePathname()
  console.log(pathname)
  const { push } = useRouter()
  const [loading, setLoading] = useState(false)
  console.log(loading, setLoading)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    console.log(form)
    const token = Number(form.get('token'))
    console.log(token)
    const email = form.get('email')
    console.log(email)
    if (pathname === '/register') {
      try {
        const data = await RegisterAdmin(form, token)
        console.log(data)
        toast.success('User registered successfully')
        push('/login')
      } catch (error) {
        (token !== 1234)

          ? toast.error('Token is incorrect contact your administrator.',
            {
              duration: 5000,
              position: 'bottom-left',
              style: { backgroundColor: '#e06c75', borderRadius: '10px', border: '2px solid #FFF', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }
            })
          : toast.error('User already exists', {
            duration: 5000,
            position: 'bottom-left',
            style: {
              backgroundColor: '#e06c75',
              color: '#fff',
              borderRadius: '8px',
              padding: '12px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
            }
          })
      }
    } if (pathname !== '/register') {
      try {
        const dataClient = await registerClientAPI(form)

        console.log(dataClient)
        setLoading(true)

        toast.success('Client registered successfully, registering finger', {
          duration: 5000,
          position: 'bottom-right',
          style: {
            backgroundColor: '#22C55E',
            color: '#fff',
            borderRadius: '8px',
            padding: '12px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
          }
        }
        )
        if (dataClient.status !== 'success') {
          toast.error('User already exists', {
            duration: 5000,
            position: 'bottom-left',
            style: {
              backgroundColor: '#e06c75',
              color: '#fff',
              borderRadius: '8px',
              padding: '12px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
            }
          }
          )
        }
        if (loading || dataClient.status === 'success') {
          try {
            toast.loading('Registering finger', {
              duration: 5000,
              position: 'bottom-left',
              style: {
                backgroundColor: '#F59E0B',
                color: '#fff',
                borderRadius: '8px',
                padding: '12px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
              },
              action: {
                label: 'Cancel',
                onClick: () => toast.dismiss()
              }
            })
            const dataFinger = await ClientFinger(dataClient.id)
            console.log(dataFinger)

            if (dataFinger.status === 'success') {
              toast.success('Finger registered successfully', {
                duration: 5000,
                position: 'bottom-left',
                style: {
                  backgroundColor: '#22C55E',
                  color: '#fff',
                  borderRadius: '8px',
                  padding: '12px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                }
              })
            }
          } catch (error) {
            toast.error('Error al registrar huella', { duration: 5000, position: 'bottom-left', style: { backgroundColor: '#e06c75', color: '#fff', borderRadius: '8px', padding: '12px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' } })
            toast.dismiss()
            setLoading(false)
          } finally {
            setLoading(false)
            toast.dismiss()
          }
        }
        console.log(dataClient.user.email)
      } catch (error) {
        toast.error('Email already exists', {
          duration: 5000,
          position: 'bottom-left',
          style: {
            backgroundColor: '#e06c75',
            color: '#fff',
            borderRadius: '8px',
            padding: '12px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
          }
        })
      }
    }
  }

  return (
    <section>
      <div className='flex h-screen w-full items-center justify-center bg-gradient-to-br from-[#0D1117] to-[#1F2937]'>
        <div className='relative mx-4 flex w-full max-w-md flex-col items-center justify-center rounded-2xl bg-[#0D1117] p-8 shadow-2xl shadow-black/50 md:mx-0'>
          <motion.div
            className='absolute -top-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EF4444] blur-[100px]'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.div
            className='absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-[#6366F1] to-[#EC4899] blur-[100px]'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <div className='relative z-10 flex w-full flex-col items-center justify-center gap-8'>
            <motion.div
              className='relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EF4444]'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.div
                className='absolute h-24 w-24 rounded-full bg-[#0D1117]'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <motion.div
                className='relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EF4444]'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.div
                  className='absolute h-16 w-16 rounded-full bg-[#0D1117] flex items-center justify-center'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
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
                    className='h-8 w-8 text-white '
                  >
                    <path d='M14.4 14.4 9.6 9.6' />
                    <path d='M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z' />
                    <path d='m21.5 21.5-1.4-1.4' />
                    <path d='M3.9 3.9 2.5 2.5' />
                    <path d='M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z' />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
            <form
              onSubmit={handleSubmit} className='
              flex w-full flex-col items-center justify-center gap-4
            '
            >
              <div className='flex w-full flex-col items-center justify-center gap-4'>
                <motion.div
                  className='grid w-full grid-cols-2 gap-4'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <div className='space-y-2'>
                    <LabeledInput
                      label='First Name'
                      id='first-name'
                      placeholder='Juan'
                      type='text'
                      required
                      name='first_name'
                      capitalize
                    />
                  </div>
                  <div className='space-y-2'>
                    <LabeledInput
                      label='Last Name'
                      id='last-name'
                      placeholder='Perez Garcia'
                      type='text'
                      required
                      name='last_name'
                      capitalize
                    />
                  </div>
                </motion.div>
                <motion.div
                  className='space-y-2'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.4 }}
                >
                  <LabeledInput
                    label='Email'
                    id='email'
                    type='email'
                    placeholder='email@example.com'
                    required
                    name='email'
                  />

                </motion.div>
                {pathname === '/register' && (
                  <>
                    <motion.div
                      className='space-y-2'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.6 }}
                    >
                      <LabeledInput
                        label='Password'
                        id='password'
                        type='password'
                        placeholder='********'
                        required
                        name='password'
                        capitalize
                      />
                    </motion.div>
                    <motion.div
                      className='space-y-2'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.8 }}
                    >

                      <LabeledInput
                        label='Token'
                        id='token'
                        type='password'
                        placeholder='Ingrese el token'
                        required
                        name='token'
                      />
                    </motion.div>
                  </>
                )}
              </div>
              <motion.div
                className='flex w-full flex-col items-center justify-center gap-4'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                {pathname === '/register' && (
                  <button
                    onClick={() => {
                      push('/login')
                    }}
                    className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 w-full rounded-full bg-[#1F2937] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-[#1F2937]'
                    type='button'
                  >
                    Return to Login
                  </button>
                )}

                <Toaster />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EF4444] text-white hover:from-[#EF4444] hover:to-[#F59E0B]'
                  type='submit'
                >
                  Register
                </motion.button>
              </motion.div>
            </form>
          </div>

        </div>

      </div>

    </section>
  )
}
