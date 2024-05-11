import { APIENDPOINTS } from '@/services/api-calls'
import { z } from 'zod'

export const clientFingerSchema = z.object({
  status: z.literal('success'),
  message: z.string(),
  user: z.object({
    id: z.number(),
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().optional(),
    password: z.null().optional(),
    created_at: z.string(),
    perms: z.string()
  }),
  fingerprint: z.string().optional()
})

export type ClientFingerModel = z.infer<typeof clientFingerSchema>

export default async function ClientFinger (clientID: number) {
  console.log('clientID', clientID)

  const response = await fetch(`${APIENDPOINTS.postCreateClientFingerPoint(clientID)}`, {
    method: 'POST'
  })

  console.log(response)

  if (!response.ok) {
    throw new Error('Failed to register finger')
  }

  const data = await response.json()
  console.log(data)

  const parsedData = clientFingerSchema.parse(data)

  return parsedData
}
