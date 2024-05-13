import { APIENDPOINTS } from '@/services/api-calls'

export const deleteClient = async (id: number) => {
  const response = await fetch(`${APIENDPOINTS.deleteDeleteClientPoint(id)}`, {
    method: 'DELETE'
  })

  if (!response.ok) {
    console.log('Failed to delete client')
  } else {
    const data = await response.json()
    console.log('Data:', data)
    return { data, status: response.status }
  }
}
