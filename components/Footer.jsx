import Image from 'next/image'
import Link from 'next/link';


const Footer = () => {
  return (
    <div className='px-5 mt-12 h-[835px]'>
       <Image src="/images/Logo.jpg"  width={56}
      height={56} className='mb-12'/>
      <span className="font-semibold text-[16px]  pb-3">Quick Links</span>
      <div className='flex flex-col font-normal text-[14px] pt-3'>
        <p className='pb-2'>Home Page</p>
        <p className='pb-2'>Menu Options</p>
        <p className='pb-2'>Contact Us</p>
        <p className='pb-2'>About Us</p>
        <p className='pb-[77px]'></p>
      </div>

      <span className="font-semibold text-[16px] pb-3">Stay Connected</span>
      <div className="flex flex-col pt-3 pb-12">
  <p className="flex items-center gap-3 py-[9.5]">
    <Image src="/images/Facebook.png" width={24} height={24} alt="Facebook" />
    <span className='font-normal text-[14px]'>Facebook</span>
  </p>
  <p className="flex items-center gap-3 py-[9.5]">
    <Image src="/images/Instagram.png" width={24} height={24} alt="Instagram" />
    <span className='font-normal text-[14px]'>Instagram</span>
  </p>
  <p className="flex items-center gap-3 py-[9.5]">
    <Image src="/images/youtube.png" width={24} height={24} alt="YouTube" />
    <span className='font-normal text-[14px]'>YouTube</span>
  </p>
</div>
<hr/>
<div className="flex flex-col pt-[25px] pb-4">
        <Link href="/privacy-policy" className="hover:underline pb-4">
          Privacy Policy
        </Link>
        <Link href="/terms-of-use" className="hover:underline pb-4">
          Terms of Use
        </Link>
        <Link href="/cookie-settings" className="hover:underline pb-4">
          Cookie Settings
        </Link>
        <p className='pt-8'>© 2024 Your Company. All rights reserved.</p>
      </div>
      </div>
  )
}

export default Footer
