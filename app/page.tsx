import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faUpwork } from '@fortawesome/free-brands-svg-icons';
import Header from '@/components/Header';
import Image from 'next/image';



const Home = () => {
  return (
    <div className='xl:min-w-[1440px] sm:min-w-[375px]'>

      <Header />
      
      {/* Section 1 */}
      <div className='xl:p-[80px] flex xl:flex-row justify-between w-full items-center border-[#484848] border-b-[1px] sm:flex-col sm:gap-[30px] sm:px-[15px] sm:py-[50px]'>

        {/* Left */}
        <div className='flex flex-col gap-[20px] justify-center items-start xl:w-[630px] xl:max-w-[630px] sm:min-w-[343px] sm:max-w-[400px]'>
          <h1 className='text-white xl:text-[101px] bebas leading-[90%] sm:text-[57px]'>HI, I AM <br /> MUHAMMAD SHARIQ.</h1>
          <p className='text-[#c7c7c7] xl:text-[18px] manrope sm:text-[16px]'>Creative Front-End Developer | Passionate About Responsive Design</p>
          <div className='flex justify-start items-center xl:gap-[16px] sm:gap-[10px]'>
            <Link href='mailto:muhammadshariqfazal@gmail.com' target='_blank'><button type='button' className='bg-[#D3E97A]  manrope rounded-[50px] px-[24px] py-[20px] font-bold text-black sm:text-[14px] xl:text-[16px]'>CONTACT ME <FontAwesomeIcon icon={faCircle} className='xl:size-[12px] inline-flex items-center ml-[15px] sm:size-[10px]' /> </button></Link>
            <Link href='https://www.upwork.com/freelancers/~01d1e47120d0918186?mp_source=share' target='_blank' className='bg-[#222222] rounded-full w-[60px] h-[60px] flex justify-center items-center'><FontAwesomeIcon icon={faUpwork} className='size-[26px] text-[#D3E97A]' /></Link>
            <Link href='https://www.linkedin.com/in/muhammad---shariq' target='_blank' className='bg-[#222222] rounded-[50px] w-[60px] h-[60px] flex justify-center items-center'><FontAwesomeIcon icon={faLinkedinIn} className='size-[26px] text-[#D3E97A]' /></Link>
          </div>
        </div>

        {/* Right */}
        <div className='xl:w-[600px] xl:h-[700px] bg-[#1a1a1a] rounded-[10px] sm:w-[343px]  sm:h-[400px] xl:px-[100px] xl:py-[80px] flex justify-center items-center'>
          <Image src='/images/my-pic.jpeg' width={600} height={800} alt='My Pic' />
        </div>
      </div>

      {/* Section 2 */}
      <div id='work' className='xl:p-[80px] border-[#484848] border-b-[1px] sm:px-[15px] sm:py-[50px] sm:flex sm:flex-col sm:items-center xl:items-start'>
        <h1 className='xl:text-[78px] bebas text-[#c7c7c7] sm:text-[57px] sm:leading-[90%]'>FEATURED PROJECTS</h1>
        <p className='text-[#c7c7c7] xl:text-[18px] manrope xl:max-w-[600px] sm:text-[16px] sm:min-w-[343px] sm:max-w-[400px]'>Here are some of the selected projects that showcase my passion for front-end development.</p>

        {/* 1 */}
        <div className='flex xl:flex-row justify-between w-full items-center my-[50px] sm:flex-col sm:gap-[30px]'>

          {/* Left */}
          <div className='xl:w-[600px] bg-[#1a1a1a] xl:h-[600px] rounded-[10px] sm:w-[343px] sm:h-[400px] xl:p-[0px] flex justify-center items-center sm:py-[80px]'>
            <Image src='/images/project-1.png' width={600} height={600} alt='Project 1' className='xl:w-[600px] xl:h-[400px] rounded-[10px]'/>
          </div>

          {/* Right */}
          <div className='xl:p-[50px] xl:max-w-[600px] flex flex-col gap-[20px] manrope sm:px-[10px] sm:min-w-[343px] sm:max-w-[500px]'>
            <h1 className='text-white xl:text-[32px] sm:text-[24px] leading-[140%] font-medium'>Building Modern Web Experiences.</h1>
            <p className=' xl:text-[18px] text-[#c7c7c7] leading-[150%] sm:text-[14px]'>Showcase your journey, skills, and achievements with this modern and responsive portfolio template. Built with Next.js and styled with Tailwind CSS, this design ensures speed, flexibility, and a stunning user experience. Customize it your way and let your work shine!</p>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>PROJECT INFO</h3>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Year</h3>
              <p className='text-[#c7c7c7] '>2024</p>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Role</h3>
              <p className='text-[#c7c7c7] '>Front-end Developement</p>
            </div>
            <div className='flex justify-start items-center gap-[24px] text-[#D3E97A] xl:w-[576px] sm:w-[343px]'>
              <Link href='https://9-assignment.vercel.app' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>LIVE DEMO <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
              
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className='flex xl:flex-row justify-between w-full items-center my-[50px] sm:flex-col sm:gap-[30px]'>

          {/* Left */}
          <div className='xl:w-[600px] bg-[#1a1a1a] xl:h-[600px] rounded-[10px] sm:w-[343px] sm:h-[400px] xl:p-[0px] flex justify-center items-center sm:py-[90px]'>
            <Image src='/images/project2.png' width={600} height={600} alt='Project 2' className='xl:w-[600px] xl:h-[400px] rounded-[10px]'/>
          </div>

          {/* Right */}
          <div className='xl:p-[50px] xl:max-w-[600px] flex flex-col gap-[20px] manrope sm:px-[10px] sm:min-w-[343px] sm:max-w-[500px]'>
            <h1 className='text-white xl:text-[32px] sm:text-[24px] leading-[140%] font-medium'>Designed with Whitepace Precision.</h1>
            <p className=' xl:text-[18px] sm:text-[14px] text-[#c7c7c7] leading-[150%]'>Welcome to a fully responsive landing page that embraces the art of whitepace. Crafted using Next.js and Tailwind CSS, this design highlights clean layouts and balanced spaces, creating an elegant and modern user experience.</p>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>PROJECT INFO</h3>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Year</h3>
              <p className='text-[#c7c7c7] '>2024</p>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Role</h3>
              <p className='text-[#c7c7c7] '>Web Designer</p>
            </div>
            <div className='flex justify-start items-center gap-[24px] text-[#D3E97A] xl:w-[576px] sm:w-[343px]'>
              <Link href='https://6-assignment-eight.vercel.app/' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>LIVE DEMO <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
              
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className='flex xl:flex-row justify-between w-full items-center my-[50px] sm:flex-col sm:gap-[30px] '>

          {/* Left */}
          <div className='xl:w-[600px] bg-[#1a1a1a] xl:h-[600px] rounded-[10px] sm:w-[343px] sm:h-[400px] xl:p-[0px] sm:py-[60px] flex justify-center items-center'>
            <Image src='/images/project3.png' width={600} height={600} alt='Project 3' className='xl:w-[600px] xl:h-[350px] rounded-[10px]'/>
          </div>

          {/* Right */}
          <div className='xl:p-[50px] xl:max-w-[600px] flex flex-col gap-[20px] manrope sm:px-[10px] sm:min-w-[343px] sm:max-w-[500px]'>
            <h1 className='text-white xl:text-[32px] sm:text-[24px] leading-[140%] font-medium'>Drive Your Passion, Discover Your Ride.</h1>
            <p className=' xl:text-[18px] text-[#c7c7c7] leading-[150%] sm:text-[16px]'>This fully responsive PakWheels homepage clone recreates the sleek, user-friendly design of Pakistan’s leading car marketplace. Built with precision using Next.js and Tailwind CSS, it ensures a seamless browsing experience across all devices. Explore, admire, and customize to make it your own!</p>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>PROJECT INFO</h3>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px]  xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Year</h3>
              <p className='text-[#c7c7c7] '>2024</p>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px]  xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Role</h3>
              <p className='text-[#c7c7c7] '>Front-end Developement</p>
            </div>
            <div className='flex justify-start items-center gap-[24px] text-[#D3E97A]  xl:w-[576px] sm:w-[343px]'>
              <Link href='https://10-assignment-inky.vercel.app/' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>LIVE DEMO <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
              
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className='flex xl:flex-row justify-between w-full items-center my-[50px] sm:flex-col sm:gap-[30px] '>

          {/* Left */}
          <div className='xl:w-[600px] bg-[#1a1a1a] xl:h-[600px] rounded-[10px] sm:w-[343px] sm:h-[400px] xl:p-[0px] flex justify-center items-center sm:py-[60px]'>
            <Image src='/images/project4.png' width={500} height={600} alt='Project 4' className='xl:w-[600px] xl:h-[400px] rounded-[10px]'/>
          </div>

          {/* Right */}
          <div className='xl:p-[50px] xl:max-w-[600px] flex flex-col gap-[20px] manrope sm:px-[10px] sm:min-w-[343px] sm:max-w-[500px]'>
            <h1 className='text-white xl:text-[32px] sm:text-[24px] leading-[140%] font-medium'>Your Portfolio, Your Story.</h1>
            <p className=' xl:text-[18px] text-[#c7c7c7] leading-[150%] sm:text-[16px]'>This minimalist portfolio design features a responsive Home and About page, perfect for introducing yourself and showcasing your journey. Built with Next.js and Tailwind CSS, it delivers a clean, modern look that adapts effortlessly to any screen size.</p>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>PROJECT INFO</h3>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px]  xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Year</h3>
              <p className='text-[#c7c7c7] '>2024</p>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px]  xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Role</h3>
              <p className='text-[#c7c7c7] '>Front-end Developement</p>
            </div>
            <div className='flex justify-start items-center gap-[24px] text-[#D3E97A]  xl:w-[576px] sm:w-[343px]'>
              <Link href='https://4-assignment-six.vercel.app/' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>LIVE DEMO <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
              
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className='flex xl:flex-row justify-between w-full items-center my-[50px] sm:flex-col sm:gap-[30px] '>

          {/* Left */}
          <div className='xl:w-[600px] bg-[#1a1a1a] xl:h-[600px] rounded-[10px] sm:w-[343px] sm:h-[400px] xl:p-[0px] flex justify-center items-center sm:py-[60px]'>
            <Image src='/images/project5.png' width={500} height={600} alt='Project 5' className='xl:w-[600px] xl:h-[400px] rounded-[10px]'/>
          </div>

          {/* Right */}
          <div className='xl:p-[50px] xl:max-w-[600px] flex flex-col gap-[20px] manrope sm:px-[10px] sm:min-w-[343px] sm:max-w-[500px]'>
            <h1 className='text-white xl:text-[32px] sm:text-[24px] leading-[140%] font-medium'>Shop the Design, Experience the Vision.</h1>
            <p className=' xl:text-[18px] text-[#c7c7c7] leading-[150%] sm:text-[16px]'>This fully responsive eCommerce website template is crafted with Next.js and Tailwind CSS. While not functional, it showcases a modern and sleek design, perfect for presenting products and creating a captivating shopping experience on any device.</p>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>PROJECT INFO</h3>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px]  xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Year</h3>
              <p className='text-[#c7c7c7] '>2024</p>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px]  xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Role</h3>
              <p className='text-[#c7c7c7] '>Front-end Developement</p>
            </div>
            <div className='flex justify-start items-center gap-[24px] text-[#D3E97A]  xl:w-[576px] sm:w-[343px]'>
              <Link href='https://ui-ux-hackathon-shariq.vercel.app/' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>LIVE DEMO <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
              <Link href='https://github.com/shariq001/ui-ux-hackathon.git' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>SEE ON GITHUB<FontAwesomeIcon icon={faGithub} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
            </div>
          </div>
        </div>

        
      </div>

      {/* Section 3 */}
      <div id='about-sec' className='xl:p-[80px] flex xl:flex-row xl:justify-between items-center w-full border-[#484848] border-b-[1px] xl:h-[500px] sm:px-[15px] sm:py-[50px] sm:flex-col sm:gap-[30px] sm:justify-start sm:h-[550px]'>
        <h1 className='bebas xl:text-[101px] sm:text-[43px]'>ABOUT ME</h1>
        <div className='manrope xl:max-w-[704px] flex flex-col gap-[20px] sm:min-w-[343px] sm:max-w-[500px]'>
          <h2 className='xl:text-[32px] leading-[140%] sm:text-[24px]'>Aspiring Front-End Developer focused on creativity, education, and impactful projects.</h2>
          <p> Driven front-end developer with expertise in TypeScript, HTML, CSS, and frameworks like Next.js. Experienced in creating responsive, user-friendly interfaces using ShadCN and modern web technologies. Passionate about crafting high-quality, interactive web experiences while contributing to innovative projects. Always eager to enhance and reine front-end development skills in a collaborative environment. </p>

          <Link href='/About' className='text-[#D3E97A] font-bold underline '>MORE ABOUT ME</Link>
        </div>
      </div>

      
    </div>
  )
}

export default Home