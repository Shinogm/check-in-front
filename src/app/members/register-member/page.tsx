import React from 'react'
// eslint-disable-next-line import/no-absolute-path
import { DashBoard } from '@/components/dashboard'
import { RegisterForm } from '@/app/register/components/register-form'

export default function RegisterMember () {
  return (
    <DashBoard>
      <RegisterForm />
    </DashBoard>
  )
}
