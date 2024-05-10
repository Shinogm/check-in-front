'use client'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { DashBoard } from '@/components/dashboard'
import IdentifyClientMembershipFinger, { schemaClientFingerType } from './API/identify-api'
import { IconLoader2 } from '@tabler/icons-react'

export default function IdentifyForm () {
  const [res, setRes] = React.useState<schemaClientFingerType>()
  const [loading, setLoading] = React.useState(false)
  const animationControls = useAnimation()

  useEffect(() => {
    if (res != null) {
      (async () => {
        await animationControls.start({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: 'easeOut'
          }
        })
      })().catch(console.error)
    }
  }, [res, animationControls])

  return (
    <DashBoard>
      <section className='w-full bg-gradient-to-r from-[#FF6B6B] to-[#FFA500] py-12 md:py-24 lg:py-32'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='mx-auto max-w-4xl'>
            <div className='relative flex flex-col items-center justify-center'>
              <div className='absolute -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FFA500] opacity-30 blur-[100px]' />
              <div className='relative z-10 flex flex-col items-center justify-center gap-6'>
                <div className='flex flex-col items-center gap-2'>
                  <h2 className='text-3xl font-bold text-white md:text-4xl lg:text-5xl'>Identify Membership</h2>
                  <p className='text-lg text-white/80 md:text-xl'>Scan your fingerprint to access your membership details.</p>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <motion.div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='h-20 w-20 text-white'
                    >
                      <path d='M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4' />
                      <path d='M14 13.12c0 2.38 0 6.38-1 8.88' />
                      <path d='M17.29 21.02c.12-.6.43-2.3.5-3.02' />
                      <path d='M2 12a10 10 0 0 1 18-6' />
                      <path d='M2 16h.01' />
                      <path d='M21.8 16c.2-2 .131-5.354 0-6' />
                      <path d='M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2' />
                      <path d='M8.65 22c.21-.66.45-1.32.57-2' />
                      <path d='M9 6.8a6 6 0 0 1 9 5.2v2' />
                    </svg>
                  </motion.div>
                </motion.div>
                <motion.button
                  onClick={() => {
                    setRes(undefined)
                    setLoading(true)
                    IdentifyClientMembershipFinger()
                      .then((data) => {
                        setRes(data)
                        setLoading(false)
                      })
                      .catch((err) => {
                        console.error(err)
                        setLoading(false)
                      })

                    console.log('Identifying membership...')
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full max-w-[300px] bg-white text-[#FF6B6B] hover:bg-white/80'
                >
                  Identify Membership
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, height: 0 }}
            animate={{ opacity: 1, scale: 1, height: 'auto' }}
            exit={{ opacity: 0, scale: 0.8, height: 0 }}
            transition={{ duration: 0.5 }}
            className='flex items-center justify-center space-x-2 overflow-hidden'
          >
            <IconLoader2 className='animate-spin' />
            <span className='text-white '>Identifying Client...</span>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {res !== undefined && (
          <motion.section
            initial={{ opacity: 0, y: -50 }}
            animate={animationControls}
            exit={{ opacity: 0, height: 0 }}
            className='w-full bg-white/50 py-12 md:py-24 lg:py-32 '
          >
            <div className='container mx-auto px-4 md:px-6'>
              <div className='mx-auto max-w-4xl'>
                <div className='flex flex-col items-start gap-6 rounded-lg bg-gray-100 p-6 dark:bg-gray-800'>
                  <div className='flex items-center gap-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='h-6 w-6 text-primary'
                    >
                      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
                      <circle cx='12' cy='7' r='4' />
                    </svg>
                    <h3 className='text-lg font-semibold'>{res.memberships.first_name} {res.memberships.last_name}</h3>
                  </div>
                  <div className='flex items-center gap-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='h-5 w-5 text-gray-500 dark:text-gray-400'
                    >
                      <path d='M8 2v4' />
                      <path d='M16 2v4' />
                      <rect width='18' height='18' x='3' y='4' rx='2' />
                      <path d='M3 10h18' />
                    </svg>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>{res.memberships.created_at}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='h-5 w-5 text-gray-500 dark:text-gray-400'
                    >
                      <path d='M8 2v4' />
                      <path d='M16 2v4' />
                      <rect width='18' height='18' x='3' y='4' rx='2' />
                      <path d='M3 10h18' />
                      <path d='M8 14h.01' />
                      <path d='M12 14h.01' />
                      <path d='M16 14h.01' />
                      <path d='M8 18h.01' />
                      <path d='M12 18h.01' />
                      <path d='M16 18h.01' />
                    </svg>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>{res.response.message}</p>
                  </div>
                  <div className='mt-auto flex w-full justify-between'>
                    <button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3'>
                      Edit
                    </button>
                    <button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background h-9 rounded-md px-3 text-red-500 hover:bg-red-500 hover:text-white'>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </motion.section>

        )}
      </AnimatePresence>
    </DashBoard>

  )
}
