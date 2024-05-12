import { APIENDPOINTS } from '@/services/api-calls'

export const cancelMemmership = async (code: number) => {
  const response = await fetch(`http://localhost:3001/membership/cancel/code/${code}`, {
    method: 'DELETE'
  })

  console.log('Response:', response)

  if (!response.ok) {
    throw new Error('Failed to cancel membership')
  }

  const data = await response.json()

  console.log('Data:', data)
  return data
}
