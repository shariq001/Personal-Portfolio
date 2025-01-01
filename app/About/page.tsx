import AboutHeader from '@/components/AboutHeader'
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faUpwork  } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className='xl:min-w-[1440px]'>
        <AboutHeader />

        {/* Section 1 */}
        <div className='xl:p-[80px] flex xl:flex-row xl:justify-between w-full border-[#484848] border-b-[1px] sm:px-[15px] sm:py-[50px] sm:flex-col sm:items-center xl:items-start sm:justify-start sm:gap-[30px]'>
        <h1 className='bebas xl:text-[101px] sm:text-[57px]'>ABOUT ME</h1>
        <div className='manrope xl:max-w-[600px] flex flex-col gap-[20px] sm:min-w-[343px] sm:max-w-[400px]'>
          <h2 className='xl:text-[32px] sm:text-[24px] leading-[140%]'>Aspiring Generative AI Engineer focused on growth and innovation.</h2>
          <p>I&apos;m Muhammad Shariq, a passionate learner with a keen interest in technology and problem-solving. Aspiring to become a Generative AI Engineer, I focus on mastering modern tools and building innovative solutions. I strive to grow both personally and professionally by taking on challenges that push my limits, aiming to make a meaningful impact through my work.</p>

          <div className='flex justify-start items-center xl:gap-[24px] sm:gap-[14px]'>
            <Link href="Muhammad Shariq's Resume.pdf" download target='_blank' className='bg-[#D3E97A] xl:px-[32px] sm:px-[20px] py-[16px] rounded-[50px] text-black font-bold my-[20px] xl:text-[16px] sm:text-[14px]'>DOWNLAOD RESUME <FontAwesomeIcon icon={faCircle} className='size-[10px] xl:inline-flex sm:hidden ml-[15px]' /></Link>
            <Link href='https://www.upwork.com/freelancers/~01d1e47120d0918186' target='_blank' className='bg-[#222222] rounded-[50px] p-[20px]'><FontAwesomeIcon icon={faUpwork} className='size-[26px] text-[#D3E97A]' /></Link>
            <Link href='https://github.com/shariq001' target='_blank' className='bg-[#222222] rounded-[50px] p-[20px]'><FontAwesomeIcon icon={faGithub} className='size-[26px] text-[#D3E97A]' /></Link>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div id='capabilities' className='xl:p-[80px] flex xl:flex-row xl:justify-between w-full border-[#484848] border-b-[1px] manrope sm:px-[15px] sm:py-[50px] sm:flex-col sm:items-center xl:items-start sm:justify-start sm:gap-[30px]'>
        <h1 className='bebas xl:text-[101px] sm:text-[57px]'>MY CAPABILITIES</h1>
        <div className='xl:max-w-[600px] sm:min-w-[343px] sm:max-w-[400px]'>
          <p>I am a dedicated learner with a strong interest in programming and web development. I specialize in creating responsive, user-friendly solutions and have experience with modern tools and frameworks. Continuously improving my skills, I aim to grow as a software engineer and contribute to impactful projects.</p>
          <div className='flex w-full flex-wrap xl:gap-[5px] xl:justify-between my-[20px] sm:justify-start sm:gap-[10px]'>
            <h2 className='border-white border-[2px] rounded-[50px] px-[25px] py-[16px]'>HTML</h2>
            <h2 className='border-white border-[2px] rounded-[50px] px-[25px] py-[16px]'>CSS</h2>
            <h2 className='border-white border-[2px] rounded-[50px] px-[25px] py-[16px]'>Typescript</h2>
            <h2 className='border-white border-[2px] rounded-[50px] px-[25px] py-[16px]'>NextJs</h2>
            <h2 className='border-white border-[2px] rounded-[50px] px-[25px] py-[16px]'>GitHub</h2>
            <h2 className='border-white border-[2px] rounded-[50px] px-[25px] py-[16px]'>Problem-solving</h2>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div id='education' className='xl:p-[80px] flex xl:flex-row xl:justify-between w-full border-[#484848] border-b-[1px] manrope sm:px-[15px] sm:py-[50px] sm:flex-col sm:items-center xl:items-start sm:justify-start sm:gap-[30px]'>
        <h1 className='bebas xl:text-[101px] sm:text-[57px]'>MY EDUCATION</h1>
        <div className='xl:max-w-[600px] sm:min-w-[343px] sm:max-w-[400px]'>

          {/* 1 */}
          <div className='flex flex-col gap-[20px]'>
            <div className='flex xl:flex-row xl:justify-between xl:items-center sm:flex-col sm:justify-start sm:gap-[20px]'>
              <h3 className='text-[24px] font-medium'>NITSEP Web Development Course</h3>
              <p>Sep 2024 --
                Present
              </p>
            </div>
            <p>I am pursuing the Full Stack Web Engineering course at NITSEP (Nationwide IT Skillsets Expansion Program), where I am learning to develop dynamic and responsive websites and applications. This course equips me with essential skills in modern frameworks and tools, strengthening my foundation in web development.</p>
          </div>

          {/* 2 */}
          <div className='flex flex-col gap-[20px] mt-[30px]'>
            <div className='flex xl:flex-row xl:justify-between xl:items-center sm:flex-col sm:justify-start sm:gap-[20px]'>
              <h3 className='text-[24px] font-medium'>GIAIC Generative AI Engineering Course</h3>
              <p>Feb 2024 --
                Present
              </p>
            </div>
            <p>At GIAIC (Governor Initiatives for Artificial and Intelligence), I am enrolled in the Cloud Applied Generative AI Engineering course. This program focuses on leveraging AI technologies to design innovative and intelligent solutions, enhancing my expertise in applying generative AI to real-world challenges.</p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default About