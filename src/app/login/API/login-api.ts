'use server'
import { APIENDPOINTS } from '@/services/api-calls'
import { z } from 'zod'

export default async function Login (form: FormData) {
  console.log('form', form)
  // queryparams

  const query = new URLSearchParams()
  query.append('email', form.get('email') as string)
  query.append('password', form.get('password') as string)
  console.log('query', query)
  const response = await fetch(`${APIENDPOINTS.postLoginPoint}?${query.toString()}`, {
    method: 'POST'
  })

  console.log(response)

  if (!response.ok) {
    throw new Error('Error al iniciar sesión')
  }

  const data = await response.json()
  return data
}
