import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faQuora, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Header from '@/components/Header';

const Home = () => {
  return (
    <div className='xl:min-w-[1440px]'>

      <Header />
      
      {/* Section 1 */}
      <div className='p-[80px] flex justify-between w-full items-center border-[#484848] border-b-[1px]'>

        {/* Left */}
        <div className='flex flex-col gap-[20px] justify-center items-start w-[630px]'>
          <h1 className='text-white text-[101px] bebas leading-[90%] '>HI, I AM <br /> MUHAMMAD SHARIQ.</h1>
          <p className='text-[#c7c7c7] text-[18px] manrope'>Passionate learner striving to grow in Cloud Applied Generative AI and Full Stack Web Development.</p>
          <div className='flex justify-start items-center gap-[16px]'>
            <Link href=''><button type='button' className='bg-[#D3E97A]  manrope rounded-[50px] px-[24px] py-[20px] font-bold text-black'>CONTACT ME <FontAwesomeIcon icon={faCircle} className='size-[12px] inline-flex ml-[15px]' /> </button></Link>
            <Link href='' className='bg-[#222222] rounded-[50px] p-[20px]'><FontAwesomeIcon icon={faQuora} className='size-[26px] text-[#D3E97A]' /></Link>
            <Link href='' className='bg-[#222222] rounded-[50px] p-[20px]'><FontAwesomeIcon icon={faGithub} className='size-[26px] text-[#D3E97A]' /></Link>
          </div>
        </div>

        {/* Right */}
        <div className='w-[600px] h-[700px] bg-[#c7c7c7] rounded-[10px]'></div>
      </div>

      {/* Section 2 */}
      <div id='work' className='p-[80px] border-[#484848] border-b-[1px]'>
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

      {/* Section 3 */}
      <div id='about-sec' className='p-[80px] flex justify-between w-full border-[#484848] border-b-[1px] h-[500px]'>
        <h1 className='bebas text-[101px]'>ABOUT ME</h1>
        <div className='manrope w-[704px] flex flex-col gap-[20px]'>
          <h2 className='text-[32px] leading-[140%]'>Aspiring Generative AI Engineer focused on growth and innovation.</h2>
          <p>I&apos;m Muhammad Shariq, a passionate learner with a keen interest in technology and problem-solving. Aspiring to become a Generative AI Engineer, I focus on mastering modern tools and building innovative solutions. I strive to grow both personally and professionally by taking on challenges that push my limits, aiming to make a meaningful impact through my work.</p>

          <Link href='/About' className='text-[#D3E97A] font-bold underline '>MORE ABOUT ME</Link>
        </div>
      </div>

      {/* Section 4 */}
      <div id='contact' className='p-[80px] flex justify-between w-full border-[#484848] border-b-[1px] manrope'>

        {/* Left */}
        <div className='flex flex-col gap-[20px]'>
          <h1 className='text-[76px] bebas'>LET&apos;S CONNECT</h1>
          <p>Say hello at <Link href='mailto:shariqfazal123@gmail.com' target='_blank' className='border-[#D3E97A] text-white border-b-[2px]'>shariqfazal123@gmail.com</Link></p>
          <p>For more info, here&apos;s my <Link href='' className='border-[#D3E97A] border-b-[2px] text-white'>resume</Link></p>
          <div className='flex justify-start gap-[24px] items-center text-[#D3E97A]'>
            <Link href='https://www.quora.com/profile/Muhammad-Shariq-163' target='_blank'><FontAwesomeIcon icon={faQuora} className='size-[32px]' /></Link>
            <Link href='https://github.com/shariq001' target='_blank'><FontAwesomeIcon icon={faGithub} className='size-[32px]' /></Link>
            <Link href='https://www.facebook.com/profile.php?id=61561612011431&sk=grid&_rdc=1&_rdr' target='_blank'><FontAwesomeIcon icon={faFacebookF} className='size-[32px]' /></Link>
            <Link href='https://www.instagram.com/mu_shariq1' target='_blank'><FontAwesomeIcon icon={faInstagram} className='size-[32px]' /></Link>
          </div>
          <p className='mt-[250px]'>&copy; 2024 Muhammad Shariq</p>
        </div>

        {/* Right */}
        <div className='w-[600px]'>
          <form action="">
            <label htmlFor="Name">Name</label>
            <input type="text" name="Name" placeholder='Enter you Name' className='w-full outline-none border-none bg-[#1a1a1a] p-[15px] rounded-[5px] mt-[5px] mb-[20px]'/>

            <label htmlFor="Email" className='mt-[20px]'>Email</label>
            <input type="email" name="Email" placeholder='Enter you Email' className='w-full outline-none border-none bg-[#1a1a1a] p-[15px] rounded-[5px] mt-[5px] mb-[20px]'/>

            <label htmlFor="Subject" className='mt-[20px]'>Subject</label>
            <input type="text" name="Subject" placeholder='Enter you Subject' className='w-full outline-none border-none bg-[#1a1a1a] p-[15px] rounded-[5px] mt-[5px] mb-[20px]'/>

            <label htmlFor="Message" className='mt-[20px]'>Message</label>
            <textarea placeholder='Enter your Message' className='w-full outline-none border-none bg-[#1a1a1a] p-[15px] rounded-[5px] mt-[5px] min-h-[130px]'/>

            <button type='submit' className='bg-[#D3E97A] px-[32px] py-[16px] rounded-[50px] text-black font-bold my-[20px]'>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home