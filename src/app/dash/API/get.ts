
import { APIENDPOINTS } from '@/services/api-calls'
import { z } from 'zod'

export const getMembersSchema = z.object({
  status: z.literal('success'),
  message: z.string().optional(),
  members: z.object({
    user_id: z.number().optional(),
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    email: z.string().optional(),
    membership_id: z.number().optional(),
    membership_created_at: z.string().optional(),
    expiration_date: z.string().optional(),
    have_membership: z.string().optional()
  }).optional()
})

export type GetMembers = z.infer<typeof getMembersSchema>

export const getMembers = async () => {
  const response = await fetch(APIENDPOINTS.getGetMembershipsPoint('yes'), {
    method: 'GET'
  })

  if (!response.ok) {
    throw new Error('Failed to get members')
  }

  const data = await response.json()
  console.log(data)

  const parsedData = getMembersSchema.parse(data)

  const length = Object.keys(parsedData.members ?? {}).length

  if (length === 0) {
    throw new Error('No members found')
  }

  console.log('Parsed data:', parsedData)

  console.log('Members:', length)

  return {
    parsedData,
    length
  }
}
