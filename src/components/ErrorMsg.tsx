import React from 'react'
type TChildren = {
  children: React.ReactNode
}
export default function ErrorMsg({ children }: TChildren) {
  return (
    <p className='error-elements -mb-3 mt-2 text-right text-xs text-primary-red'>
      {children}
    </p>
  )
}
