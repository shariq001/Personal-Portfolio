import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ContactHeader from '@/components/ContactHeader';


const Contact = () => {
  return (
    <div className='xl:min-w-[1440px] sm:min-w-[320px] md:min-w-[768px]'>

        <ContactHeader />
        <div id='contact' className='xl:p-[80px] lg:px-[30px] flex md:flex-row md:justify-between  w-full border-[#484848] border-b-[1px] manrope sm:px-[15px] sm:py-[50px] sm:flex-col sm:gap-[30px] sm:justify-start '>

            {/* Left */}
            <div className='flex flex-col gap-[20px] md:min-w-[350px] sm:min-w-[290px] lg:min-w-[450px]'>
            <h1 className='xl:text-[76px] bebas sm:text-[43px]'>LET&apos;S CONNECT</h1>
            <p>Say hello at <Link href='mailto:muhammadshariqfazal@gmail.com' target='_blank' className='border-[#D3E97A] text-white border-b-[2px]'>muhammadshariqfazal@gmail.com</Link></p>
            <p>For more info, here&apos;s my <Link href="Muhammad Shariq's Resume.pdf" download target='_blank' className='border-[#D3E97A] border-b-[2px] text-white'>resume</Link></p>
            <div className='flex justify-start gap-[24px] items-center text-[#D3E97A]'>
                <Link href='https://www.linkedin.com/in/muhammad---shariq' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className='size-[32px]' /></Link>
                <Link href='https://github.com/shariq001' target='_blank'><FontAwesomeIcon icon={faGithub} className='size-[32px]' /></Link>
                <Link href='https://www.facebook.com/profile.php?id=61561612011431&sk=grid&_rdc=1&_rdr' target='_blank'><FontAwesomeIcon icon={faFacebookF} className='size-[32px]' /></Link>
                <Link href='https://www.instagram.com/mu_shariq1' target='_blank'><FontAwesomeIcon icon={faInstagram} className='size-[32px]' /></Link>
            </div>
            <p className='lg:mt-[280px] xl:mt-[240px] sm:hidden lg:block'>&copy; 2024 Muhammad Shariq</p>
            </div>

            {/* Right */}
            <div className='xl:max-w-[600px] sm:w-full md:min-w-[350px] lg:min-w-[450px]'>
            <form action="">
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" placeholder='Enter your Name' className='w-full outline-none border-none bg-[#1a1a1a] p-[15px] rounded-[5px] mt-[5px] mb-[20px]'/>

                <label htmlFor="Email" className='mt-[20px]'>Email</label>
                <input type="email" name="Email" placeholder='Enter your Email' className='w-full outline-none border-none bg-[#1a1a1a] p-[15px] rounded-[5px] mt-[5px] mb-[20px]'/>

                <label htmlFor="Subject" className='mt-[20px]'>Subject</label>
                <input type="text" name="Subject" placeholder='Enter your Subject' className='w-full outline-none border-none bg-[#1a1a1a] p-[15px] rounded-[5px] mt-[5px] mb-[20px]'/>

                <label htmlFor="Message" className='mt-[20px]'>Message</label>
                <textarea placeholder='Enter your Message' className='w-full outline-none border-none bg-[#1a1a1a] p-[15px] rounded-[5px] mt-[5px] min-h-[130px]'/>

                <button type='submit' className='bg-[#D3E97A] px-[32px] py-[16px] rounded-[50px] text-black font-bold my-[20px]'>SUBMIT</button>
            </form>

            <p className='sm:block lg:hidden'>&copy; 2024 Muhammad Shariq</p>
            </div>
        </div>
    </div>
  )
}

export default Contact