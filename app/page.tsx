import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className='xl:w-[1440px]'>
      
      {/* Section 1 */}
      <div className='p-[80px] flex justify-between w-full items-center border-[#484848] border-b-[1px]'>

        {/* Left */}
        <div className='flex flex-col gap-[20px] justify-center items-start w-[630px]'>
          <h1 className='text-white text-[101px] bebas leading-[90%] '>HI, I AM <br /> MUHAMMAD SHARIQ.</h1>
          <p className='text-[#c7c7c7] text-[18px] manrope'>Passionate learner striving to grow in Cloud Applied Generative AI and Full Stack Web Development.</p>
          <div className='flex justify-start items-center gap-[16px]'>
            <Link href=''><button type='button' className='bg-[#D3E97A]  manrope rounded-[50px] px-[24px] py-[20px] font-bold'>CONTACT ME <FontAwesomeIcon icon={faCircle} className='size-[12px] inline-flex ml-[15px]' /> </button></Link>
            <Link href='' className='bg-[#222222] rounded-[50px] p-[20px]'><FontAwesomeIcon icon={faLinkedin} className='size-[26px] text-[#D3E97A]' /></Link>
            <Link href='' className='bg-[#222222] rounded-[50px] p-[20px]'><FontAwesomeIcon icon={faGithub} className='size-[26px] text-[#D3E97A]' /></Link>
          </div>
        </div>

        {/* Right */}
        <div className='w-[600px] h-[700px] bg-[#c7c7c7] rounded-[10px]'></div>
      </div>

      {/* Section 2 */}
      <div className='p-[80px]'>
        <h1 className='text-[78px] bebas text-[#c7c7c7]'>FEATURED PROJECTS</h1>
        <p className='text-[#c7c7c7] text-[18px] manrope w-[600px]'>Here are some of the selected projects that showcase my passion for front-end development.</p>

        {/* 1 */}
        <div className='flex justify-between w-full items-center'>

        </div>
      </div>
    </div>
  )
}

export default Home