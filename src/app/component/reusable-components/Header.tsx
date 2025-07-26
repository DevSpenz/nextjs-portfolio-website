import React from 'react'
  
type HeaderProps = {
    title?: string;
  }

function Header({ title = 'Header' }: HeaderProps) {
  return (
    <h1 className='text-3xl lg:text-4xl font-bold text-center py-5 bg-gradient-to-r from-neutral-300 to-neutral-600 text-transparent bg-clip-text'>{title}</h1>
  )
}

export default Header