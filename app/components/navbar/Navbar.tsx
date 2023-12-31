'use client'

import React, { ReactElement } from 'react'
import { SafeUser } from '@/app/types'

import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'

interface NavbarProps {
  currentUser?: SafeUser | null // Type defined in prisma schema
}

const Navbar = ({ currentUser }: NavbarProps): ReactElement => {
  return (
    <div className='fixed w-full py-4 border-b bg-white shadow-sm z-10'>
      <div className='max-w-[2520px] flex flex-row items-center justify-between gap-3 md:gap-0 mx-auto px-4 sm:px-2 md:px-10 xl:px-20'>
        <Logo />
        <Search />
        <UserMenu currentUser={currentUser} />
      </div>
    </div>
  )
}

export default Navbar