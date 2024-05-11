
import { APIENDPOINTS } from '@/services/api-calls'
import { z } from 'zod'

export const registerClientSchema = z.object({
  status: z.literal('success'),
  message: z.string(),
  id: z.number(),
  user: z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string(),
    password: z.nullable(z.string()).optional()
  })
})

export type RegisterClient = z.infer<typeof registerClientSchema>

export const registerClientAPI = async (form: FormData) => {
  console.log(form)
  const response = await fetch(APIENDPOINTS.postCreateClientPoint, {
    method: 'POST',
    body: form
  })

  if (!response.ok) {
    throw new Error('Failed to register client')
  }

  const data = await response.json()
  console.log(data)

  const parsedData = registerClientSchema.parse(data)

  return parsedData
}
