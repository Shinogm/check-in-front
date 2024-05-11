
import { APIENDPOINTS } from '@/services/api-calls'
import { z } from 'zod'

export const registerMemberAPI = async (form: FormData) => {
  console.log(form)
  const response = await fetch(APIENDPOINTS.postCreateClientPoint, {
    method: 'POST',
    body: form
  })

  if (!response.ok) {
    throw new Error('Failed to register member')
  }

  const data = await response.json()

  return data
}
