import React from 'react'
import Link from 'next/link'

const AboutHeader = () => {
  return (
    <div className='xl:min-w-[1440px] xl:px-[80px] xl:py-[16px] xl:flex xl:justify-between xl:items-center text-[#c7c7c7]'>
        <h1 className='bebas text-[32px]'>MUHAMMAD SHARIQ</h1>
        <nav className='flex justify-center items-center gap-[32px] text-[16px] inter'>
            <Link href=''>Capabilites</Link>
            <Link href=''>Education</Link>
            <Link href=''>Contact</Link>
        </nav>
    </div>
  )
}

export default AboutHeader