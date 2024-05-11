'use server'

export const currentParams = typeof window !== 'undefined' ? new URL(window.location.href).pathname : ''
export const { pathname } = typeof window !== 'undefined' ? new URL(window.location.href) : { pathname: '' }

console.log(pathname)
console.log(currentParams)
