import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-8 py-4 bg-slate-800'>
        <Link href={'/'} className='font-bold text-2xl text-white'>GT Coding</Link>
        <Link href={'/topic/create'} className='bg-white p-2'>Add Topic</Link>
    </nav>
  )
}

export default Navbar