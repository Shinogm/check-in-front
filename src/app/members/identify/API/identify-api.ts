import { APIENDPOINTS } from '@/services/api-calls'
import { z } from 'zod'

export const schemaClientFinger = z.object({
  message: z.literal('verified membership by fingerprint'),
  memberships: z.object({
    id: z.number(),
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().optional(),
    password: z.nullable(z.string()),
    created_at: z.string(),
    perms: z.string()
  }),
  response: z.object({
    message: z.string()
  })
})

export type schemaClientFingerType = z.infer<typeof schemaClientFinger>

export default async function IdentifyClientMembershipFinger () {
  const response = await fetch(`${APIENDPOINTS.getMembershipIsOutFingerPoint}`, {
    method: 'GET'
  })
  console.log(response)

  console.log(response)

  if (!response.ok) {
    throw new Error('Error al identificar el cliente')
  }

  const data = await response.json()
  console.log(data)
  const parsedData = schemaClientFinger.parse(data)
  console.log(parsedData)
  return parsedData
}
