import AboutHeader from '@/components/AboutHeader'
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faQuora } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className='xl:w-[1440px]'>
        <AboutHeader />

        {/* Section 1 */}
        <div className='p-[80px] flex justify-between w-full border-[#484848] border-b-[1px]'>
        <h1 className='bebas text-[101px]'>ABOUT ME</h1>
        <div className='manrope w-[704px] flex flex-col gap-[20px]'>
          <h2 className='text-[32px] leading-[140%]'>Aspiring Generative AI Engineer focused on growth and innovation.</h2>
          <p>I&apos;m Muhammad Shariq, a passionate learner with a keen interest in technology and problem-solving. Aspiring to become a Generative AI Engineer, I focus on mastering modern tools and building innovative solutions. I strive to grow both personally and professionally by taking on challenges that push my limits, aiming to make a meaningful impact through my work.</p>

          <div className='flex justify-start items-center gap-[24px]'>
            <Link href='' className='bg-[#D3E97A] px-[32px] py-[16px] rounded-[50px] text-black font-bold my-[20px]'>DOWNLAOD RESUME <FontAwesomeIcon icon={faCircle} className='size-[10px] inline-flex ml-[15px]' /></Link>
            <Link href='' className='bg-[#222222] rounded-[50px] p-[20px]'><FontAwesomeIcon icon={faQuora} className='size-[26px] text-[#D3E97A]' /></Link>
            <Link href='' className='bg-[#222222] rounded-[50px] p-[20px]'><FontAwesomeIcon icon={faGithub} className='size-[26px] text-[#D3E97A]' /></Link>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className='p-[80px] flex justify-between w-full border-[#484848] border-b-[1px]'>
        <h1 className='bebas text-[101px]'>ABOUT ME</h1>
      </div>
    </div>
  )
}

export default About