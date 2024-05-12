import { APIENDPOINTS } from '@/services/api-calls'

export const createMember = async (id: number, months: number) => {
  const response = await fetch(`${APIENDPOINTS.postCreateMembershipPoint(id, months)}`, {
    method: 'POST'
  })

  console.log('Response:', response)
}
