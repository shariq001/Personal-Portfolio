import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
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
            <Link href=''><button type='button' className='bg-[#D3E97A]  manrope rounded-[50px] px-[24px] py-[20px] font-bold text-black'>CONTACT ME <FontAwesomeIcon icon={faCircle} className='size-[12px] inline-flex ml-[15px]' /> </button></Link>
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
        <div className='flex justify-between w-full items-center my-[50px]'>

          {/* Left */}
          <div className='w-[600px] bg-[#1a1a1a] h-[600px] rounded-[10px]'>

          </div>

          {/* Right */}
          <div className='p-[50px] w-[600px] flex flex-col gap-[20px] manrope'>
            <h1 className='text-white text-[32px]  leading-[140%] font-medium'>Craft Your Future, One Resume at a Time!</h1>
            <p className=' text-[18px] text-[#c7c7c7] leading-[150%]'>Build, edit, and share your perfect resume effortlessly with our dynamic resume builder. Designed for all professionals, it combines simplicity, customization, and responsiveness to help you stand out. Take charge of your career story and make every application unforgettable!</p>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] w-[576px]'>
              <h3 className='font-semibold  text-white py-[10px]'>PROJECT INFO</h3>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] w-[576px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Year</h3>
              <p className='text-[#c7c7c7] '>2024</p>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] w-[576px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Role</h3>
              <p className='text-[#c7c7c7] '>Front-end Developement</p>
            </div>
            <div className='flex justify-start items-center gap-[24px] text-[#D3E97A] w-[576px]'>
              <Link href='https://shariq-resume-builder-giaic.vercel.app' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px]'>LIVE DEMO <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] inline-flex items-start ml-[8px] mb-[4px]'/></Link>
              <Link href='https://github.com/shariq001/GIAIC-Hackathon-1.git' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px]'>SEE ON GITHUB <FontAwesomeIcon icon={faGithub} className='size-[15px] inline-flex items-start ml-[8px] mb-[4px]'/></Link>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className='flex justify-between w-full items-center my-[50px]'>

          {/* Left */}
          <div className='w-[600px] bg-[#1a1a1a] h-[600px] rounded-[10px]'>

          </div>

          {/* Right */}
          <div className='p-[50px] w-[600px] flex flex-col gap-[20px] manrope'>
            <h1 className='text-white text-[32px]  leading-[140%] font-medium'>Designed Clean and Seamless Login & Signup Page</h1>
            <p className=' text-[18px] text-[#c7c7c7] leading-[150%]'>This project features beautifully designed login and signup pages with a focus on simplicity and functionality. The pages are interlinked for a smooth user experience, offering an intuitive and responsive design. Ideal for providing users with a hassle-free account creation and access process.</p>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] w-[576px]'>
              <h3 className='font-semibold  text-white py-[10px]'>PROJECT INFO</h3>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] w-[576px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Year</h3>
              <p className='text-[#c7c7c7] '>2024</p>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] w-[576px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Role</h3>
              <p className='text-[#c7c7c7] '>Web Designer</p>
            </div>
            <div className='flex justify-start items-center gap-[24px] text-[#D3E97A] w-[576px]'>
              <Link href='https://3-assignment-eta.vercel.app' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px]'>LIVE DEMO <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] inline-flex items-start ml-[8px] mb-[4px]'/></Link>
              <Link href='https://github.com/shariq001/q2-assignments.git' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px]'>SEE ON GITHUB <FontAwesomeIcon icon={faGithub} className='size-[15px] inline-flex items-start ml-[8px] mb-[4px]'/></Link>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className='flex justify-between w-full items-center my-[50px]'>

          {/* Left */}
          <div className='w-[600px] bg-[#1a1a1a] h-[600px] rounded-[10px]'>

          </div>

          {/* Right */}
          <div className='p-[50px] w-[600px] flex flex-col gap-[20px] manrope'>
            <h1 className='text-white text-[32px]  leading-[140%] font-medium'>A Desktop Showcase of Creativity</h1>
            <p className=' text-[18px] text-[#c7c7c7] leading-[150%]'>This project is a portfolio webpage designed exclusively for desktop view, highlighting a clean and visually engaging layout. It serves as a platform to showcase skills, projects, and achievements in a professional and organized manner. Focused on desktop users, the design ensures an optimal browsing experience with polished aesthetics and functionality.</p>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] w-[576px]'>
              <h3 className='font-semibold  text-white py-[10px]'>PROJECT INFO</h3>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] w-[576px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Year</h3>
              <p className='text-[#c7c7c7] '>2024</p>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] w-[576px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Role</h3>
              <p className='text-[#c7c7c7] '>Front-end Developement</p>
            </div>
            <div className='flex justify-start items-center gap-[24px] text-[#D3E97A] w-[576px]'>
              <Link href='https://9-assignment.vercel.app' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px]'>LIVE DEMO <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] inline-flex items-start ml-[8px] mb-[4px]'/></Link>
              <Link href='https://github.com/shariq001/q2-assignments.git' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px]'>SEE ON GITHUB<FontAwesomeIcon icon={faGithub} className='size-[15px] inline-flex items-start ml-[8px] mb-[4px]'/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home