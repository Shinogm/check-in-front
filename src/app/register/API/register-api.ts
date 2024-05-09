'use server'
import { APIENDPOINTS } from '@/services/api-calls'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { z } from 'zod'

const tokenPasword = 1234
export default async function RegisterAdmin (form: FormData, token: number) {
  if (token !== tokenPasword) {
    throw new Error('Token invalido')
  }
  console.log('token valido')

  console.log('form', form, token)

  console.log(form)

  const response = await fetch(`${APIENDPOINTS.postRegisterPoint}`, {
    method: 'POST',
    body: form
  })

  console.log(response)

  if (!response.ok) {
    throw new Error('Error al registrar usuario')
  }

  const data = await response.json()
  console.log(data)
  return data
}
