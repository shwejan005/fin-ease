import { silkScreen } from '@/app/layout'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import ModeToggle from '../mode-toggle'

function Navbar() {
  return (
    <div className='h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-green-500 flex justify-between items-center'>
      <Link href='/' className={`${silkScreen.className} text-4xl font-bold`}>
        FinEase
      </Link>
      <div className='flex items-center justify-center gap-4'>
        <Link href='/learn' className='text-green-500 hover:text-green-400'>
          Learn
        </Link>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  )
}

export default Navbar