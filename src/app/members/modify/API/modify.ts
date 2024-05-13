import { APIENDPOINTS } from '@/services/api-calls'

export const modifyClient = async (form: FormData, id: number) => {
  const response = await fetch(`${APIENDPOINTS.putModifyClientPoint(id)}`, {
    method: 'PUT',
    body: form
  })

  if (!response.ok) {
    console.log('Failed to modify client')
  } else {
    const data = await response.json()
    console.log('Data:', data)
    return { data, status: response.status }
  }
}
