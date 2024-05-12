
import { z } from 'zod'

export const getMembersSchema2 = z.object({
  message: z.string(),
  length: z.number(),
  memberships: z.array(
    z.object({
      membership: z.object({
        id: z.number(),
        created_at: z.string(),
        user_id: z.number(),
        expiration_date: z.string(),
        have_membership: z.string(),
        fingerprint_id: z.nullable(z.unknown())
      }),
      client_info: z.array(
        z.object({
          id: z.number(),
          first_name: z.string(),
          last_name: z.string(),
          email: z.string(),
          password: z.nullable(z.unknown()),
          created_at: z.string(),
          perms: z.string()
        })
      )
    })
  )
})

export type GetMembers2 = z.infer<typeof getMembersSchema2>

export const getMembersTest = async () => {
  const response = await fetch('http://localhost:3001/membership/get-members')

  console.log('Response:', response)
  console.log('Response:', response.status)
  const data = await response.json()

  console.log(data)

  if (!response.ok) {
    console.log('Failed to get members')
  } else {
    const parsedData = getMembersSchema2.parse(data)
    console.log('Parsed data:', parsedData)

    return parsedData
  }
}
