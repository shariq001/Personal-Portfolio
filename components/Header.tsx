import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='xl:min-w-[1440px] xl:px-[80px] xl:py-[16px] flex justify-between items-center text-[#c7c7c7] sm:min-w-[375px] sm:px-[15px]'>
        <h1 className='bebas xl:text-[32px] sm:text-[28px]'>MUHAMMAD SHARIQ</h1>
        <nav className='flex justify-center items-center gap-[32px] text-[16px] inter sm:hidden'>
            <Link href='#work'>Work</Link>
            <Link href='#about-sec'>About</Link>
            <Link href='#contact'>Contact</Link>
        </nav>
        <div className='xl:hidden sm:block'>
          <FontAwesomeIcon icon={faBars} className='size-[15px]'  />
        </div>
    </div>
  )
}

export default Header