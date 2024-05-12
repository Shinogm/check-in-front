import { z } from 'zod'

export const getNoMembersSchema = z.object({
  message: z.string(),
  length: z.number(),
  clients: z.array(
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

export const ClientType = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  password: z.nullable(z.unknown()),
  created_at: z.string(),
  perms: z.string()
})

export type NoClientType = z.infer<typeof ClientType>

export const getNoMembersTest = async () => {
  const response = await fetch('http://localhost:3001/membership/get-clients-no-membership')

  console.log('Response:', response)
  console.log('Response:', response.status)
  const data = await response.json()

  console.log(data)

  if (!response.ok) {
    console.log('Failed to get members')
  } else {
    const parsedData = getNoMembersSchema.parse(data)
    console.log('Parsed data:', parsedData)

    return parsedData
  }
}
