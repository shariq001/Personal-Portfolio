import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='xl:w-[1440px] xl:px-[100px] xl:py-[16px] xl:flex xl:justify-between xl:items-center text-[#c7c7c7]'>
        <h1 className='bebas text-[32px]'>MUHAMMAD SHARIQ</h1>
        <nav className='flex justify-center items-center gap-[32px] text-[16px] inter'>
            <Link href=''>Work</Link>
            <Link href=''>About</Link>
            <Link href=''>Contact</Link>
        </nav>
    </div>
  )
}

export default Header